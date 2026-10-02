export type JourneyStep = { title: string; detail: string; sourceLabel: string; sourceUrl: string; secondSourceLabel?: string; secondSourceUrl?: string };
export type JourneyRoute = { id: string; label: string; summary: string; steps: JourneyStep[] };
export type JourneyGuide = { title: string; intro: string; note: string; routes: JourneyRoute[] };

const knowStandard = 'https://www.bis.gov.in/know-your-standard/?lang=en';
const qcoList = 'https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en';
const schemeI = 'https://www.bis.gov.in/product-certification/product-certification-process/?lang=en';
const fees = 'https://www.bis.gov.in/product-certification/product-certification-fee/?lang=en';
const labs = 'https://lims.bis.gov.in/home/labs/';
const crs = 'https://www.crsbis.in/BIS/registration-page.do';
const fmcs = 'https://www.bis.gov.in/fmcs/fmcs-overview/?lang=en';
const care = 'https://www.bis.gov.in/bis-apps/?lang=en';
const complaints = 'https://www.bis.gov.in/consumer-overview/online-complaint-registration/?lang=en';

export const manufacturerJourney: JourneyGuide = {
  title: 'Manufacturer journey',
  intro: 'Find the standard, check whether a current order applies, compare the certification routes, then use the official application process.',
  note: 'Choose the route you want to investigate. BISynapse does not determine whether your product is covered by a QCO, grant a licence or submit an application.',
  routes: [
    { id: 'scheme-i', label: 'Scheme I · ISI Mark', summary: 'For manufacturers exploring product certification under Scheme I.', steps: [
      { title: 'Identify the exact Indian Standard', detail: 'Search by product name or IS number, then check the edition, amendments and product manual.', sourceLabel: 'BIS Know Your Standard', sourceUrl: knowStandard },
      { title: 'Check compulsory certification', detail: 'Read the current QCO list and linked notification for the exact product and effective date.', sourceLabel: 'BIS compulsory certification list', sourceUrl: qcoList },
      { title: 'Read Scheme I grant guidance', detail: 'Review the official grant-of-licence guidelines and product-specific requirements.', sourceLabel: 'BIS Scheme I process', sourceUrl: schemeI },
      { title: 'Check testing and fees', detail: 'Check laboratory scope and the current marking fee for the Indian Standard. Concessions vary by notification.', sourceLabel: 'BIS product certification fees', sourceUrl: fees, secondSourceLabel: 'BIS LIMS laboratory directory', secondSourceUrl: labs },
      { title: 'Apply through BIS', detail: 'Use the application route linked from the BIS process and follow the authority’s assessment instructions.', sourceLabel: 'BIS application instructions', sourceUrl: schemeI },
    ] },
    { id: 'crs', label: 'CRS · Scheme II', summary: 'For product categories notified under the Compulsory Registration Scheme.', steps: [
      { title: 'Confirm your product category', detail: 'Check the current CRS product and standard list; do not assume that every electronic product is covered.', sourceLabel: 'BIS CRS portal', sourceUrl: crs },
      { title: 'Read the CRS application process', detail: 'Review the registration steps and document requirements for the exact product.', sourceLabel: 'BIS CRS registration', sourceUrl: crs },
      { title: 'Use a recognised laboratory', detail: 'Check the laboratory and its current testing scope before arranging product tests.', sourceLabel: 'BIS LIMS laboratories', sourceUrl: labs },
      { title: 'Prepare the application', detail: 'Follow the CRS portal’s test-request, report and application instructions.', sourceLabel: 'BIS CRS registration', sourceUrl: crs },
      { title: 'Submit and check the official record', detail: 'Complete the process on the CRS portal; check registration and marking permissions there.', sourceLabel: 'BIS CRS portal', sourceUrl: crs },
    ] },
    { id: 'fmcs', label: 'Foreign manufacturer · FMCS', summary: 'For eligible manufacturers outside India exploring the Standard Mark route.', steps: [
      { title: 'Confirm the product and route', detail: 'Check the Indian Standard and whether the product is under a current QCO or the separate CRS route.', sourceLabel: 'BIS FMCS overview', sourceUrl: fmcs },
      { title: 'Read FMCS eligibility and process', detail: 'Review the current application process and the manufacturer’s obligations.', sourceLabel: 'BIS FMCS overview', sourceUrl: fmcs },
      { title: 'Review testing and Indian representative requirements', detail: 'Use BIS FMCS guidance for the current testing and authorised Indian representative instructions.', sourceLabel: 'BIS FMCS overview', sourceUrl: fmcs },
      { title: 'Check current fees', detail: 'Use the fee route that applies to FMCS; Scheme I domestic fees alone do not establish your total cost.', sourceLabel: 'BIS FMCS overview', sourceUrl: fmcs },
      { title: 'Apply through the official route', detail: 'Submit through the BIS process and wait for its assessment and decision.', sourceLabel: 'BIS FMCS overview', sourceUrl: fmcs },
    ] },
  ],
};

