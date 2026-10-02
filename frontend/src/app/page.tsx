'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuickActions } from '@/components/QuickActions';
import { Footer } from '@/components/Footer';
import type { Language } from '@/lib/types';

const oldSections: Record<string, string> = {
  standards: '/standards', assistant: '/assistant', certification: '/certification',
  labs: '/labs', hallmarking: '/hallmarking', consumer: '/support', help: '/support',
  architecture: '/about', metrics: '/about', about: '/about', search: '/standards',
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const { role, logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const redirect = () => {
      const destination = oldSections[window.location.hash.slice(1)];
      if (destination) router.replace(destination);
    };
    redirect();
    // The prototype banner lives outside this page. Include it when returning
    // home instead of letting route scroll restoration stop below the banner.
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    window.addEventListener('hashchange', redirect);
    return () => window.removeEventListener('hashchange', redirect);
  }, [router]);
  return (
    <div className="landing-page min-h-screen bg-white text-slate-900">
      <Navbar currentLang={language} onLanguageChange={setLanguage} activeRole={role} onLogout={logout} />
      <main>
        <Hero currentLang={language} />
        <QuickActions currentLang={language} />
        <section className="coverage-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 coverage-grid">
            <div><p className="eyebrow text-[#237c7c] mb-3">Know the scope</p><h2>Guidance you can trace.</h2><p className="mt-4 text-slate-600 max-w-xl">Ask about reviewed water documents or core BIS services. Each answer links to the material behind it.</p></div>
            <div className="coverage-cards"><div><span>01 / PDF PILOT</span><strong>Water standards assistant</strong><p>Water answers cite captured BIS and FSSAI document pages. Domain review is still incomplete.</p><Link href="/assistant">Ask about water →</Link></div><div><span>02 / REVIEWED GUIDES</span><strong>Wider BIS services</strong><p>Twelve curated service guides link to the official BIS route for each topic.</p><Link href="/services">Explore BIS services →</Link></div><div><span>03 / SOURCE LIBRARY</span><strong>See what the site uses</strong><p>Browse review dates, captured PDFs and historical status, then continue to the official live portal.</p><Link href="/sources">Search the source library →</Link></div></div>
          </div>
        </section>
        <section className="bg-[#eef3f3]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start gap-6">
            <div><h2 className="text-2xl font-semibold">Have a question about standards?</h2><p className="text-slate-600 mt-3">Open the assistant for guidance, or explore the project and its planned capabilities.</p></div>
            <div className="flex flex-wrap gap-3"><Link className="design-button design-button-primary" href="/assistant">Ask BISynapse</Link><Link className="design-button design-button-secondary" href="/about">About the project</Link></div>
          </div>
        </section>
      </main>
      <Footer currentLang={language} />
    </div>
  );
}
