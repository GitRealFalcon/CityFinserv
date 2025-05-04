// app/contact/page.tsx

'use client';



import { motion } from 'framer-motion';
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ClientContact() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        subject: formData.subject,
        message: formData.message

      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    console.log(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300">
            We'd love to hear from you. Let's get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <a href="mailto:cityconnectmbd@gmail.com" className="flex items-start space-x-4">
                  <MdEmail className="w-6 h-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-amber-400">Email</h3>
                    <p className="text-slate-300">cityconnectmbd@gmail.com</p>
                  </div>
                </a>

                <a className="flex items-start space-x-4" href="tel:+91 9760440055">
                  <MdPhone className="w-6 h-6 text-amber-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-amber-400">Phone</h3>
                    <p className="text-slate-300">+91 9760440055</p>
                  </div>
                </a>


                <div className="flex items-start space-x-4">
                  <MdLocationPin className="w-12 h-12 text-amber-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-amber-400">Address</h3>
                    <p className="text-slate-300">Near Kirishna Farm House Azad Nagar Harthala Railway Station Moradabad (UP) 244001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-amber-400 p-8 rounded-2xl shadow-lg text-slate-900">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Friday: 9am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-900 p-4 text-slate-100 border border-slate-600 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-900 p-4 text-slate-100 border border-slate-600 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-amber-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-900 p-4 text-slate-100 border border-slate-600 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md bg-slate-900 text-slate-100 border border-slate-600 focus:border-amber-500 focus:ring-amber-500 p-4"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-slate-900 py-3 px-4 rounded-md hover:bg-amber-700 transition-colors duration-200 font-medium flex items-center justify-center"
              >
                Send Message
              </button>
            </form>

            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-amber-900 text-amber-200 rounded-md flex items-center space-x-2"
              >
                <FaCheckCircle className="w-5 h-5 text-amber-400" />
                <span>Message sent successfully!</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}