'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCertificate,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaSearch,
  FaExternalLinkAlt,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const certificates = [
    {
      id: 1,
      title: 'Frontend Development',
      issuer: 'Meta',
      date: '2023',
      skills: ['React', 'JavaScript', 'CSS'],
      category: 'development',
      image: '/certificates/meta-frontend.jpg',
      url: 'https://coursera.org/certificate/frontend-dev'
    },
    {
      id: 2,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2022',
      skills: ['Cloud', 'Serverless', 'AWS'],
      category: 'cloud',
      image: '/certificates/aws-dev.jpg',
      url: 'https://aws.amazon.com/certification'
    },
    {
      id: 3,
      title: 'UI/UX Design Specialization',
      issuer: 'Google',
      date: '2021',
      skills: ['Figma', 'Wireframing', 'Prototyping'],
      category: 'design',
      image: '/certificates/google-ux.jpg',
      url: 'https://coursera.org/specializations/ui-ux'
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2020',
      skills: ['MERN Stack', 'REST APIs', 'MongoDB'],
      category: 'development',
      image: '/certificates/fcc-fullstack.jpg',
      url: 'https://freecodecamp.org/certification/fullstack'
    },
    {
      id: 5,
      title: 'Data Structures & Algorithms',
      issuer: 'University of California',
      date: '2019',
      skills: ['Algorithms', 'Problem Solving', 'Python'],
      category: 'computer-science',
      image: '/certificates/dsa-uc.jpg',
      url: 'https://extension.berkeley.edu/certificates/data-structures'
    },
    {
      id: 6,
      title: 'DevOps Engineering',
      issuer: 'Microsoft',
      date: '2022',
      skills: ['Azure', 'CI/CD', 'Docker'],
      category: 'devops',
      image: '/certificates/ms-devops.jpg',
      url: 'https://learn.microsoft.com/certifications/devops'
    }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesCategory = activeFilter === 'all' || cert.category === activeFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'computer-science', label: 'Computer Science' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-amber-400 mb-4"
        >
          My Certifications
        </motion.h1>
        <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Validated skills and knowledge through industry-recognized certifications
        </p>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-amber-600 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search certificates..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg bg-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-700"
                >
                  <div className="relative h-48">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <FaAward className="mr-1" />
                      Certified
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <FaCertificate className="text-amber-500 text-2xl mr-3 mt-1" />
                      <div>
                        <h2 className="text-xl font-bold text-amber-400">{certificate.title}</h2>
                        <p className="text-slate-400 text-sm">{certificate.issuer} • {certificate.date}</p>
                      </div>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm"
                    >
                      View credential <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-800 rounded-xl shadow-sm border border-slate-700">
              <FaSearch className="mx-auto text-slate-400 text-4xl mb-4" />
              <h3 className="text-lg font-medium text-amber-400">No certificates found</h3>
              <p className="text-slate-400 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">Certification Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '6+', label: 'Total Certifications' },
              { value: '4', label: 'Development Focused' },
              { value: '100%', label: 'Verified Credentials' },
              { value: '3', label: 'Industry Leaders' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center"
              >
                <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-amber-500 text-2xl" />
                </div>
                <p className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to Verify My Credentials?</h2>
          <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
            All certificates are verifiable through their respective issuing platforms
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}