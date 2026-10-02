'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Language } from '@/lib/types';

interface CertificationGuideProps { currentLang: Language; onSendToChat: (query: string) => void; }

const routes = [
  { id: 'scheme-i', label: 'Scheme I · ISI Mark', audience: 'Product manufacturers', intro: 'BIS assesses manufacturing and testing capability and product conformity before granting a licence to use the Standard Mark.', steps: ['Identify the applicable Indian Standard and product manual', 'Check whether a current QCO makes certification compulsory', 'Review Scheme I grant guidelines, testing requirements and fees', 'Apply through the official BIS portal and follow its assessment process'], source: 'https://www.bis.gov.in/product-certification/product-certification-process/?lang=en', sourceLabel: 'Scheme I process and guidelines' },
  { id: 'scheme-ii', label: 'Scheme II · CRS', audience: 'Notified electronics and IT products', intro: 'CRS is a separate registration process for notified product categories. The official CRS portal provides current standards and application steps.', steps: ['Confirm your exact product category on the CRS portal', 'Generate a test request and use a BIS recognised laboratory', 'Verify the test report and submit the portal application', 'Check the registration and permitted marking details'], source: 'https://www.crsbis.in/BIS/registration-page.do', sourceLabel: 'CRS registration steps' },
  { id: 'systems', label: 'Management systems', audience: 'Organisations and service providers', intro: 'Management systems certification covers organisational systems such as quality and environmental management. It follows a different scheme from product certification.', steps: ['Select the management system and relevant standard', 'Read the BIS scheme and application guidance', 'Prepare the organisation for assessment', 'Use the current BIS process for certification and surveillance'], source: 'https://www.bis.gov.in/system-certification-overview/?lang=en', sourceLabel: 'BIS systems certification overview' },
] as const;

export function CertificationGuide({ onSendToChat }: CertificationGuideProps) {
  const [activeId, setActiveId] = useState<(typeof routes)[number]['id']>('scheme-i');
  const active = routes.find((route) => route.id === activeId) ?? routes[0];
  return <section className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="eyebrow text-[#237c7c]">Choose the right route</p>
      <h2 className="text-3xl font-bold text-[#0a2540] mt-3">Certification depends on the product and scheme.</h2>
      <p className="text-slate-600 mt-3 max-w-3xl">This guide helps you start. Check the current standard, QCO, process, fees and eligibility with BIS before applying.</p>
      <div role="tablist" aria-label="Certification route" className="flex flex-wrap gap-3 mt-8">
        {routes.map((route) => <button key={route.id} id={`tab-${route.id}`} type="button" role="tab" aria-selected={route.id === activeId} aria-controls="certification-route-panel" onClick={() => setActiveId(route.id)} className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${route.id === activeId ? 'bg-[#0a2540] border-[#0a2540] text-white' : 'bg-white border-slate-300 text-slate-700'}`}>{route.label}</button>)}
      </div>
      <div id="certification-route-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="mt-6 grid lg:grid-cols-[1fr_1.1fr] gap-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
        <div><span className="text-xs font-bold uppercase tracking-wide text-[#237c7c]">{active.audience}</span><h3 className="text-2xl font-bold text-[#0a2540] mt-3">{active.label}</h3><p className="text-slate-600 mt-4">{active.intro}</p><a href={active.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4c81] underline mt-7">{active.sourceLabel}<ArrowUpRight size={16} /></a></div>
        <div className="bg-[#f2f7f6] rounded-xl p-6"><h4 className="font-bold text-[#0a2540]">A sensible starting sequence</h4><ol className="space-y-5 mt-5">{active.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm text-slate-700"><span className="shrink-0 w-7 h-7 rounded-full bg-white text-[#0d6a66] font-bold flex items-center justify-center">{index + 1}</span><span>{step}</span></li>)}</ol><p className="mt-6 pt-5 border-t border-[#d9e7e5] text-xs text-slate-600">General guidance. Use the linked BIS instructions for a product-specific checklist.</p></div>
      </div>
      <button type="button" onClick={() => onSendToChat('What water-sector certification guidance can you support with sources?')} className="mt-6 text-sm font-bold text-[#0f4c81] underline">Ask the source-backed water assistant</button>
      <Link href="/journeys/manufacturer" className="ml-5 inline-block text-sm font-bold text-[#0f4c81] underline">Open manufacturer journey</Link>
    </div>
  </section>;
}
