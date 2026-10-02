import guides from '../../../data/sources/bis_service_guides_v1.json';
import manifest from '../../../data/sources/manifest.json';

export type OfficialSourceRecord = {
  id: string;
  title: string;
  authority: 'BIS' | 'FSSAI';
  kind: 'Service guide' | 'Captured PDF';
  summary: string;
  officialUrl: string;
  checkedOn: string;
  status: 'Reviewed summary' | 'Captured, pending full review' | 'Historical capture';
  searchText: string;
  guideQuestion?: string;
};

const documentTitles: Record<string, string> = {
  'fssai-testing-20251217': 'FSSAI scheme of testing for packaged drinking and mineral water',
  'bis-pm-14543-jul2024': 'BIS IS 14543 product manual — July 2024',
  'bis-circular-14543-20250730': 'BIS IS 14543 revision circular — July 2025',
  'bis-pm-14543-jul2025': 'BIS IS 14543 product manual — July 2025',
  'bis-pm-13428-jul2024': 'BIS IS 13428 product manual — July 2024',
};

// Common public search terms for these reviewed topics. They aid discovery;
// the linked BIS page remains the authority for current requirements.
const guideSearchTerms: Record<string, string> = {
  qco: 'mandatory quality control order',
  'scheme-i': 'scheme 1 isi mark manufacturer manufacturing application',
  crs: 'scheme 2 electronics registration r number',
  huid: 'hallmark gold silver jewellery jewelry verification',
  licence: 'license cm l cml isi verify verification',
  labs: 'lab laboratory testing recognized recognised lims',
  complaints: 'complaint grievance consumer support',
  fmcs: 'overseas foreign manufacturer import',
  systems: 'quality management environmental qms ems',
  standards: 'catalog catalogue specification is number',
  fees: 'fee cost charges concession',
  jewellers: 'jeweler jewelers jewelry hallmark registration',
};

const documentSearchTerms: Record<string, string> = {
  'fssai-testing-20251217': 'water packaged drinking mineral bottle bottled testing',
  'bis-pm-14543-jul2024': 'water packaged drinking bottle bottled product manual',
  'bis-circular-14543-20250730': 'water packaged drinking revision amendment circular',
  'bis-pm-14543-jul2025': 'water packaged drinking bottle bottled product manual',
  'bis-pm-13428-jul2024': 'water natural mineral product manual',
};

export const officialSourceCatalog: OfficialSourceRecord[] = [
  ...guides.entries.map((entry): OfficialSourceRecord => ({
    id: `guide-${entry.id}`,
    title: entry.title,
    authority: 'BIS',
    kind: 'Service guide',
    summary: entry.answer,
    officialUrl: entry.source[1],
    checkedOn: entry.reviewed_on || guides.reviewed_on,
    status: 'Reviewed summary',
    searchText: `${entry.id} ${entry.questions.join(' ')} ${entry.source[0]} ${guideSearchTerms[entry.id] || ''}`,
    guideQuestion: entry.questions[0],
  })),
  ...manifest.documents.map((document): OfficialSourceRecord => ({
    id: document.document_id,
    title: documentTitles[document.document_id] || document.document_id,
    authority: document.authority as 'BIS' | 'FSSAI',
    kind: 'Captured PDF',
    summary: document.retrieval_status === 'historical'
      ? 'Older captured manual. Excluded from answers about current requirements.'
      : `Captured ${document.total_pdf_pages}-page official document for the water-sector pilot. Its source and extraction hashes are recorded; domain review is incomplete.`,
    officialUrl: document.official_url,
    checkedOn: document.collection_date,
    status: document.retrieval_status === 'historical' ? 'Historical capture' : 'Captured, pending full review',
    searchText: `${document.document_id} ${document.document_type} ${document.authority} ${document.supersedes_document_id || ''} ${documentSearchTerms[document.document_id] || ''}`,
  })),
];

export function searchOfficialSources(query: string, authority: 'All' | 'BIS' | 'FSSAI', kind: 'All' | OfficialSourceRecord['kind'], includeHistorical = false) {
  const words = query.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  return officialSourceCatalog.filter((record) => {
    if (authority !== 'All' && record.authority !== authority) return false;
    if (kind !== 'All' && record.kind !== kind) return false;
    if (!includeHistorical && record.status === 'Historical capture') return false;
    const searchable = `${record.title} ${record.summary} ${record.searchText}`.toLowerCase();
    return words.every((word) => searchable.includes(word));
  });
}
