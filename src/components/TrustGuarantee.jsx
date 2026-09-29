import React from 'react';
import { ShieldCheck, Building2, Eye, Users, CheckCircle, Sparkles } from 'lucide-react';
import { trustGuaranteeFeatures } from '../data/loanData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  Eye: Eye,
  Users: Users,
};

export default function TrustGuarantee() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Decorative ambient elements */}
      <div className="absolute -top-32 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-royal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-Cost Financial Advisory
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            The Zero-Cost <span className="text-gradient-gold">Trust Guarantee</span>
          </h2>

          {/* Large Highlight */}
          <div className="my-6 inline-block">
            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border-2 border-amber-400/50 shadow-glow-gold">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-amber-300 uppercase font-heading">
                0% Fees From Customers
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            “Our professional consulting, comprehensive profiles, and operational balance assistance are <span className="text-white font-semibold underline decoration-amber-400/60 decoration-2">100% free for the client</span>.”
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustGuaranteeFeatures.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl p-7 bg-navy-900/80 border border-navy-700/80 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-600 group-hover:text-amber-400/80 transition-colors font-heading">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-slate-300 group-hover:bg-amber-400/20 group-hover:text-amber-300 transition-colors border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-royal-600/20 border border-royal-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-1.5 text-xs font-semibold text-amber-400/90">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Policy</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
