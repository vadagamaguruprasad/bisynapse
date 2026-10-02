'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const journeys = [
  { id: 'buy', label: 'I am buying', title: 'Check a product before you trust the mark', description: 'For consumers checking an ISI mark, CRS registration or jewellery HUID.', steps: [
    { title: 'Choose your check', detail: 'Find the mark and its licence, registration or HUID reference.', href: '/journeys/consumer', link: 'Open consumer journey', external: false },
    { title: 'Use BIS CARE', detail: 'Check the reference in the official BIS service and compare its details.', href: 'https://www.bis.gov.in/bis-apps/?lang=en', link: 'Open BIS CARE guidance', external: true },
    { title: 'Report a concern', detail: 'Use the official BIS complaint route if the details do not match.', href: 'https://www.bis.gov.in/consumer-overview/online-complaint-registration/?lang=en', link: 'BIS complaint instructions', external: true },
  ] },
  { id: 'make', label: 'I manufacture', title: 'Find the right certification route', description: 'For manufacturers comparing standards, QCOs and BIS schemes.', steps: [
    { title: 'Find the standard', detail: 'Confirm the latest edition and amendments in Know Your Standard.', href: 'https://www.bis.gov.in/know-your-standard/?lang=en', link: 'Know Your Standard', external: true },
    { title: 'Check the QCO', detail: 'Read the current compulsory-certification list and linked order.', href: 'https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en', link: 'Check QCO lists', external: true },
    { title: 'Choose the scheme', detail: 'Compare Scheme I, CRS and FMCS before applying.', href: '/journeys/manufacturer', link: 'Open manufacturer journey', external: false },
  ] },
  { id: 'sell', label: 'I sell products', title: 'Check supplier information and obligations', description: 'For retailers reviewing labels and official product requirements.', steps: [
    { title: 'Check the mark', detail: 'Compare supplier licence or registration details in BIS CARE.', href: 'https://www.bis.gov.in/bis-apps/?lang=en', link: 'BIS CARE guidance', external: true },
    { title: 'Check the product category', detail: 'Review the current QCO and scheme listing for the exact product.', href: 'https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en', link: 'Check QCO lists', external: true },
    { title: 'Keep a clear route', detail: 'Use the BIS service directory for labs, complaints and scheme information.', href: '#service-directory', link: 'Browse services', external: false },
  ] },
] as const;

export function BisJourneyPicker() {
  const [activeId, setActiveId] = useState<(typeof journeys)[number]['id']>('buy');
  const active = journeys.find(journey => journey.id === activeId) ?? journeys[0];
  return <section aria-labelledby="journey-title" className="journey-panel">
    <div className="journey-intro"><div><p className="eyebrow text-[#237c7c]">A place to begin</p><h3 id="journey-title">What are you trying to do?</h3></div><p>Select a path to see the next official check. BISynapse does not decide whether a product complies.</p></div>
    <div role="tablist" aria-label="Choose your BIS journey" className="journey-tabs">{journeys.map(journey => <button key={journey.id} id={`journey-tab-${journey.id}`} type="button" role="tab" aria-selected={activeId === journey.id} aria-controls="journey-content" onClick={() => setActiveId(journey.id)}>{journey.label}<ArrowRight size={15} aria-hidden="true" /></button>)}</div>
    <div id="journey-content" role="tabpanel" aria-labelledby={`journey-tab-${active.id}`} className="journey-content"><div><h4>{active.title}</h4><p>{active.description}</p></div><ol>{active.steps.map((step, index) => <li key={step.title}><span className="journey-step-number">{index + 1}</span><div><strong>{step.title}</strong><p>{step.detail}</p>{step.external ? <a href={step.href} target="_blank" rel="noopener noreferrer">{step.link}<ArrowUpRight size={14} /></a> : <Link href={step.href}>{step.link}<ArrowRight size={14} /></Link>}</div></li>)}</ol></div>
  </section>;
}
