// app/services/ClientServices.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaCreditCard, 
  FaHandHoldingUsd, 
  FaPiggyBank,
  FaHeartbeat,
  FaCar,
  FaHome,
  FaChartLine,
  FaMotorcycle,
  FaTruck
} from 'react-icons/fa';

let ClientServices = ()=> {
  const services = [
    {
      title: 'Insurance Solutions',
      icon: <FaShieldAlt className="w-8 h-8" />,
      features: [
        { title: 'Bike Insurance', icon: <FaMotorcycle /> },
        { title: 'Car Insurance', icon: <FaCar /> },
        { title: 'Commercial Vehicle Insurance', icon: <FaTruck /> },
        { title: 'Health Insurance', icon: <FaHeartbeat /> },
      ],
      description: 'Comprehensive protection for what matters most',
      link: '/services/insurance'
    },
    {
      title: 'Credit Cards',
      icon: <FaCreditCard className="w-8 h-8" />,
      features: [
        { title: 'Rewards Cards', icon: <FaChartLine /> },
        { title: 'Travel Cards', icon: <FaChartLine /> },
        { title: 'Cashback Cards', icon: <FaChartLine /> },
        { title: 'Balance Transfer', icon: <FaChartLine /> },
      ],
      description: 'Smart spending with exclusive benefits',
      link: '/services/credit-cards'
    },
    {
      title: 'Loan Options',
      icon: <FaHandHoldingUsd className="w-8 h-8" />,
      features: [
        { title: 'Personal Loans', icon: <FaChartLine /> },
        { title: 'Home Loans', icon: <FaHome /> },
        { title: 'Business Loans', icon: <FaChartLine /> },
        { title: 'Debt Consolidation', icon: <FaChartLine /> },
      ],
      description: 'Tailored financing for your goals',
      link: '/services/loans'
    },
    {
      title: 'Savings Accounts',
      icon: <FaPiggyBank className="w-8 h-8" />,
      features: [
        { title: 'High-Yield Savings', icon: <FaChartLine /> },
        { title: 'Emergency Funds', icon: <FaChartLine /> },
        { title: 'Retirement Accounts', icon: <FaChartLine /> },
        { title: 'CD Investments', icon: <FaChartLine /> },
      ],
      description: 'Grow your wealth securely',
      link: '/services/accounts'
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Financial Services</h1>
          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Tailored financial solutions to secure your present and grow your future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-500 mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-amber-400 mb-2">{service.title}</h2>
              <p className="text-slate-300 mb-4">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center space-x-2">
                    <span className="text-amber-400">{feature.icon}</span>
                    <span className="text-slate-300">{feature.title}</span>
                  </div>
                ))}
              </div>

              <Link href={service.link}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-amber-500 font-medium hover:text-amber-400 flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <section className="space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-slate-800 rounded-2xl shadow-lg p-8 border-slate-700 border"
          >
            <div className="flex items-center mb-6">
              <FaShieldAlt className="w-12 h-12 text-amber-500 mr-4" />
              <h2 className="text-3xl font-bold text-amber-400">Insurance Solutions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-slate-200 font-semibold mb-4">Coverage Types</h3>
                <ul className="space-y-3">
                  {['Life Insurance', 'Health Plans', 'Auto Coverage', 'Home Protection'].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2  bg-amber-500 rounded-full" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-slate-200 font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-slate-300">
                  Customized insurance plans with competitive premiums and 24/7 claim support. 
                  Protect your family and assets with comprehensive coverage options.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Repeat similar structure for other sections */}
        </section>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-600 to-amber-400 p-8 rounded-2xl text-slate-900 mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Schedule a free consultation to discuss your financial needs and find the perfect solutions
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 w-fit mx-auto text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Book Consultation
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ClientServices