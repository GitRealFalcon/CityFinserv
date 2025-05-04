// app/services/insurance/page.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaHeartbeat, 
  FaCar, 
  FaHome,
  FaPlane,
  FaUmbrella,
  FaUserShield,
  FaBicycle,
  FaTruck
} from 'react-icons/fa';

export default function ClientInsurance() {
  const insuranceTypes = [
    {
      title: 'Bike Insurance',
      icon: <FaBicycle className="text-amber-400 text-4xl" />,
      image: '/BIKE.svg',
      benefits: [
        'Third-party liability coverage',
        'Own damage protection',
        '24/7 roadside assistance',
        'Quick claim processing'
      ],
      cta: 'Get Offers',
      link:"https://tw.gromoinsure.in/?token=ATnD39s30bzjxa%2BpJJ7zTLpEIWsZjdvh6UxmWcI51uYyX6OTwcay1AaD%2B9RHLSjs&partner=gromo&screen=motor-insurance&ajasaraa=jkkjagjg"
    },
    {
      title: 'Car Insurance',
      icon: <FaCar className="text-amber-400 text-4xl" />,
      image: '/CAR.jpg',
      benefits: [
        'Third-party liability coverage',
        'Own damage protection',
        '24/7 roadside assistance',
        'Quick claim processing'
      ],
      cta: 'Get Offers',
      link:"https://mi.gromoinsure.in/?token=ATnD39s30bzjxa%2BpJJ7zTLpEIWsZjdvh6UxmWcI51uagU7yJkheGDLBzOKGbVvgj&partner=gromo&screen=motor-insurance&ajasaraa=jkkjagjg"
    },
    {
      title: 'Commercial Vehicle Insurance',
      icon: <FaTruck className="text-amber-400 text-4xl" />,
      image: '/COMMER.png',
      benefits: [
       'Third-party liability coverage',
        'Own damage protection',
        '24/7 roadside assistance',
        'Quick claim processing'
      ],
      cta: 'Get Offers',
      link:"https://cv.gromoinsure.in/?token=ATnD39s30bzjxa%2BpJJ7zTLpEIWsZjdvh6UxmWcI51uagU7yJkheGDLBzOKGbVvgj&partner=gromo&screen=motor-insurance&ajasaraa=jkkjagjg"
    },
   
    {
      title: 'Health Insurance',
      icon: <FaUserShield className="text-amber-400 text-4xl" />,
      image: '/HEALTH.jpg',
      benefits: [
        'Comprehensive medical coverage',
        'Preventive care included',
        'Network of top hospitals',
        'Cashless claim settlement'
      ],
      cta: 'View Plans',
      link:"https://hi.gromoinsure.in/?token=ATnD39s30bzjxa%2BpJJ7zTLpEIWsZjdvh6UxmWcI51uZ0YEtkuMNuNn8HwdYan2ub&partner=gromo&screen=health-insurance&ajasaraa=jkkjagjg"
    }
    
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Insurance Solutions</h1>
          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive protection plans tailored to your unique needs and lifestyle
          </p>
        </motion.div>

        {/* Insurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-slate-700"
            >
              <div className="relative h-48">
                <Image
                  src={insurance.image}
                  alt={insurance.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                  {insurance.title}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {insurance.icon}
                  <h2 className="text-2xl font-bold text-amber-400 ml-3">{insurance.title}</h2>
                </div>
                <ul className="space-y-2 mb-6">
                  {insurance.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link href={insurance.link} target='_blank'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-950 transition-colors"
                  >
                    {insurance.cta}
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-slate-800 rounded-xl shadow-lg p-8 mb-16 border border-slate-700"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/INSURANCE.webp"
                alt="Insurance Expert"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-400 mb-6">Why Choose Our Insurance?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaShieldAlt className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-2">Customized Plans</h3>
                    <p className="text-slate-300">Tailored coverage options to match your specific requirements and budget</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-2">Fast Claims</h3>
                    <p className="text-slate-300">24/7 claims support with 98% satisfaction rate and quick settlements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-8 h-8 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-400 mb-2">Competitive Pricing</h3>
                    <p className="text-slate-300">Premium rates up to 20% lower than market average with better coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-600 to-amber-400 p-8 rounded-xl text-slate-900 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Need Personalized Insurance Advice?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Our licensed insurance experts are ready to help you find the perfect coverage
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get Free Consultation
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}