'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { searchBisServices, type BisService } from '@/lib/bisServiceDirectory';
import { BisJourneyPicker } from './BisJourneyPicker';

const categories = ['All', 'Find', 'Certify', 'Verify', 'Get help'] as const;
type Category = (typeof categories)[number];

export function BisServiceDirectory() {
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchBisServices(query, category), [category, query]);

  return (
    <section aria-labelledby="directory-title" className="directory-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="directory-heading">
          <div>
            <p className="eyebrow text-[#237c7c]">Explore BIS services</p>
            <h2 id="directory-title">Find the right official route.</h2>
            <p>Start with a topic, then continue on the BIS service that owns the live record or application.</p>
          </div>
          <div className="directory-note"><strong>Coverage today</strong><span>Reviewed water documents plus selected BIS service answers. Live registry and product-specific decisions remain on BIS portals.</span></div>
        </div>
        <BisJourneyPicker />
        <div id="service-directory" className="directory-controls">
          <div role="group" aria-label="Filter BIS services" className="directory-filters">
            {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <label className="directory-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search BIS services</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services, marks or schemes" /></label>
        </div>
        <div className="mb-4 flex items-center justify-between gap-3 text-xs text-slate-600">
          <p role="status" aria-live="polite">{results.length} {results.length === 1 ? 'service' : 'services'} found{category !== 'All' ? ` in ${category}` : ''}</p>
          {(query || category !== 'All') && <button type="button" className="font-semibold text-[#0f4c81] underline" onClick={() => { setCategory('All'); setQuery(''); }}>Clear filters</button>}
        </div>
        <div className="directory-grid">
          {results.map((service: BisService, index) => <article key={service.id} className="directory-card">
            <div className="directory-card-top"><span>{service.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <div className="directory-next"><span>Next step</span>{service.nextStep}</div>
            <div className="directory-links">
              <a href={service.officialUrl} target="_blank" rel="noopener noreferrer">{service.officialLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>
              {service.localUrl && <Link href={service.localUrl}>{service.localLabel}</Link>}
              {service.guideQuestion && <Link href={`/assistant?q=${encodeURIComponent(service.guideQuestion)}`} aria-label={`Ask BISynapse about ${service.title}`}>Ask BISynapse</Link>}
            </div>
          </article>)}
        </div>
        {results.length === 0 && <p role="status" className="py-12 text-slate-600">No matching service. Try a broader term or select All.</p>}
        <p className="directory-footnote">Original links reviewed 27 September 2026; fees and jeweller-registration links added and reviewed 29 September 2026. BIS pages and requirements may change; confirm the current position on the linked official site.</p>
      </div>
    </section>
  );
}