const complaintStep: JourneyStep = { title: 'Report a concern if needed', detail: 'If the official result conflicts with the product or you suspect misuse, use the BIS complaint route. Keep your product and seller evidence.', sourceLabel: 'BIS complaint registration', sourceUrl: complaints };

export const consumerJourney: JourneyGuide = {
  title: 'Consumer journey',
  intro: 'Identify the mark on your product, use the matching official BIS check, compare the returned details and find the complaint route if something looks wrong.',
  note: 'BISynapse does not authenticate a product, licence, registration or HUID. Complete the check in BIS CARE or the relevant BIS portal.',
  routes: [
    { id: 'isi', label: 'ISI / BIS licence', summary: 'For a product label carrying an ISI mark and licence number.', steps: [
      { title: 'Read the product label', detail: 'Find the BIS mark, licence reference, Indian Standard and manufacturer shown on the item or packaging.', sourceLabel: 'BIS CARE features', sourceUrl: care },
      { title: 'Use Verify Licence Details', detail: 'Enter the reference in the official BIS CARE feature.', sourceLabel: 'BIS CARE app', sourceUrl: care },
      { title: 'Compare the returned details', detail: 'Compare the official record with the product, manufacturer and mark. A number printed on a label alone is insufficient.', sourceLabel: 'BIS CARE guidance', sourceUrl: care },
      complaintStep,
    ] },
    { id: 'huid', label: 'Jewellery HUID', summary: 'For hallmarked jewellery carrying a HUID.', steps: [
      { title: 'Find the HUID', detail: 'Read the six-character code, BIS mark and purity mark on the jewellery.', sourceLabel: 'BIS hallmarking guidance', sourceUrl: 'https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/?lang=en' },
      { title: 'Use Verify HUID', detail: 'Enter the HUID in BIS CARE’s official feature; a photo or typed code in BISynapse is not an authenticity check.', sourceLabel: 'BIS CARE app', sourceUrl: care },
      { title: 'Compare the jewellery details', detail: 'Compare the official HUID result with the item’s purity and description.', sourceLabel: 'BIS CARE guidance', sourceUrl: care },
      complaintStep,
    ] },
    { id: 'crs', label: 'CRS R-number', summary: 'For notified electronic products carrying a BIS CRS registration number.', steps: [
      { title: 'Find the R-number', detail: 'Read the registration reference and product details on the label.', sourceLabel: 'BIS CARE features', sourceUrl: care },
      { title: 'Use Verify R-Number under CRS', detail: 'Check the reference using the official BIS CARE or CRS route.', sourceLabel: 'BIS CARE app', sourceUrl: care },
      { title: 'Compare the returned details', detail: 'Check that the product category and registrant match the item. A result for another model does not validate yours.', sourceLabel: 'BIS CARE guidance', sourceUrl: care },
      complaintStep,
    ] },
  ],
};
