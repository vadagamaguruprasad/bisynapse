# BissyNapse website expansion brief

Improve the existing BissyNapse site for SIH review. Make it easier for a consumer or manufacturer to find the relevant BIS route while keeping every claim aligned with implemented capabilities.

## Working implementation prompt

**Role:** Act as a product engineer and source reviewer for an independent SIH prototype.

**Goal:** Make the website usable for a buyer, retailer, or manufacturer who needs to find a BIS standard, understand whether certification may apply, choose a scheme, locate a laboratory, check a mark, or file a complaint.

**Context:** The assistant has a reviewed water-sector PDF pilot and a small allowlisted public BIS service dataset. Prototype records, image scanning, and role workspaces do not establish live BIS verification or regulatory compliance.

**Method:** Audit every visible claim and route; implement the most useful end-to-end journeys; show the official BIS step for live data; keep source URLs attached to guidance; preserve current auth and API boundaries. Verify desktop and mobile interactions, lint, production build, backend tests, and the existing water evaluation.

**Completion criteria:** A visitor can identify their task from the homepage or service directory, follow a buyer/manufacturer/retailer path, reach the appropriate official BIS source, understand which BISynapse features are prototypes, and use the reviewed assistant questions without being told that a local lookup is official verification.

**Scope limit:** “Cover BIS” means the main public service routes and the reviewed sources currently in this repository. It does not mean ingesting every Indian Standard, running a live registry, or granting government access.

## Execution plan

1. Inspect the existing site and record misleading or broken journeys.
2. Build a searchable service directory and task-based starting paths with official links.
3. Add reviewed BIS service questions to the assistant while preserving water RAG provenance and abstention behavior.
4. Correct dashboards, scanner, hallmarking, standards, certification, and consumer guidance so UI labels match actual capability.
5. Run automated checks and browser checks at desktop and mobile sizes; fix concrete failures before delivery.

## Requirements

1. Use current BIS-operated pages for broad service guidance. Link directly to the official process, directory or registry when the answer changes over time.
2. Clearly distinguish reviewed water-sector PDF answers, curated public BIS service guidance, and unverified prototype search records.
3. Cover standards discovery, compulsory certification and QCOs, Scheme I, CRS, management systems, hallmarking, recognised laboratories, and consumer help in the navigation experience.
4. Make certification guidance scheme-specific. Do not present a single checklist as universally applicable.
5. Make the directory searchable and usable on desktop, mobile and keyboard. Keep external links labelled as official BIS routes.
6. Preserve existing authentication, API contracts and untracked project documents.
7. Validate with frontend lint, production build and a visual browser check. Record any remaining limitation honestly.

## Source policy

Use only BIS-operated pages (`bis.gov.in`, `crsbis.in`, `lims.bis.gov.in`, `manakonline.in`) for public service descriptions. Do not infer a live certification, HUID, laboratory recognition or QCO status from prototype fixtures. Recheck official links and time-sensitive rules before a public release.

BIS permits reuse of its website material with attribution, but the BIS standards formulation manual says reproducing any part of an Indian Standard requires written permission. The curated service answer set links to public BIS pages and does not copy full standards text.

## Verification completed

- Frontend lint and production build pass.
- Backend tests pass (27/27), including service-answer provenance and no-live-verification behavior.
- Water retrieval evaluation passes all 38 answerable cases at recall@3. This is a reviewed pilot set, not broad BIS coverage.
- Browser checks covered service filters, journey tabs, hallmarking guidance, and mobile overflow on the main routes.

The assistant's BIS service answers are a small curated question allowlist. Full standards text, live HUID/licence status, current laboratory recognition and live QCO applicability are outside this prototype and must be checked through the linked BIS services.

## Follow-up implementation — 29 September 2026

1. Expand the guide dataset to twelve topics with official standards-discovery, fee and jeweller-registration sources, retaining the original review dates for older entries.
2. Add a guide picker powered by the backend's public dataset, so visitors can reach every supported topic.
3. Support reviewed question variants and polite wrappers without discarding record identifiers or extra instructions.
4. Improve directory search with individual words, common abbreviations, result counts and a clear-filters action.
5. Check backend matching boundaries, source links, guide-to-chat journeys and mobile layouts.

## Data and search phase — 2 October 2026

- Add a searchable `/sources` page backed by the 12 public BIS guide records and five captured water-sector PDF metadata records.
- Distinguish reviewed service summaries, captured PDFs pending full review, and the historical manual excluded from current answers.
- Filter by authority and record type; include historical captures only when explicitly requested. Show six records first for easier mobile browsing.
- Link to BIS Know Your Standard and its Published Standards portal for current standards and the portal's Excel export. No undocumented live API or complete local standards catalogue is claimed.
- Validate search, filters, historical status, official links, desktop/mobile layout, lint, TypeScript and build.

Completed: frontend lint and production build pass; backend tests pass (30/30). Browser checks confirmed IS-number search, authority and type filters, historical toggle, six-record pagination, source links and no horizontal overflow at 320px and 390px. The frontend build required network access for the configured Google fonts.

## Manufacturer and consumer journeys — 2 October 2026

- Public manufacturer path compares Scheme I, CRS and FMCS using official pages for standards, QCOs, process, testing and fees.
- Public consumer path separates ISI licence, jewellery HUID and CRS R-number checks, with BIS CARE and complaint links.
- Interactive checklists record only which guidance steps the visitor reviewed in the current page. They do not submit applications or complaints, determine scheme applicability or authenticate a product.
- The service directory, role dashboards, certification guide and consumer support link to the paths.

Verification: frontend lint, TypeScript and production build pass. Browser checks passed for all route switches, checklist progress/reset, official step links and entry points, with no horizontal overflow at 320px or 390px.
