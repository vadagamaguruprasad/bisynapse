'use client';

import React from 'react';
import { HeartHandshake, ShieldAlert, CheckCircle2, ExternalLink } from 'lucide-react';
import { Language } from '@/lib/types';
import Link from 'next/link';

interface ConsumerSupportProps {
  currentLang: Language;
  onSendToChat: (query: string) => void;
}

export const ConsumerSupport: React.FC<ConsumerSupportProps> = () => {
  const topics = [
    { title: 'Check an ISI Mark', desc: 'Use Verify Licence Details in BIS CARE and compare the official record with the product label.', icon: CheckCircle2 },
    { title: 'Check a CRS Registration', desc: 'Use the BIS CRS portal or BIS CARE to check a registration reference against official records.', icon: CheckCircle2 },
    { title: 'Check Licence Validity', desc: 'Check licence validity through the official BIS Care service. Prototype scanner matches do not verify validity.', icon: CheckCircle2 },
    { title: 'Report Misuse & Counterfeit Goods', desc: 'If a product carries fake ISI marks, lodge a complaint for BIS enforcement investigation.', icon: ShieldAlert }
  ];

  return (
    <section id="consumer" className="py-12 bg-slate-50 border-t border-slate-200 scroll-mt-20 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b border-slate-200 pb-4 mb-8">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-blue-100 text-[#0F4C81] text-xs font-bold mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Consumer Protection & Rights</span>
          </div>
          <h2 className="text-2xl font-black text-[#0A2540]">
            BIS Consumer Support & Grievances
          </h2>
          <p className="text-xs text-slate-600">
            Find official routes for checking BIS marks and reporting concerns about marked products.
          </p>
          <Link href="/journeys/consumer" className="mt-3 inline-block text-xs font-bold text-[#0f4c81] underline">Open step-by-step consumer journey</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {topics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded p-5 border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center space-x-2 text-[#0A2540] font-bold text-sm">
                  <Icon className="w-4 h-4 text-[#0F4C81]" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0A2540] text-white p-6 rounded-lg shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-3 gap-2">
            <div>
              <span className="text-[10px] font-bold text-amber-400 ">Public Grievance Redressal</span>
              <h3 className="text-lg font-bold text-white">Lodge a Quality Complaint with BIS</h3>
            </div>
            <a
              href="https://www.bis.gov.in/consumer-overview/online-complaint-registration/?lang=en"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded shadow flex items-center space-x-1.5 shrink-0"
            >
              <span>BIS Complaint Instructions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="bg-slate-800 p-3 rounded border border-slate-700">
              <span className="font-bold text-amber-400 block">1. Gather Evidence</span>
              <p className="text-[11px] mt-0.5">Photos of product label, ISI mark, invoice bill & store location.</p>
            </div>
            <div className="bg-slate-800 p-3 rounded border border-slate-700">
              <span className="font-bold text-amber-400 block">2. Submit Complaint</span>
              <p className="text-[11px] mt-0.5">Use the BIS CARE app or the portal linked from BIS complaint instructions.</p>
            </div>
            <div className="bg-slate-800 p-3 rounded border border-slate-700">
              <span className="font-bold text-amber-400 block">3. Official Review</span>
              <p className="text-[11px] mt-0.5">BIS reviews complaints and determines appropriate action. Submission does not guarantee an inspection or prosecution.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
