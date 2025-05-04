// app/services/credit-cards/page.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCreditCard,
  FaMoneyBillWave,
  FaPlane,
  FaGift,
  FaPiggyBank,
  FaShieldAlt
} from 'react-icons/fa';

export default function ClientCreditcard() {
  const cardTypes = [
    {
      title: 'SimplyCLICK SBI Credit Card',
      // icon: <FaMoneyBillWave className="text-amber-400 text-4xl" />,
      image: '/SBI_CARD.jpg',
      features: [
        '10X Reward Points* on Exclusive Online ',
        'e-Voucher worth 500 on payment of Joining Fee',
        'Annual Fee Reversal on spending ₹1 Lakh in a year',
        ' e-Vouchers worth ₹2,000 on yearly spends of ₹1 Lakh and ₹2 Lakh'
      ],
      bestFor: 'Frequent spenders',
      cta: 'Apply Now',
      link:"http://sales.gromo.in/bn/-E5X2De5WC"
    },
    {
      title: 'ICICI Credit Cards',
      // icon: <FaPlane className="text-amber-400 text-4xl" />,
      image: '/ICICI_CARD.webp',
      features: [
        'Enjoy discounts on shopping, dining, movies, and more',
        'Get complimentary access to airport lounges',
        ' Discounts on fuel purchases and waiver of fuel surcharge',
        'No joining and annual fee on selected variants'
      ],
      bestFor: 'Frequent travelers',
      cta: 'Apply Now',
      link:"http://sales.gromo.in/ik/-E5X2De5WC"
    },
    {
      title: 'HDFC Credit Cards',
      // icon: <FaPiggyBank className="text-amber-400 text-4xl" />,
      image: '/HDFC_CARD.webp',
      features: [
        'Exclusive reward points and cashbacks on online spends',
        'Vouchers on monthly spends',
        'Complimentary Airport Lounge access',
        ' Fuel surcharge waiver'
      ],
      bestFor: 'Everyday spending',
      cta: 'Apply Now',
      link:"http://sales.gromo.in/hd/-E5X2De5WC"
    },
    {
      title: 'AXIS Bank Credit Cards',
      // icon: <FaShieldAlt className="text-amber-400 text-4xl" />,
      image: '/AXIS_CARD.webp',
      features: [
        'Get exciting rewards and cashback benefits',
        'Choose from multiple credit card options',
        'Get complimentary airport lounge access',
        'Waiver on fuel surcharges'
      ],
      bestFor: 'High-net-worth individuals',
      cta: 'Apply Now',
      link:"http://sales.gromo.in/ac/-E5X2De5WC"
    },
    {
      title: 'INDUSIND Credit Card',
      // icon: <FaCreditCard className="text-amber-400 text-4xl" />,
      image: '/INDUS_CARD.webp',
      features: [
  
        ' Reward points that never expire - redeem anytime you want',
        'Indus Easy Credit Card - lifetime free card',
        'Enjoy complimentary airport lounge access',
        'Fuel surcharge waiver on all petrol pumps'
      ],
      bestFor: 'College students',
      cta: 'Apply Now',
      link:"http://sales.gromo.in/ic/-E5X2De5WC"
    },
    {
      title: 'Flipkart Axis Credit Card',
      // icon: <FaMoneyBillWave className="text-amber-400 text-4xl" />,
      image: '/FLIPKART_CARD.webp',
      features: [
        '5% Unlimited Cashback on every transaction!',
        'Shop Smart - Exciting offers on Flipkart EMI purchases.',
        'Dine & Save - 15% discount on restaurant bills',
        'Welcome Bonus - Benefits worth ₹600 upon activation'
      ],
      bestFor: 'Business owners',
      cta: 'Apply Now',
      link:"https://leads.banksathi.com/?h=cXBtZGNiOHFpSVBrT2Iwc2FZZ2wyZz09"
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
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Credit Card Solutions</h1>
          <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Smart credit solutions with exclusive benefits tailored to your spending habits
          </p>
        </motion.div>

        {/* Credit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cardTypes.map((card, index) => (
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
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                  {card.bestFor}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h2 className="text-2xl font-bold text-amber-400 ml-3">{card.title}</h2>
                </div>
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`${card.link}`} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-950 transition-colors"
                  >
                    {card.cta}
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-slate-800 rounded-xl shadow-lg p-8 mb-16 border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">Cardholder Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Fraud Protection</h3>
              <p className="text-slate-300">Zero liability for unauthorized charges and 24/7 fraud monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-amber-400 text-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Contactless Payments</h3>
              <p className="text-slate-300">Secure tap-to-pay technology for faster checkouts</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-amber-400 text-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Flexible Rewards</h3>
              <p className="text-slate-300">Redeem points for travel, cashback, or gift cards</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-600 to-amber-400 p-8 rounded-xl text-slate-900 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Find Your Perfect Credit Card</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Get personalized recommendations based on your credit profile and spending habits
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-amber-400 px-8 w-fit mx-auto font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Match Me With a Card
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}