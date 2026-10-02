export type BisService = {
  id: string;
  category: 'Find' | 'Certify' | 'Verify' | 'Get help';
  title: string;
  summary: string;
  nextStep: string;
  officialUrl: string;
  officialLabel: string;
  localUrl?: string;
  localLabel?: string;
  guideQuestion?: string;
};

// Editorial links to BIS-operated pages, checked on 27 September 2026.
// This directory is guidance, not a copy of a live BIS registry.
export const bisServices: BisService[] = [
  { id: 'standards', category: 'Find', title: 'Indian Standards', summary: 'Look up the standard and product-specific guidance before deciding which requirements apply.', nextStep: 'Search the BIS catalogue and confirm the current edition and amendments.', officialUrl: 'https://www.bis.gov.in/know-your-standard/?lang=en', officialLabel: 'Know Your Standard', localUrl: '/standards', localLabel: 'Search prototype records', guideQuestion: 'Where can I find an Indian Standard?' },
  { id: 'qco', category: 'Find', title: 'Compulsory certification & QCOs', summary: 'Some products require BIS certification because of a Quality Control Order. Applicability depends on the current order and its effective date.', nextStep: 'Check the BIS compulsory-certification list and the linked notification for your product.', officialUrl: 'https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en', officialLabel: 'Check current QCO lists', guideQuestion: 'Is BIS certification mandatory for every product?' },
  { id: 'formulation', category: 'Find', title: 'Standards under development', summary: 'Explore BIS technical committees, draft standards and the standards formulation process.', nextStep: 'Check drafts under wide circulation if you want to review or contribute to a developing standard.', officialUrl: 'https://www.bis.gov.in/standards/standard-formulation/?lang=en', officialLabel: 'Explore standards formulation' },
  { id: 'scheme-i', category: 'Certify', title: 'Product certification · Scheme I', summary: 'Guidance for manufacturers seeking a licence to use the Standard Mark under Scheme I.', nextStep: 'Confirm the relevant Indian Standard, product manual, process and current fee with BIS.', officialUrl: 'https://www.bis.gov.in/product-certification/product-certification-overview/?lang=en', officialLabel: 'Read BIS product certification', localUrl: '/certification', localLabel: 'Explore the guide', guideQuestion: 'How do I apply for the ISI Mark?' },
  { id: 'crs', category: 'Certify', title: 'Compulsory Registration Scheme', summary: 'The BIS registration route for notified electronics, IT and other products listed under Scheme II.', nextStep: 'Check your exact product category and standard on the BIS CRS portal.', officialUrl: 'https://www.crsbis.in/BIS/publicdashAction.do?hmode=Standard_table', officialLabel: 'Check CRS product categories', guideQuestion: 'What is the BIS Compulsory Registration Scheme?' },
  { id: 'fmcs', category: 'Certify', title: 'Foreign manufacturers', summary: 'FMCS is the BIS product certification route for eligible manufacturers located outside India.', nextStep: 'Check the FMCS scope and current application process; notified electronics and IT products may use CRS.', officialUrl: 'https://www.bis.gov.in/fmcs/fmcs-overview/?lang=en', officialLabel: 'Read FMCS overview', guideQuestion: 'What is the Foreign Manufacturers Certification Scheme?' },
  { id: 'systems', category: 'Certify', title: 'Management systems certification', summary: 'BIS also certifies management systems, including quality and environmental management systems.', nextStep: 'Review the scheme scope and application information on the BIS site.', officialUrl: 'https://www.bis.gov.in/system-certification-overview/?lang=en', officialLabel: 'View BIS systems schemes', guideQuestion: 'Does BIS certify management systems?' },
  { id: 'hallmark', category: 'Verify', title: 'Jewellery hallmarking', summary: 'Learn what a BIS hallmark means and where to check a jewellery HUID.', nextStep: 'Use the BIS CARE verification route for a specific HUID; a photo alone cannot authenticate it.', officialUrl: 'https://www.bis.gov.in/hallmarking-overview/?lang=en', officialLabel: 'Read hallmarking guidance', localUrl: '/hallmarking', localLabel: 'Explore hallmarking', guideQuestion: 'How can I verify a HUID?' },
  { id: 'marks', category: 'Verify', title: 'Verify a BIS mark', summary: 'Check licence details or a HUID using the official BIS CARE tools.', nextStep: 'Enter the exact mark or HUID in BIS CARE and compare the returned details with the product.', officialUrl: 'https://www.bis.gov.in/bis-apps/?lang=en', officialLabel: 'Open BIS CARE guidance', localUrl: '/scan', localLabel: 'Explore prototype scanner', guideQuestion: 'How can I verify a BIS licence?' },
  { id: 'labs', category: 'Verify', title: 'Recognised laboratories', summary: 'Find BIS-recognised laboratories and check their current scope of recognition.', nextStep: 'Search by laboratory or Indian Standard in BIS LIMS before sending a sample.', officialUrl: 'https://lims.bis.gov.in/home/labs/', officialLabel: 'Search BIS LIMS', localUrl: '/labs', localLabel: 'Open lab guidance', guideQuestion: 'Where can I find BIS recognised laboratories?' },
  { id: 'consumer', category: 'Get help', title: 'Consumer guidance & complaints', summary: 'Find guidance on quality marks, certified products and complaints about BIS services or marked products.', nextStep: 'Use the official BIS consumer guidance and complaint channels for a case-specific response.', officialUrl: 'https://www.bis.gov.in/consumer-overview/for-consumers-faq/?lang=en', officialLabel: 'Read consumer FAQ', localUrl: '/support', localLabel: 'Open consumer support', guideQuestion: 'How do I file a BIS consumer complaint?' },
  { id: 'training', category: 'Get help', title: 'Training & learning', summary: 'BIS offers training on standardisation, certification and related quality topics through NITS.', nextStep: 'Review current BIS training programmes and application instructions.', officialUrl: 'https://www.bis.gov.in/training-2/training-programmes/?lang=en', officialLabel: 'Explore BIS training' },
  { id: 'fees', category: 'Certify', title: 'Product certification fees', summary: 'Find Scheme I marking fees and current notification amendments.', nextStep: 'Search by Indian Standard and confirm fee and concession conditions with BIS.', officialUrl: 'https://www.bis.gov.in/product-certification/product-certification-fee/?lang=en', officialLabel: 'Check BIS fee guidance', guideQuestion: 'Where can I find BIS certification fees?' },
  { id: 'jewellers', category: 'Certify', title: 'Jeweller registration', summary: 'Find the registration procedure and guidelines for jewellers.', nextStep: 'Follow the official registration procedure and confirm the current hallmarking requirements.', officialUrl: 'https://www.bis.gov.in/hallmarking-overview/jewellers-registration-scheme/?lang=en', officialLabel: 'Read jeweller registration guidance', guideQuestion: 'How does a jeweller register with BIS?' },
];

const searchAliases: Record<string, string> = {
  standards: 'catalog catalogues specification amendments',
  qco: 'qco mandatory compulsory regulation order',
  formulation: 'draft committee consultation',
  'scheme-i': 'isi scheme 1 manufacturing manufacturer application',
  crs: 'crs scheme 2 electronics it registration',
  fmcs: 'fmcs import overseas foreign manufacturing',
  systems: 'qms ems iso quality environmental',
  hallmark: 'gold silver jewelry jewellery huid',
  marks: 'isi license licence cm l bis care',
  labs: 'lab labs laboratory laboratories recognized recognised lims testing',
  consumer: 'complaint grievance fake fraud consumer',
  training: 'nits course learning',
  fees: 'fee fees cost msme concession discount marking',
  jewellers: 'jeweler jeweller jewelers jewellers jewelry jewellery hallmark registration',
};

export function searchBisServices(query: string, category: BisService['category'] | 'All') {
  const words = query.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  return bisServices.filter((service) => {
    const text = `${service.title} ${service.summary} ${service.nextStep} ${searchAliases[service.id] || ''}`.toLowerCase();
    return (category === 'All' || service.category === category) && words.every((word) => text.includes(word));
  });
}
