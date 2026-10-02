'use client';

import { ArrowUpRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import { bisServiceGuides } from '@/lib/bisServiceGuides';

export function BisGuidePicker({ onAsk, disabled }: { onAsk: (question: string) => void; disabled: boolean }) {
  const picker = useRef<HTMLDetailsElement>(null);
  const chooseGuide = (question: string) => {
    if (picker.current) {
      picker.current.open = false;
      picker.current.querySelector('summary')?.focus();
    }
    onAsk(question);
  };
  return (
    <details ref={picker} className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <summary className="cursor-pointer text-sm font-semibold text-[#0a2540]">
        Browse {bisServiceGuides.length} BIS service guides
      </summary>
      <p className="mt-3 text-xs text-slate-600">Choose a general question to get a reviewed answer with an official source. These guides are available in English; they do not check a live record.</p>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {bisServiceGuides.map((guide) => (
          <button key={guide.id} type="button" disabled={disabled} onClick={() => chooseGuide(guide.question)}
            className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 text-left text-sm text-[#0f4c81] hover:border-[#237c7c] disabled:opacity-50">
            <BookOpen size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span><span className="block font-semibold">{guide.title}</span><span className="mt-1 block text-[11px] text-slate-500">Reviewed {guide.reviewedOn}</span></span>
          </button>
        ))}
      </div>
      <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f4c81]">Explore all official service routes <ArrowUpRight size={14} aria-hidden="true" /></Link>
    </details>
  );
}
