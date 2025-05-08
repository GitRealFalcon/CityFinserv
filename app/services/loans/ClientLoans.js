// app/services/loans/page.jsx
'use client';


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaHome,
  FaHandHoldingUsd,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaCalculator,
  FaRupeeSign,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaMoneyBillWave,
  FaPiggyBank
} from 'react-icons/fa';

const ClientLoans = () => {
  const [activeTab, setActiveTab] = useState('personal');
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [activeLoan, setActiveLoan] = useState(null);

  // Fix 1: Calculate EMI properly
  useEffect(() => {
    const calculateEmi = () => {
      const monthlyRate = interestRate / 12 / 100;
      const months = loanTenure * 12;
      
      if (monthlyRate === 0) {
        setEmi(loanAmount / months);
      } else {
        const emiValue = (loanAmount * monthlyRate * 
                         Math.pow(1 + monthlyRate, months)) / 
                         (Math.pow(1 + monthlyRate, months) - 1);
        setEmi(emiValue);
      }
      
      const totalPaymentValue = emi * months;
      const totalInterestValue = totalPaymentValue - loanAmount;

      setTotalInterest(isFinite(totalInterestValue) ? totalInterestValue : 0);
      setTotalPayment(isFinite(totalPaymentValue) ? totalPaymentValue : 0);
    };

    calculateEmi();
  }, [loanAmount, interestRate, loanTenure, emi]);

  // Fix 2: Proper currency formatting
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Fix 3: Handle loan selection properly
//   const handleLoanSelect = (loan) => {
//     setActiveLoan(loan);
//     setLoanAmount(loan.defaultAmount);
//     setInterestRate(loan.defaultRate);
//     setLoanTenure(loan.defaultTenure);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

  // Loan products data
  const loansProducts = {
    personal: [
      {
        id: 1,
        title: 'HDFC Bank',
        link:"http://loan.gromo.in/hl/-E5X2De5WC",
       
        features: [
          'Will not impact your current Credit Card Limit',
          'Instant Loan Approval',
          'Can be availed multiple times',
          'Flexibility in Repayments',
          'Minimal Documentation'
        ],
        image: '/hdfc_loan.jpg'
      },
      {
        id: 2,
        title: 'Indusind Bank',
        link:"http://loan.gromo.in/ip/-E5X2De5WC",
        features: [
          'Flexible loan amount - from ₹30,000 to ₹5 lakhs',
          'Fully digital and paperless journey',
          ' Interest Rates range from 10.49% to 29.50% p.a',
          'Super fast loan disbursal & speedy approval process.'
        ],
        image: '/indusind_loan.jpg'
      },
      {
        id: 3,
        title: 'ABHI Loan',
        link:"http://sales.gromo.in/m/-E5X2De5WC",
        features: [
          ' Low Rate of Interest - from 8% p.a.',
          'Loan from ₹15,000 (up to 60% of Mutual Fund value)',
          ' No income or Cibil requirements',
          ' Quick & digital journey with instant disbursal ',
          'ZERO prepayment or foreclosure charges'

        ],
        image: '/abhi_loan.jpg'
      },
      {
        id: 4,
        title: 'IDFC FIRST Bank',
        link:"http://loan.gromo.in/lo/-E5X2De5WC",
        features: [
          ' Approved Loan Offer upto ₹10 Lakhs',
          'Withdraw funds with flexible EMI dates',
          ' Repay anytime with ZERO foreclosure charges',
          ' ROI Starting from 9.99%',
          ' Flexible Tenure: 9 - 60 Months'
        ],
        image: '/idfc_loan.jpg'
      },
      {
        id: 5,
        title: 'Indusind Bank',
        link:"http://loan.gromo.in/ip/-E5X2De5WC",
        features: [
          'Flexible loan amount - from ₹30,000 to ₹5 lakhs',
          'Fully digital and paperless journey',
          ' Interest Rates range from 10.49% to 29.50% p.a',
          'Super fast loan disbursal & speedy approval process.'
        ],
        image: '/indusind_loan.jpg'
      },
      {
        id: 6,
        title: 'InCred Finance',
        link:"http://loan.gromo.in/in/-E5X2De5WC",
        features: [
          ' Flexible repayment tenure of up to 60 months',
          ' Loan amount ranging from ₹50,000 to ₹10 Lakhs',
          ' Interest rate starting from 1.33% p.m',
          '3 months of Bank statement are required'
        ],
        image: '/incred_loan.jpg'
      },
      {
        id: 7,
        title: 'Aditya Birla Finance',
        link:"http://loan.gromo.in/zc/-E5X2De5WC",
        features: [
          ' Get higher limit by uploading Bank Statement',
          ' Instant Disbursement',
          ' Digital Approval Process with VKYC',
          'Collateral free loan'
        ],
        image: '/aditya_loan.jpg'
      },
      {
        id: 8,
        title: 'UNITY Small Finance Bank',
        link:"http://loan.gromo.in/ut/-E5X2De5WC",
        features: [
          ' No Paperwork',
          ' No Bank Visit Requiredt',
          'No Collateral Required',
          ' Get personal loan of upto ₹5 Lakh '
        ],
        image: '/unity_loan.jpg'
      },
      {
        id: 9,
        title: 'Prefr',
        link:"http://loan.gromo.in/pf/-E5X2De5WC",
        features: [
          ' Zero Paperwork',
          ' Available for both salaried and self employed',
          ' Instant Loan Approval',
          'Same Day Disbursal'
        ],
        image: '/prefr_loan.jpg'
      },
      {
        id: 10,
        title: 'KreditBee',
        link:"http://loan.gromo.in/kb/-E5X2De5WC",
        features: [
          ' Loans ranging from ₹1,000 to ₹5 Lakhs',
          ' Easy application process',
          ' Digital processing and 10-minute loan disbursal.',
          'Interest rate from 1.02% - 2.49% p.m'
        ],
        image: '/kreditbee_loan.jpg'
      },
      {
        id: 11,
        title: 'Fi',
        link:"http://loan.gromo.in/ml/-E5X2De5WC",
        features: [
          '  Interest rates: Starting 0.8% per month',
          'Flexible loans: ₹25,000 to ₹5,00,000',
          ' Zero pre-closure fees (for Liquiloans)',
          ' Approval: 100% digital & paperless'
        ],
        image: '/fi_loan.jpg'
      },
    ],
    home: [
      {
        id: 1,
        title: '.BASIC',
        link:"http://loan.gromo.in/bx/-E5X2De5WC",
        features: [
          'Choose loan offers from 90+ financiers',
          'Paperless application ',
          'Digital loan sanctions',
          'Step by step tracking'
        ],
        image: '/basic_home.jpg'
      },
    ],
    credit: [
      {
        id: 1,
        title: 'HDFC Bank',
        link:"http://loan.gromo.in/he/-E5X2De5WC",
        features: [
          'Instant Loan Approval',
          'Can be availed multiple times',
          'Flexibility in Repayments',
          'Minimal Documentation'
        ],
        image: '/hdfc_loan.jpg'
      },
      {
        id: 2,
        title: 'Bajaj Finserv',
        link:"http://loan.gromo.in/bf/-E5X2De5WC",
        features: [
          'Use on 1M+ Products across 2,300+ Cities',
          '100% Digital with 30 Second Approval',
          ' Credit up to ₹3 Lacs Available',
          
        ],
        image: '/bajaj_creditline.jpg'
      },
      {
        id: 3,
        title: 'Fatak PAY',
        link:"http://loan.gromo.in/fz/-E5X2De5WC",
        features: [
          'Get Loan of ₹20000 in 5 Mins',
          'No Document required',
          ' Flat fee of ₹500 per Disbursal',
          'Interest free Loan',
          
        ],
        image: '/fatak_creditline.jpg'
      },
    ]
  };

//   Set loan parameters when a product is selected
  const handleLoanSelect = (loan) => {
    setActiveLoan(loan);
    setLoanAmount(loan.defaultAmount);
    setInterestRate(loan.defaultRate);
    setLoanTenure(loan.defaultTenure);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-amber-400 mb-4"
          >
            Smart Loan Solutions
          </motion.h1>
          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Competitive loan products tailored to your personal and business needs with quick approvals
          </p>
        </div>
      </section>

       {/* Loans Type Tabs */}
       <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'personal', label: 'Personal Loans' },
              { id: 'home', label: 'Home Loans' },
              { id: 'credit', label: 'Credit Lines' }
            ].map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-1 py-2  sm:px-6 sm:py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? tab.className = 'bg-amber-600 text-slate-900'
                    : tab.className = 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {loansProducts[activeTab].map((loan) => (
                   <motion.div
                     key={loan.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-700"
                   >
                     <div className="relative h-48">
                       <Image
                         src={loan.image}
                         alt={loan.title}
                         fill
                         className="object-cover"
                         sizes="(max-width: 768px) 100vw, 33vw"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                       {/* <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                         {loan.interest} Interest
                       </div> */}
                     </div>
                     <div className="p-6">
                       <div className="flex items-center mb-4">
                         {/* <FaPiggyBank className="text-amber-500 text-3xl mr-3" /> */}
                         <h2 className="text-2xl font-bold text-amber-400">{loan.title}</h2>
                       </div>
                      
                       <ul className="space-y-3 mb-6">
                         {loan.features.map((feature, index) => (
                           <li key={index} className="flex items-start">
                             <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                             </svg>
                             <span className="text-slate-300">{feature}</span>
                           </li>
                         ))}
                       </ul>
                       <a href={loan.link} target='_blank'>
                         <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors"
                         >
                           Apply Now
                         </motion.button>
                       </a>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </section>

      {/* EMI Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700 mx-4"
          >
            <h2 className="text-3xl font-bold text-amber-400 mb-6 flex items-center">
              <FaCalculator className="mr-3" /> EMI Calculator
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-400 mb-3">
                    Loan Amount: {formatCurrency(loanAmount)}
                  </label>
                  <input 
                    type="range" 
                    min="50000" 
                    max="50000000" 
                    step="50000" 
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-slate-400 text-sm mt-2">
                    <span>₹50K</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <label className="block text-amber-400 mb-3">
                    Interest Rate: {interestRate}%
                  </label>
                  <input 
                    type="range" 
                    min="6" 
                    max="20" 
                    step="0.1" 
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-slate-400 text-sm mt-2">
                    <span>6%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-amber-400 mb-3">
                    Loan Tenure: {loanTenure} years
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="1" 
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-slate-400 text-sm mt-2">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                {activeLoan && (
                  <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                    <h4 className="text-amber-400 font-medium mb-2">Selected Loan:</h4>
                    <p className="text-slate-300">{activeLoan.title}</p>
                  </div>
                )}
              </div>

              {/* Calculator Results */}
              <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-amber-400 mb-6 text-center">
                  Loan Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Monthly EMI:</span>
                    <span className="text-2xl font-bold text-amber-400">
                      {formatCurrency(emi)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Principal Amount:</span>
                    <span className="text-xl text-amber-400">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Total Interest:</span>
                    <span className="text-xl text-amber-400">
                      {formatCurrency(totalInterest)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300">Total Payment:</span>
                    <span className="text-xl text-amber-400">
                      {formatCurrency(totalPayment)}
                    </span>
                  </div>
                  
                  <div className="mt-6">
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-600" 
                        style={{
                          width: `${(loanAmount / totalPayment) * 100}%`
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-slate-400 text-sm mt-2">
                      <span>Principal: {formatCurrency(loanAmount)}</span>
                      <span>Interest: {formatCurrency(totalInterest)}</span>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Simple 4-Step Loan Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaFileAlt className="text-amber-400 text-2xl" />,
                step: '01',
                title: 'Application',
                description: 'Fill our simple online form in 5 minutes'
              },
              {
                icon: <FaChartLine className="text-amber-400 text-2xl" />,
                step: '02',
                title: 'Documentation',
                description: 'Submit minimal required documents'
              },
              {
                icon: <FaCheckCircle className="text-amber-400 text-2xl" />,
                step: '03',
                title: 'Approval',
                description: 'Get quick approval decision'
              },
              {
                icon: <FaMoneyBillWave className="text-amber-400 text-2xl" />,
                step: '04',
                title: 'Disbursal',
                description: 'Receive funds in your account'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    {step.icon}
                  </div>
                  {/* <div className="absolute top-8 left-full hidden md:block w-16 h-1 bg-slate-600"></div> */}
                  <span className="text-amber-400 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Your Loan?</h2>
          <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
            Our financial experts will guide you to the best loan product with competitive rates and terms.
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get Instant Approval
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientLoans;