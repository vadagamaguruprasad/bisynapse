# BISynapse website roadmap

Updated 2 October 2026. This is the working plan for the independent SIH prototype. A phase is complete only when its acceptance checks pass; a link to an official service is not a live integration.

## Current baseline

- Public service directory: 14 editorial routes with official links.
- Source library: 12 reviewed service guides and five captured water-sector PDF records; one historical manual is hidden by default.
- Guided paths: manufacturer (Scheme I, CRS, FMCS) and consumer (ISI licence, HUID, CRS R-number).
- Assistant: reviewed BIS service question allowlist plus the water-sector PDF retrieval pilot. Prototype standards and scanner records do not determine compliance or authenticity.
- Local audit: 13 public routes return 200, all discovered internal links resolve, and audited routes have no browser errors or horizontal overflow at 390px.

## Phase 1 — Public website clarity (completed locally)

1. Make the homepage's first actions lead to public service and source routes; keep sign-in available for role workspaces.
2. Link audience cards directly to the consumer/manufacturer guidance where appropriate.
3. Show source-library coverage and the distinction between reviewed guides, captured PDFs and official live portals near the homepage entry points.
4. Mark the current navigation item, make menu controls understandable to assistive technology, and verify mobile keyboard use.

**Accept when:** a first-time visitor can reach a public journey or official source from the top of the homepage; the active route is announced in navigation; mobile menu and language controls work by keyboard; no internal links break or content overflows.

**Verification:** production build, lint and TypeScript checks pass. Browser checks confirmed the homepage links, current-route announcement, mobile menu and language states, Escape behavior, 13 public routes, internal links and no horizontal overflow at 390px. The certification workspace renders after its client-side load.

## Phase 2 — Data quality and search

**In progress locally:** the captured-source search now recognises common terms including “license”, “jewelry” and “bottled water”. Browser checks confirmed those terms return relevant records while historical captures remain hidden until requested. The source inventory and any BIS export/import path still need review.

1. Maintain a source inventory with authority, URL, review/capture date, current-versus-historical status and a recheck cadence.
2. Import only BIS material with a clear reuse basis. Do not copy full Indian Standards into the public site without the needed permission.
3. Improve local search with synonyms, spelling tolerance and explicit scope; keep official BIS catalogue and QCO links for live status.
4. Add an optional ingestion path for a documented BIS export if its format and terms permit reuse. Record source version and import validation. Avoid an undocumented scraping dependency.

**Accept when:** each displayed record has provenance, status and a link; historical records are excluded from current answers; an import can be validated and reproduced.

## Phase 3 — Guided journeys

1. Expand manufacturer guidance with product-specific evidence checklist templates only after confirming the applicable scheme and QCO from official sources.
2. Expand consumer guidance with accessible examples for finding mark references, comparing official results and preparing a complaint.
3. Add a retailer path based on supplier evidence and current QCO checks.
4. Keep checklist state local and labelled as self-review until authenticated storage and ownership rules exist.

**Accept when:** each route has an official handoff, handles uncertainty, and makes no claim of approval, application submission or authenticity.

## Phase 4 — Assistant and language quality

1. Grow the reviewed BIS service answer set with a source review workflow and regression cases.
2. Evaluate water answers beyond the current pilot set with independent domain review, citation accuracy and abstention cases.
3. Translate complete user journeys before describing the interface as multilingual; measure Hindi and Telugu answer quality separately.
4. Use clear fallback states when the model or backend is unavailable.

**Accept when:** answer provenance and coverage limits are visible, unsupported questions abstain, and translated routes pass human review.

## Phase 5 — Accounts, integrations and release

1. Complete authenticated identity and row ownership before enabling private history, saved checklists or officer data.
2. Integrate a live BIS endpoint only with an authorised, documented interface and a tested failure/freshness policy.
3. Add privacy, accessibility, performance and security release checks; retest time-sensitive BIS links and statements.
4. Deploy only after the configured backend, environment variables, monitoring and rollback are verified.

**Accept when:** protected data cannot be reached by a client-controlled role or identifier, live results show their authority and retrieval time, and release checks are recorded.

## Delivery order

Phase 1 is complete in the local working tree. Next: Phase 2 official data and search, then Phase 3 manufacturer and consumer journeys. Phases 4–5 follow their review and authentication dependencies; they are not represented as completed features on the site.

## Rough effort

For one developer, assuming the existing codebase and timely content review:

| Work | Estimate | Main dependency |
| --- | --- | --- |
| Phase 2: source inventory and local search | 4–7 working days | Suitable BIS data, reuse terms and review |
| Phase 3: manufacturer, then consumer and retailer paths | 5–8 working days | Verified scheme and QCO content |
| Phase 4: assistant evaluation and complete language paths | 5–10 working days | Independent answer and translation review |
| Phase 5: accounts, live integrations and release | 1–3 weeks after access | Identity design, authorised endpoints and deployment environment |

These are planning ranges, not release dates. A documented BIS export or authorised live API could shorten some work; access or reuse restrictions could extend it.
