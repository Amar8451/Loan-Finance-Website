import React, { useState } from 'react';
import { Calculator, IndianRupee, Sparkles, TrendingDown, ArrowRight } from 'lucide-react';

export default function SavingsCalculator({ onSelectLoan }) {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs default
  const [currentRate, setCurrentRate] = useState(9.0);
  const [newRate, setNewRate] = useState(7.0);
  const [tenureYears, setTenureYears] = useState(20);

  // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return principal / months;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const currentEMI = calculateEMI(loanAmount, currentRate, tenureYears);
  const newEMI = calculateEMI(loanAmount, newRate, tenureYears);
  const monthlySavings = Math.max(0, currentEMI - newEMI);

  const totalCurrentInterest = currentEMI * tenureYears * 12 - loanAmount;
  const totalNewInterest = newEMI * tenureYears * 12 - loanAmount;
  const totalSavings = Math.max(0, totalCurrentInterest - totalNewInterest);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApply = () => {
    if (onSelectLoan) {
      onSelectLoan('Home Loan Transfer');
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
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-navy-950/90 border border-royal-500/30 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-navy-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white font-heading">
              Interactive Balance Transfer Calculator
            </h3>
            <p className="text-xs text-slate-400">
              Calculate potential monthly and lifetime interest savings
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Instant Estimation
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Sliders Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
              <span>Outstanding Loan Amount</span>
              <span className="text-amber-400 font-mono text-sm">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="1000000"
              max="20000000"
              step="500000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>₹10 Lakhs</span>
              <span>₹1 Crore</span>
              <span>₹2 Crores</span>
            </div>
          </div>

          {/* Current vs New Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                <span>Current Rate</span>
                <span className="text-red-400 font-mono">{currentRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min="8.0"
                max="14.0"
                step="0.25"
                value={currentRate}
                onChange={(e) => setCurrentRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-red-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                <span>Target Siyaram Rate</span>
                <span className="text-emerald-400 font-mono">{newRate.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min="7.0"
                max="9.0"
                step="0.25"
                value={newRate}
                onChange={(e) => setNewRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
              <span>Remaining Loan Tenure</span>
              <span className="text-amber-400 font-mono">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>5 Years</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5 bg-navy-900/90 rounded-2xl p-6 border border-royal-500/20 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Estimated Monthly EMI</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black text-white font-mono">{formatINR(newEMI)}</span>
                <span className="text-xs text-red-400 line-through font-mono">{formatINR(currentEMI)}</span>
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-0.5">
                Save {formatINR(monthlySavings)} / Month
              </div>
            </div>

            <div className="pt-3 border-t border-navy-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Total Lifetime Savings</div>
              <div className="text-3xl font-black text-gradient-gold font-mono mt-1">
                {formatINR(totalSavings)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Over {tenureYears} years with a {(currentRate - newRate).toFixed(2)}% ROI optimization.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full mt-6 py-3 px-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <span>Lock In Low Rate Transfer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
