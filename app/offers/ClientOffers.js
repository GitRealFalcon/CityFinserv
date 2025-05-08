'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


export default function CertificatesPage() {

   const topSite = [
    {
      name:"Flipkart",
      logo:'/flipkart.png',
      link:"https://fktr.in/fd0943q",
      offer: "mobiles, fashion, electronics, home appliances, groceries, and more!"
    },
    {
      name:"Myntra",
      logo:'/myntra.png',
      link:"https://myntr.it/8BpEZ0E",
      offer: "Grab 40-80% Off on Top Brands"
    },
    {
      name:"Ajio",
      logo:'/ajio.png',
      link:"https://ajiio.in/al35fg4",
      offer: "Let the shopping spree begin! 40-80% Off Across Categories"
    },
    {
      name:"Shopsy",
      logo:'/shopsy.webp',
      link:"https://bitli.in/4zkEYeb",
      offer: "Let the shopping spree begin! 40-80% Off"
    },
    {
      name:"Nykaa",
      logo:'/nykaa.png',
      link:"https://bitli.in/ET7yXIx",
      offer: "Upto 50% Off Across Categories"
    },
   
   ]

   const topBrands = [
    {
      name:"wow",
      logo:'/wow.png',
      link:"https://bitli.in/xx6xyip",
      offer: "Get 15% Off sitewide | Use Code: WOW15"
    },
    {
      name:"Mamaearth",
      logo:'/mamaearth.avif',
      link:"https://bitli.in/mmqwtoU",
      offer: "Shop for Rs 999 And get Flat Rs 500 Cashback Use Code: FLAT500"
    },
    {
      name:"Dell",
      logo:'/dell.svg',
      link:"https://bitli.in/0zGGsy0",
      offer: "Explore Dell's latest computers & technology solutions"
    },
    {
      name:"Levis",
      logo:'/levis.avif',
      link:"https://bitli.in/nYkI727",
      offer: "Shop the latest collection of men's and women's clothing online at Levi's India!"
    },
    {
      name:"Nike",
      logo:'/nike.png',
      link:"https://bitli.in/4fc6C36",
      offer: "Amazing Discounts on Nike Website! Get Upto 50% Off."
    },
   
   ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-amber-400 mb-4"
        >
          Shopping Offers
        </motion.h1>
        <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-1 w-1/3 mx-auto mb-6 rounded-full" />
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
        Unbeatable deals daily shop smart, save big!
        </p>
      </section>
      <section className='pb-5'>
        <div className='text-center text-amber-400 text-2xl'>Top E-commerce Platforms</div>
        <div className='w-3/4 h-0.5 bg-gray-500 mx-auto my-5'></div>
        <div className='md:w-3/4 flex flex-wrap gap-2 mx-auto justify-center'>
          {topSite.map((site, index)=>(
            <div className='w-44 md:w-52 h-64 bg-slate-600 rounded-lg  p-3 relative' key={index}>
              <div className='w-full h-1/5 flex items-center px-8 mb-2 '>
              <Image src={site.logo} height={500} width={500} alt={site.name} className='rounded-md p-1'></Image>
              </div>
              <div className=' text-slate-200'>
                {site.offer}
              </div>

              <div className='absolute bottom-3 w-full left-0 flex justify-center'>
             <a href={site.link} target="_blank" > <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 w-fit text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 "
            >
              Shop Now
            </motion.div></a></div>
            </div>
          ))}
        </div>
      </section>
      <section className='pb-5'>
        <div className='text-center text-amber-400 text-2xl'>Top E-commerce Brands</div>
        <div className='w-3/4 h-0.5 bg-gray-500 mx-auto my-5'></div>
        <div className='md:w-3/4 flex flex-wrap gap-2 mx-auto justify-center'>
          {topBrands.map((site, index)=>(
            <div className='w-44 md:w-52 h-64 bg-slate-600 rounded-lg  p-3 relative' key={index}>
              <div className='w-full h-1/5 flex items-center px-8 mb-2 '>
              <Image src={site.logo} height={500} width={500} alt={site.name} className='rounded-md p-1'></Image>
              </div>
              <div className=' text-slate-200'>
                {site.offer}
              </div>

              <div className='absolute bottom-3 w-full left-0 flex justify-center'>
             <a href={site.link} target="_blank" > <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 w-fit text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 "
            >
              Shop Now
            </motion.div></a></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}