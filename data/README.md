# BIS source datasets

`sources/bis_service_guides_v1.json` is a small, manually curated dataset from public BIS-operated service pages. It contains twelve general English service answers, supported question variants, a source URL for each answer, and review dates. The frontend guide picker and backend use the same dataset. It does not contain full Indian Standards, live registry records, or product-specific certification decisions. Matching accepts listed wording with optional polite prefixes/suffixes; additional identifiers or instructions are not discarded. Other queries still follow the water RAG and abstention rules. Recheck the linked BIS page before relying on a time-sensitive answer.

The `/sources` website route searches these 12 guides together with the five records in `sources/manifest.json`. It shows review or capture status and excludes the historical IS 14543 manual by default. This is a local snapshot for source discovery, not a live BIS catalogue. For current records, the site links to BIS Know Your Standard and Published Standards; the latter offers its own Excel export on the official portal.

The [BIS website copyright policy](https://www.bis.gov.in/copyright-policy/?lang=en) permits accurate, attributed reproduction of site material, subject to third-party rights. The BIS standards formulation manual separately requires written permission to reproduce any part of an Indian Standard. This dataset paraphrases public service guidance and links back to BIS; it does not reproduce standards text.

## Water-sector PDF corpus

Five official PDFs produce 203 page chunks: FSSAI December 2025 testing scheme, BIS July 2024 and July 2025 IS 14543 manuals, July 2024 IS 13428 manual, and BIS July 2025 revision circular. Original URLs and separate original/extraction hashes are in sources/manifest.json.

Install scripts/ingestion/requirements.txt, then run:

```text
python scripts/ingestion/fetch_sources.py
python scripts/ingestion/build_verified_corpus.py
python scripts/ingestion/validate_dataset.py
```

The downloader retains existing PDFs unless --overwrite is supplied and rejects non-PDF responses. The builder regenerates extracted pages, chunks, the partial timeline and the original three draft evaluation cases. The versioned `eval/water_eval_v1.json` benchmark is independent and is not overwritten by corpus regeneration.

The older IS 14543 manual is historical on documents and chunks. Other sources remain pending full review. Retrieval must filter historical material for current questions. Page chunks preserve actual PDF page positions and extracted text; they are not reviewed clause-level chunks.

Validation checks hashes and page provenance, not legal correctness, reuse permission or freshness. Hindi extraction has font-encoding errors requiring OCR/review. Remaining gaps: October 2024 Gazette (server returned HTML), verified laboratory scopes, clause/table parsing and reuse review. No end-to-end RAG integration is claimed.

`eval/water_eval_v1.json` contains 50 provenance-validated cases: 20 factual, 10 numerical/table, 8 Hindi/Telugu, 6 clarification and 6 abstention cases. Forty are development cases; the ten held-out cases exercise clarification and abstention behavior without calling the provider. The dataset remains pending independent domain review, so its results must be labelled provisional. Run from `backend/`:

```text
npm run eval:validate
npm run eval:retrieval
npm run eval:live -- --split development
npm run eval:live -- --split held_out
```

The default evaluation is deterministic and measures retrieval Recall@3, Recall@5 and MRR@5. Live mode additionally measures expected behavior, answer-key term coverage and citation-page accuracy; answerable cases call the configured provider, while deterministic clarification and abstention cases do not. `eval/water_eval_v1_results.json` records the current provisional regression results and their limitations. Do not present them as general model accuracy or publish provider-generated scores until the cases and scoring rubric receive domain review.

Local diagnostics and reconstructed drafts are retained under ignored review/ and fixtures/ directories and must not be ingested.
