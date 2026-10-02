'use client';

import Link from 'next/link';
import { ArrowUpRight, Gem, ShieldCheck } from 'lucide-react';
import type { Language } from '@/lib/types';

interface HallmarkingSectionProps {
  currentLang: Language;
  onOpenScanner?: () => void;
  onSendToChat: (query: string) => void;
}

const marks = [
  { title: 'BIS logo', detail: 'The BIS mark is one part of a current gold jewellery hallmark.' },
  { title: 'Purity mark', detail: 'Look for the caratage and fineness marking shown on the article.' },
  { title: 'Six-character HUID', detail: 'Use the engraved alphanumeric HUID in the official BIS CARE app.' },
];

export function HallmarkingSection({ onSendToChat }: HallmarkingSectionProps) {
  return <section id="hallmarking" className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="eyebrow text-[#237c7c]">Jewellery guidance</p>
      <h2 className="text-3xl font-bold text-[#0a2540] mt-3">Check the mark. Confirm the HUID with BIS.</h2>
      <p className="text-slate-600 mt-4 max-w-3xl">BIS describes three parts of a current gold jewellery hallmark: its logo, the purity mark, and a six-character HUID. A visible mark or image alone does not establish authenticity.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {marks.map((mark, index) => <div key={mark.title} className="bg-white border border-slate-200 rounded-xl p-6"><span className="text-xs font-bold text-[#237c7c]">0{index + 1}</span><h3 className="text-lg font-bold text-[#0a2540] mt-4">{mark.title}</h3><p className="text-sm text-slate-600 mt-2">{mark.detail}</p></div>)}
      </div>
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-5 mt-6">
        <div className="bg-[#0a2540] text-white rounded-xl p-7"><Gem size={25} className="text-[#a6d7cc]" /><h3 className="text-xl font-bold mt-4">Verify HUID on BIS CARE</h3><p className="text-sm text-slate-300 mt-3">Use BIS CARE’s Verify HUID feature and compare the returned details with the jewellery. BISynapse does not accept or validate HUID codes.</p><a href="https://www.bis.gov.in/bis-apps/?lang=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 bg-white text-[#0a2540] font-bold text-sm px-4 py-2.5 rounded-lg">Open official BIS CARE guidance <ArrowUpRight size={16} /></a></div>
        <div className="bg-white border border-slate-200 rounded-xl p-7"><ShieldCheck size={25} className="text-[#237c7c]" /><h3 className="text-xl font-bold text-[#0a2540] mt-4">Understand the scheme</h3><p className="text-sm text-slate-600 mt-3">Read the BIS hallmarking FAQ for mark components, HUID, and current scheme guidance.</p><a href="https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/?lang=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[#0f4c81] font-bold text-sm underline">BIS hallmarking FAQ <ArrowUpRight size={16} /></a><button type="button" onClick={() => onSendToChat('How can I verify a HUID?')} className="block mt-4 text-[#0f4c81] font-bold text-sm underline">Ask BISynapse for the steps</button></div>
      </div>
      <p className="text-xs text-slate-500 mt-6">For a product label demonstration, visit the <Link href="/scan" className="underline">prototype scanner</Link>. It cannot authenticate jewellery.</p>
    </div>
  </section>;
}
