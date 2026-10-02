'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Store, Scan, Search, Award, ShieldCheck, MessageSquare, ArrowRight, FileCheck } from 'lucide-react';
import { AuthGuard } from '@/components/AuthGuard';
import { useAuth } from '@/lib/authContext';

function RetailerDashboardContent() {
  const { user, logout } = useAuth();
  const services = [
    { title: 'Check a Supplier Mark', desc: 'Find BIS CARE routes for licence details', icon: ShieldCheck, href: '/services' },
    { title: 'Scan Product', desc: 'Scan barcodes or ISI QR codes on incoming inventory', icon: Scan, href: '/scan' },
    { title: 'Certification Routes', desc: 'Understand BIS product schemes and official application links', icon: Award, href: '/certification' },
    { title: 'Check QCO Lists', desc: 'Review current compulsory-certification listings on BIS', icon: Search, href: '/services' },
    { title: 'Product Guidance', desc: 'Explore prototype standards records and confirm on BIS', icon: FileCheck, href: '/standards' },
    { title: 'Ask BISynapse', desc: 'Reviewed BIS service guidance and water-source answers', icon: MessageSquare, href: '/assistant' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 text-left">
      <Navbar currentLang="en" onLanguageChange={() => {}} activeRole="retailer" onLogout={logout} />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        
        <div className="bg-[#0A2540] text-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#0F4C81] text-amber-400 text-xs font-bold">
              <Store className="w-3.5 h-3.5" />
              <span>Retailer Compliance Hub</span>
            </div>
            <h1 className="text-2xl font-black text-white">
              Welcome, {user?.name || 'Retailer'}
            </h1>
            <p className="text-xs text-slate-300">
              Find official checks for supplier marks and current product requirements.
            </p>
          </div>

          <Link
            href="/scan"
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-md shadow-2xs flex items-center space-x-1.5 transition-colors shrink-0"
          >
            <Scan className="w-4 h-4" />
            <span>Explore Label</span>
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#0A2540]">Retailer Compliance Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Link
                  key={idx}
                  href={s.href}
                  className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#0F4C81] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded bg-slate-100 text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-amber-400 flex items-center justify-center font-bold transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#0A2540]">{s.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0F4C81]">
                    <span>Access Tool</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </main>

      <Footer currentLang="en" onNavigate={() => {}} />
    </div>
  );
}

export default function RetailerDashboard() {
  return (
    <AuthGuard allowedRole="retailer">
      <RetailerDashboardContent />
    </AuthGuard>
  );
}
