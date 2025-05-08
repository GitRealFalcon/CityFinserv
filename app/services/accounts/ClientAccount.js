// app/services/savings/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaPiggyBank,
  FaChartLine,
  FaLock,
  FaPercentage,
  FaMobileAlt,
  FaShieldAlt,
  FaHandHoldingUsd
} from 'react-icons/fa';

export default function ClientAccount() {
  const [activeTab, setActiveTab] = useState('saving');

  const savingsProducts = {
    saving: [
      {
        id: 1,
        title: 'Kotak 811',
        interest: '7%',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/kt/-E5X2De5WC",
        features: [
          'Earn up to 7% interest per annum',
          ' Free Virtual Debit Card loaded with offers',
          'Get up to ₹6000 cashback on debit card spends',
          'No monthly balance maintenance required'
        ],
        image: '/kotak_account.jpg'
      },
      {
        id: 2,
        title: 'IndusInd Bank',
        interest: '7%',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/da/-E5X2De5WC",
        features: [
          '5% cashback* on fuel, entertainment, dining and OTT spends with your Delights debit card',
          '5% cashback on Amazon* with your IndusInd Bank debit card',
          'Open account with an Initial funding of ₹500 only',
          '20% off on Swiggy & 10% off on Bigbasket with your Delights debit card'
        ],
        image: '/indusind_account.jpg'
      },
      {
        id: 3,
        title: 'Airtel Payments Bank',
        interest: '7%',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/zd/-E5X2De5WC",
        features: [
          'Cashless payments',
          'Earn 7%* interest on savings',
          ' 24X7 payment service',
          ' Unlock ₹15,000+ discounts on 70+ brands with a Debit Card. ',
        ],
        image: '/airtel_account.jpg'
      },
      {
        id: 4,
        title: 'IndusInd INDI',
        interest: 'Up To 7%',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/zv/-E5X2De5WC",
        features: [
          ' Interest rate of up to 7% p.a.',
          'Lifetime Zero-balance savings account',
          '3% rewards for Fuel spend',
          '1+1 Bookmyshow tickets with VISA Signature debit card.',
        ],
        image: '/indi_account.jpg'
      },
      {
        id: 5,
        title: 'AXIS Digital',
        interest: '7%',
        minBalance: '10k',
        link:"http://sales.gromo.in/ax/-E5X2De5WC",
        features: [
          '  10% cashback on Flipkart, Amazon & 20% cashback on Zomato and Tata 1 mg',
          ' No need to visit the Branch - Customer can avail 250+ online services',
          'Instant Virtual Debit card with 1% cashback on online spends',
          ' Get accidental insurance cover of up to ₹1 crore',
        ],
        image: '/axisdigital_account.jpg'
      },
      {
        id: 6,
        title: 'Jupiter',
        interest: 'Up To 7%',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/ju/-E5X2De5WC",
        features: [
          '1% Rewards on UPI & Debit Card Transactions',
          'Check all bank Balances in one place',
          'Get real-time spend breakdowns with Insights',
        ],
        image: '/jupiter_account.jpg'
      },
      
    ],
    current: [
      {
        id: 1,
        title: 'Tide',
        minBalance: 'Zero Balance',
        link:"http://sales.gromo.in/tr/-E5X2De5WC",
        features: [
          'Add Funds using Credit Card T&C Applied',
          ' Buy 1 Get 1 Free Movie Ticket on Book My Show',
          'Get ₹25 in wallet after account opened successfully',
        ],
        image: '/tide_account.jpg'
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-amber-400 mb-4"
        >
          Smart Savings Solutions
        </motion.h1>
        <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Grow your money safely with our range of savings accounts offering competitive interest rates and premium benefits
        </p>
      </section>

      {/* Account Type Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2">
            {[
              { id: 'saving', label: 'Savings  Accounts' },
              { id: 'current', label: 'Current Accounts' }
            ].map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 py-2  sm:px-6 sm:py-3 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savingsProducts[activeTab].map((account) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-700"
              >
                <div className="relative h-48">
                  <Image
                    src={account.image}
                    alt={account.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {account.interest} Interest
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* <FaPiggyBank className="text-amber-500 text-3xl mr-3" /> */}
                    <h2 className="text-2xl font-bold text-amber-400">{account.title}</h2>
                  </div>
                  <div className="mb-4">
                    <span className="text-slate-400">Min Balance: </span>
                    <span className="text-amber-400 font-medium">{account.minBalance}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {account.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={account.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      Open Account
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Why Choose Our Savings Accounts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaPercentage className="text-amber-500 text-3xl" />,
                title: 'Competitive Rates',
                description: 'Enjoy higher interest rates than most banks'
              },
              {
                icon: <FaLock className="text-amber-500 text-3xl" />,
                title: '100% Secure',
                description: 'DICGC insured up to ₹5 lakhs per account'
              },
              {
                icon: <FaMobileAlt className="text-amber-500 text-3xl" />,
                title: 'Digital Banking',
                description: 'Full access through mobile and internet banking'
              },
              {
                icon: <FaShieldAlt className="text-amber-500 text-3xl" />,
                title: 'Fraud Protection',
                description: '24/7 monitoring and instant alerts'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center"
              >
                <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Calculator
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-amber-400 mb-6 flex items-center">
            <FaChartLine className="mr-3" /> Interest Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-400 mb-3">Deposit Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="10,000"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-amber-400 mb-3">Interest Rate (%)</label>
                  <input
                    type="number"
                    placeholder="4.0"
                    step="0.1"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-amber-400 mb-3">Tenure (years)</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>1 year</option>
                    <option>3 years</option>
                    <option>5 years</option>
                    <option>10 years</option>
                  </select>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold py-3 px-4 rounded-lg transition-colors">
                  Calculate Interest
                </button>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-amber-400 mb-6 text-center">
                Your Earnings Potential
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">Principal Amount:</span>
                  <span className="text-xl text-amber-400">₹10,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">Total Interest:</span>
                  <span className="text-xl text-amber-400">₹2,400</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">Maturity Value:</span>
                  <span className="text-2xl font-bold text-amber-400">₹12,400</span>
                </div>
                <div className="mt-6">
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm mt-2">
                    <span>Principal: ₹10,000</span>
                    <span>Interest: ₹2,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Saving?</h2>
          <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
            Open your savings account in just 5 minutes with minimal documentation
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get More Info
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
}