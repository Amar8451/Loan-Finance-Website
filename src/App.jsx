import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustGuarantee from './components/TrustGuarantee';
import RevenueModel from './components/RevenueModel';
import BalanceTransfer from './components/BalanceTransfer';
import SavingsCalculator from './components/SavingsCalculator';
import CaseStudy from './components/CaseStudy';
import LoanSolutions from './components/LoanSolutions';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Partners from './components/Partners';
import About from './components/About';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

export default function App() {
  const [selectedLoanCategory, setSelectedLoanCategory] = useState('Home Loan Transfer');

  const handleSelectLoan = (category) => {
    setSelectedLoanCategory(category);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-navy-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Zero-Cost Trust Guarantee */}
        <TrustGuarantee />

        {/* 3. Revenue Model */}
        <RevenueModel />

        {/* 4. Strategic Balance Transfer */}
        <BalanceTransfer onSelectLoan={handleSelectLoan} />

        {/* Interactive Savings Calculator */}
        <section className="bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
          <SavingsCalculator onSelectLoan={handleSelectLoan} />
        </section>

        {/* 5. Case Study */}
        <CaseStudy />

        {/* 6. Comprehensive Multi-Loan Universe */}
        <LoanSolutions onSelectLoan={handleSelectLoan} />

        {/* 7. Why Customers Choose Siyaram */}
        <WhyChooseUs />

        {/* 8. Simple Application Process */}
        <Process />

        {/* 9. Banking & Financial Network */}
        <Partners />

        {/* 10. About Section */}
        <About />

        {/* 11. Contact / Lead Section */}
        <Contact selectedLoanCategory={selectedLoanCategory} />
      </main>

      {/* Floating CTA Widget (WhatsApp & Call) */}
      <FloatingContact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
