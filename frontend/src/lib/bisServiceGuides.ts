import dataset from '../../../data/sources/bis_service_guides_v1.json';

// The topic picker uses the same public dataset as the backend answer allowlist.
export const bisServiceGuides = dataset.entries.map((entry) => ({
  id: entry.id,
  title: entry.title,
  question: entry.questions[0],
  reviewedOn: entry.reviewed_on || dataset.reviewed_on,
}));
