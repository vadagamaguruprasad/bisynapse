'use client';

import Link from 'next/link';
import { ArrowRight, Search, FileText, UserCheck, Store, Building2, Shield, Lock } from 'lucide-react';
import type { Language } from '@/lib/types';

interface HeroProps { currentLang: Language; onNavigate?: (sectionId: string) => void; onOpenScanner?: () => void; }
const categories = [
  { id: 'consumer', title: 'Consumer', icon: UserCheck, description: 'Follow the official check for an ISI licence, jewellery HUID or CRS R-number.', label: 'Check a mark', href: '/journeys/consumer', action: 'Open consumer journey' },
  { id: 'retailer', title: 'Retailer', icon: Store, description: 'Find supplier-mark checks, current QCO listings and complaint routes.', label: 'Check a supplier', href: '/services', action: 'Explore retailer routes' },
  { id: 'industry', title: 'Industry / MSME', icon: Building2, description: 'Compare Scheme I, CRS and FMCS with source-linked steps.', label: 'Plan certification', href: '/journeys/manufacturer', action: 'Open manufacturer journey' },
  { id: 'officer', title: 'Government officer', icon: Shield, description: 'Access the restricted workspace after separate administrator approval.', label: 'Approval required', href: '/login?role=officer', action: 'Officer sign-in' },
];

export function Hero({ currentLang }: HeroProps) {
  const intro = currentLang === 'hi' ? 'भारतीय मानकों को समझने का सरल रास्ता' : currentLang === 'te' ? 'భారతీయ ప్రమాణాలను అర్థం చేసుకోవడానికి సులభమైన మార్గం' : 'A clearer path to Indian Standards';
  return (
    <section id="hero" className="landing-hero text-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-grid">
          <div>
            <p className="eyebrow text-[#237c7c] mb-6">Standards. Simplified.</p>
            <h1 className="hero-title">Clarity for every<br /><span>quality decision.</span></h1>
            <p className="mt-7 text-lg text-slate-600 max-w-xl">{intro}. Explore standards, navigate certification, and know where to verify—with BISynapse.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/services" className="design-button design-button-primary">Find the right BIS route <ArrowRight size={17} /></Link>
              <Link href="/sources" className="design-button design-button-secondary"><Search size={17} /> Search captured sources</Link>
            </div>
            <p className="text-xs text-slate-500 mt-6">Independent SIH prototype · Verify regulatory information with BIS</p>
          </div>
          <div className="hero-workspace">
            <div className="flex justify-between items-center gap-4 border-b border-white/20 pb-6"><span className="eyebrow text-slate-300">Your starting point</span><span className="text-xs rounded-full border border-white/20 px-3 py-1 text-[#9fd4cc]">Prototype</span></div>
            <h2 className="text-2xl font-semibold mt-6">From questions<br />to clearer next steps.</h2>
            <Link href="/sources" className="hero-workspace-row"><Search size={22} /><span className="flex-1"><span className="block text-sm font-semibold">Explore official sources</span><span className="block text-xs text-slate-300 mt-1">Browse captured records; confirm current details on BIS</span></span><ArrowRight size={16} /></Link>
            <Link href="/journeys/manufacturer" className="hero-workspace-row"><FileText size={22} /><span className="flex-1"><span className="block text-sm font-semibold">Plan a certification path</span><span className="block text-xs text-slate-300 mt-1">Scheme I, CRS and FMCS steps with BIS sources</span></span><ArrowRight size={16} /></Link>
            <Link href="/journeys/consumer" className="hero-workspace-row"><UserCheck size={22} /><span className="flex-1"><span className="block text-sm font-semibold">Check a product mark</span><span className="block text-xs text-slate-300 mt-1">Find the official BIS CARE route for your mark</span></span><ArrowRight size={16} /></Link>
          </div>
        </div>
        <div id="user-categories" className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7"><div><p className="eyebrow text-[#237c7c] mb-3">Designed around you</p><h2 className="text-2xl sm:text-3xl font-semibold">One platform. Your perspective.</h2></div><p className="text-sm text-slate-500 max-w-xs">Choose a category for guidance tailored to the way you work.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {categories.map(({ id, title, icon: Icon, description, label, href, action }, index) => (
              <div key={id} className="category-card">
                <div className="flex justify-between items-center mb-7"><Icon size={24} className="text-[#237c7c]" /><span className="text-xs text-slate-400">0{index + 1}</span></div>
                <span className="eyebrow text-slate-500 mb-3">{label}</span><h3>{title}</h3><p className="mt-3 mb-7">{description}</p>
                <Link href={href} className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center gap-3 text-sm font-semibold">{action}{id === 'officer' ? <Lock size={16} /> : <ArrowRight size={16} />}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
