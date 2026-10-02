'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, RotateCcw } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { manufacturerJourney, consumerJourney, type JourneyGuide } from '@/lib/journeyGuides';

export function GuidedJourney({ audience }: { audience: 'manufacturer' | 'consumer' }) {
  const guide: JourneyGuide = audience === 'manufacturer' ? manufacturerJourney : consumerJourney;
  const [routeId, setRouteId] = useState(guide.routes[0].id);
  const [reviewed, setReviewed] = useState<Record<number, boolean>>({});
  const route = guide.routes.find((item) => item.id === routeId) || guide.routes[0];
  const progress = route.steps.filter((_, index) => reviewed[index]).length;
  const selectRoute = (id: string) => { setRouteId(id); setReviewed({}); };
  const reset = () => setReviewed({});

  return <div className="min-h-screen flex flex-col bg-[#f5f8f8] text-slate-900">
    <Navbar currentLang="en" onLanguageChange={() => {}} />
    <main className="flex-1">
      <section className="bg-[#0a2540] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex gap-3 text-xs text-slate-300"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span aria-current="page">{guide.title}</span></nav>
          <p className="text-xs font-bold uppercase tracking-widest text-[#9fd4cc]">Guided path · independent prototype</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">{guide.intro}</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8" aria-label={`${guide.title} steps`}>
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-950">{guide.note}</div>
        <div className="mt-8"><h2 className="text-2xl font-bold text-[#0a2540]">Choose what you need to check</h2><p className="mt-2 text-sm text-slate-600">Your selection changes the guidance below. It does not decide eligibility or verification status.</p></div>
        <div role="tablist" aria-label={`${guide.title} route`} className="mt-5 flex flex-wrap gap-2">{guide.routes.map((item) => <button key={item.id} type="button" role="tab" id={`route-tab-${item.id}`} aria-selected={route.id === item.id} aria-controls="journey-route-panel" onClick={() => selectRoute(item.id)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${route.id === item.id ? 'border-[#0a2540] bg-[#0a2540] text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-[#237c7c]'}`}>{item.label}</button>)}</div>
        <div id="journey-route-panel" role="tabpanel" aria-labelledby={`route-tab-${route.id}`} className="mt-6">
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center"><div><h3 className="text-xl font-semibold text-[#0a2540]">{route.label}</h3><p className="mt-1 text-sm text-slate-600">{route.summary}</p><p role="status" className="mt-2 text-xs font-semibold text-[#0d6a66]">{progress} of {route.steps.length} steps marked reviewed</p></div><button type="button" onClick={reset} className="inline-flex items-center gap-2 self-start text-xs font-semibold text-[#0f4c81] underline"><RotateCcw size={14} aria-hidden="true" />Reset this checklist</button></div>
          <ol className="mt-5 grid gap-4 md:grid-cols-2">{route.steps.map((step, index) => <li key={step.title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5"><div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-[#0d6a66]">{index + 1}</span><div><h4 className="font-semibold text-[#0a2540]">{step.title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p></div></div><div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 text-xs font-semibold"><div className="flex flex-wrap gap-x-4 gap-y-2"><a href={step.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0d6a66] underline">{step.sourceLabel}<ArrowUpRight size={14} aria-hidden="true" /></a>{step.secondSourceUrl && <a href={step.secondSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0d6a66] underline">{step.secondSourceLabel}<ArrowUpRight size={14} aria-hidden="true" /></a>}</div><label className="inline-flex cursor-pointer items-center gap-2 text-slate-700"><input type="checkbox" checked={Boolean(reviewed[index])} onChange={(event) => setReviewed((current) => ({ ...current, [index]: event.target.checked }))} /><span>Reviewed this step</span>{reviewed[index] && <Check size={14} className="text-[#0d6a66]" aria-hidden="true" />}</label></div></li>)}</ol>
          <p className="mt-5 text-xs text-slate-600">Checklist progress stays in this browser page only and does not represent BIS approval, a submitted complaint or a successful verification.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/sources" className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0a2540]">Browse official sources</Link><Link href={audience === 'manufacturer' ? '/certification' : '/support'} className="rounded-lg bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white">{audience === 'manufacturer' ? 'Compare certification schemes' : 'Read consumer guidance'}</Link></div>
      </section>
    </main>
    <Footer currentLang="en" />
  </div>;
}
