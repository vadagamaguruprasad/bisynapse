// Allowlisted questions from reviewed public BIS service pages.
// The JSON dataset is intentionally separate from the water PDF corpus.
const dataset = require('../../../data/sources/bis_service_guides_v1.json');
const entries = dataset.entries;

function normalize(value) {
  return value.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim()
    .replace(/^(?:please |could you tell me |can you tell me )/, '')
    .replace(/(?: please| thanks| thank you)$/, '').trim();
}

const answersByQuestion = new Map();
for (const entry of entries) {
  for (const question of entry.questions) {
    const key = normalize(question);
    if (answersByQuestion.has(key)) throw new Error(`Duplicate BIS service question: ${question}`);
    answersByQuestion.set(key, entry);
  }
}

function findServiceAnswer(query) {
  const entry = answersByQuestion.get(normalize(query));
  if (!entry) return null;
  return {
    answer: `${entry.answer}\n\nReviewed ${entry.reviewed_on || dataset.reviewed_on}. Confirm current details on the linked BIS page.`,
    sources: [{ title: entry.source[0], url: entry.source[1] }],
    followUps: entry.followUps,
  };
}

module.exports = { findServiceAnswer, entries };
