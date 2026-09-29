import React from 'react';
import { Home, Briefcase, CheckCircle2, ArrowRight, TrendingDown, Percent, Sparkles, ShieldCheck } from 'lucide-react';
import { balanceTransferOptions } from '../data/loanData';

export default function BalanceTransfer({ onSelectLoan }) {
  const handleSelect = (category) => {
    if (onSelectLoan) {
      onSelectLoan(category);
    }
    const target = document.getElementById('contact');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="balance-transfer" className="py-20 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      {/* Decorative background lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-royal-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-800/60 border border-royal-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Core Advisory Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Strategic <span className="text-gradient-gold">Balance Transfer</span> Specialization
          </h2>
          <p className="mt-3 text-xl font-semibold text-royal-300 font-heading">
            Optimize Your Existing Loans
          </p>
          <p className="mt-2 text-base text-slate-300 leading-relaxed">
            Don't let high interest rates erode your family wealth or business cashflow. Transfer your ongoing liability to premier institutions at lower ROI benchmarks.
          </p>
        </div>

        {/* Two Large Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {balanceTransferOptions.map((opt) => {
            const isHome = opt.id === 'home-loan';

            return (
              <div
                key={opt.id}
                className="group relative rounded-3xl p-8 sm:p-9 bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-royal-500/30 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                        isHome
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30 group-hover:bg-amber-400/30'
                          : 'bg-royal-500/20 text-royal-400 border border-royal-400/30 group-hover:bg-royal-400/30'
                      }`}>
                        {isHome ? <Home className="w-7 h-7" /> : <Briefcase className="w-7 h-7" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Specialization</span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">{opt.title}</h3>
                      </div>
                    </div>

                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {opt.badge}
                    </span>
                  </div>

                  {/* Highlight ROI banner */}
                  <div className="p-4 rounded-2xl bg-navy-950/90 border border-navy-700/80 mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Institutional Baseline</div>
                      <div className="text-lg sm:text-xl font-black text-amber-400 font-heading">
                        {opt.highlight}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold text-sm">
                      <Percent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3.5 mb-8">
                    {opt.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-normal">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelect(opt.category)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg ${
                    isHome
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-navy-950 shadow-glow-gold'
                      : 'bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white shadow-glow'
                  }`}
                >
                  <span>{opt.ctaText}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Micro advisory footer */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Zero prepayment or upfront consulting charge from applicant side under Siyaram 0% customer fee model.</span>
        </div>

      </div>
    </section>
  );
}
