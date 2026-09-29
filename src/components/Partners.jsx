import React from 'react';
import { Landmark, Building2, Home, Coins, ShieldCheck, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { partnerInstitutions, psuBanks, majorPrivateBanks } from '../data/loanData';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-navy-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-royal-700/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-royal-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Institutional Reach & Tie-Ups
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Our Banking & <span className="text-gradient-gold">Financial Network</span>
          </h2>

          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-navy-950/80 border border-royal-500/30">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">270+</span>
            <span className="text-sm sm:text-base font-semibold text-slate-200">
              Banking & Financial Institutional Partners Across India
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We deal with all major nationalized public sector banks, scheduled private lenders, and specialized housing finance corporations.
          </p>
        </div>

        {/* 4 Category Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerInstitutions.map((cat, idx) => {
            const icons = [Landmark, Building2, Home, Coins];
            const Icon = icons[idx] || Landmark;
            const accents = [
              "border-blue-500/30 text-blue-400 bg-blue-500/10",
              "border-amber-500/30 text-amber-400 bg-amber-500/10",
              "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
              "border-purple-500/30 text-purple-400 bg-purple-500/10"
            ];
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-navy-950/70 border border-navy-700/80 hover:border-royal-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${accents[idx]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{cat.type}</h3>
                  <p className="text-xs text-slate-400 mb-4">{cat.count}</p>
                </div>
                <div className="pt-3 border-t border-navy-800 text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Institutional Channel</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* INDIA'S TOP 10 PSU BANKS (From Presentation Slide 6) */}
        <div className="mb-12 bg-navy-950/90 rounded-3xl p-6 sm:p-8 border border-royal-500/30 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Presentation Partner Spotlight
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-1">
                India's Top 10 PSU Banks
              </h3>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-royal-700/40 text-royal-200 border border-royal-500/40 w-fit">
              Government Bank Tie-Ups
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {psuBanks.map((bank, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-navy-900/90 border border-navy-700/80 hover:border-amber-400/50 hover:bg-navy-850 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      #{idx + 1} PSU
                    </span>
                    <Landmark className="w-4 h-4 text-royal-400 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {bank.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2.5 border-t border-navy-800">
                  <div className="text-[11px] font-mono font-bold text-emerald-400">
                    {bank.cap}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {bank.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAJOR COMMERCIAL & PRIVATE PARTNERS (Slide 7) */}
        <div className="bg-navy-950/80 rounded-3xl p-6 sm:p-8 border border-navy-800">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              We Deal With All Major Commercial Banks & NBFCs
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {majorPrivateBanks.map((name, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-800 hover:border-amber-400/30 text-center transition-all group hover:bg-navy-850"
              >
                <div className="text-xs font-bold text-slate-300 group-hover:text-amber-300 transition-colors">
                  {name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Approved Desk</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct institutional access across 270+ licensed partner channels without customer-side fees.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
