// app/about/ClientAbout.jsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandshake, FaChartLine, FaMoneyCheckAlt } from 'react-icons/fa';

export function ClientAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">
            Your Trusted Financial Partner
          </h1>
          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a certified financial advisor dedicated to helping people like you navigate the world of money — smarter. Whether you&apos;re getting started or growing wealth, I provide clear, personalized advice to help you thrive financially.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-400 text-center mb-12">
            Comprehensive Financial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Credit Guidance', icon: <FaMoneyCheckAlt className="w-8 h-8 text-amber-500" /> },
              { title: 'Loan Solutions', icon: <FaChartLine className="w-8 h-8 text-amber-500" /> },
              { title: 'Investment Plans', icon: <FaHandshake className="w-8 h-8 text-amber-500" /> },
              { title: 'Retirement Strategy', icon: <FaChartLine className="w-8 h-8 text-amber-500" /> },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-700"
              >
                <div className="text-amber-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-300">Personalized solutions tailored to your unique financial needs</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-800 rounded-2xl shadow-lg p-8 mb-16 border border-slate-700"
        >
          <h2 className="text-2xl font-semibold text-amber-400 mb-8">Detailed Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Credit Card Guidance',
              'Personal & Business Loans',
              'Savings & Investment Strategies',
              'Insurance Planning (Life, Health, Auto)',
              'Debt Management & Consolidation',
              'Retirement Planning',
              'Financial Goal Mapping',
              'Emergency Fund Setup',
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-slate-700 hover:bg-slate-600 transition-all"
              >
                <span className="text-lg font-medium text-slate-100">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mb-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/Financial_Advisor.webp"
            alt="Certified Financial Advisor"
            width={1200}
            height={675}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-8 rounded-2xl shadow-lg text-slate-900">
            <h3 className="text-2xl font-bold mb-4">Let’s Build Your Financial Future</h3>
            <p className="mb-6 text-slate-800 max-w-xl mx-auto">
              Ready to take the next step in your financial journey? Book a consultation today and let’s create a plan that works for you.
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Start Your Journey
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}