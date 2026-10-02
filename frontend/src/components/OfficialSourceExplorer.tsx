'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, FileSearch, Search } from 'lucide-react';
import { officialSourceCatalog, searchOfficialSources, type OfficialSourceRecord } from '@/lib/officialSourceCatalog';

const officialPortals = [
  { label: 'Know Your Standard', detail: 'Search by IS number or product keyword, then check editions and amendments.', url: 'https://www.bis.gov.in/know-your-standard/?lang=en' },
  { label: 'Published Standards', detail: 'Search the official BIS list and use its Excel export on the portal.', url: 'https://standards.bis.gov.in/website/published-standards/published-standards-list' },
  { label: 'Compulsory Certification', detail: 'Check the current product list and linked Quality Control Orders.', url: 'https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en' },
];

export function OfficialSourceExplorer() {
  const [query, setQuery] = useState('');
  const [authority, setAuthority] = useState<'All' | 'BIS' | 'FSSAI'>('All');
  const [kind, setKind] = useState<'All' | OfficialSourceRecord['kind']>('All');
  const [includeHistorical, setIncludeHistorical] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const results = useMemo(() => searchOfficialSources(query, authority, kind, includeHistorical), [query, authority, kind, includeHistorical]);
  const reset = () => { setQuery(''); setAuthority('All'); setKind('All'); setIncludeHistorical(false); setVisibleCount(6); };

  return (
    <section aria-labelledby="source-explorer-title" className="bg-[#f5f8f8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#237c7c]">Source library</p>
          <h2 id="source-explorer-title" className="mt-3 text-3xl font-bold text-[#0a2540] sm:text-4xl">Search the material behind the guidance.</h2>
          <p className="mt-4 text-sm text-slate-600">This local catalogue contains {officialSourceCatalog.length} records: reviewed public service summaries and captured water-sector PDFs. It is a snapshot, not the complete or current BIS standards catalogue.</p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {officialPortals.map((portal) => <a key={portal.label} href={portal.url} target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-xl border border-teal-200 bg-white p-5 hover:border-[#237c7c]">
            <span className="flex items-center justify-between font-semibold text-[#0a2540]">{portal.label}<ArrowUpRight size={16} aria-hidden="true" /></span>
            <span className="mt-2 text-xs leading-relaxed text-slate-600">{portal.detail}</span>
            <span className="mt-auto pt-4 text-xs font-semibold text-[#0d6a66]">Open official BIS portal</span>
          </a>)}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-start gap-3"><FileSearch className="mt-1 shrink-0 text-[#237c7c]" size={24} aria-hidden="true" /><div><h3 className="text-xl font-semibold text-[#0a2540]">Browse captured sources</h3><p className="mt-1 text-sm text-slate-600">Search titles, IS numbers or common terms such as “license” and “bottled water”. Results stay on this device and link to the original source.</p></div></div>
          <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1fr)_170px_170px]">
            <label className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2.5"><Search size={18} className="shrink-0 text-slate-500" aria-hidden="true" /><span className="sr-only">Search official source catalogue</span><input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(6); }} placeholder="Try IS 14543, hallmarking, fees…" className="min-w-0 w-full bg-transparent text-sm outline-none" /></label>
            <label className="text-xs font-semibold text-slate-700">Authority<select value={authority} onChange={(event) => { setAuthority(event.target.value as 'All' | 'BIS' | 'FSSAI'); setVisibleCount(6); }} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-normal"><option>All</option><option>BIS</option><option>FSSAI</option></select></label>
            <label className="text-xs font-semibold text-slate-700">Record type<select value={kind} onChange={(event) => { setKind(event.target.value as 'All' | OfficialSourceRecord['kind']); setVisibleCount(6); }} className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-normal"><option>All</option><option>Service guide</option><option>Captured PDF</option></select></label>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600"><label className="inline-flex items-center gap-2"><input type="checkbox" checked={includeHistorical} onChange={(event) => { setIncludeHistorical(event.target.checked); setVisibleCount(6); }} /> Include historical captures</label><button type="button" onClick={reset} className="font-semibold text-[#0f4c81] underline">Clear search and filters</button></div>
        </div>

        <p role="status" aria-live="polite" className="mt-6 text-sm text-slate-600">{results.length} {results.length === 1 ? 'record' : 'records'} found{results.length > 0 ? ` · showing ${Math.min(visibleCount, results.length)}` : ''}</p>
        <div id="source-results" className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.slice(0, visibleCount).map((record) => <article key={record.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wide"><span className="rounded-full bg-teal-50 px-2.5 py-1 text-[#0d6a66]">{record.authority}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{record.kind}</span></div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0a2540]">{record.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{record.summary}</p>
            <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-600"><p><strong className="text-slate-800">Status:</strong> {record.status}</p><p className="mt-1"><strong className="text-slate-800">{record.kind === 'Service guide' ? 'Reviewed:' : 'Captured:'}</strong> {record.checkedOn}</p></div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold"><a href={record.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#0d6a66] underline">Open official source <ArrowUpRight size={14} aria-hidden="true" /></a>{record.guideQuestion && <Link href={`/assistant?q=${encodeURIComponent(record.guideQuestion)}`} className="inline-flex items-center gap-1 text-[#0f4c81] underline">Ask guide <BookOpen size={14} aria-hidden="true" /></Link>}</div>
          </article>)}
        </div>
        {results.length > visibleCount && <button type="button" aria-controls="source-results" onClick={() => setVisibleCount((count) => count + 6)} className="mt-6 rounded-lg bg-[#0a2540] px-5 py-3 text-sm font-semibold text-white hover:bg-[#17436a]">Show more sources</button>}
        {results.length === 0 && <div className="mt-5 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">No captured source matches. Try a broader term, or search the live BIS portals above.</div>}
        <p className="mt-8 text-xs leading-relaxed text-slate-500">The BIS guide summaries were reviewed on their shown dates. PDF hashes track captured files, but do not establish that their contents remain current. Confirm standards, amendments, QCOs, licences and laboratory recognition on BIS-operated sites.</p>
      </div>
    </section>
  );
}
