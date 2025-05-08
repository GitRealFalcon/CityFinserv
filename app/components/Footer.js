import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-slate-800 flex-col items-center text-white px-10 pt-8 pb-3'>
      <div className='flex gap-5 justify-center'><Link href="/about"><p>About</p></Link><Link href="/contact"><p>Contact Us</p></Link></div>
      <div className='text-gray-400 flex justify-center mt-7'>&copy; CityFinserv.All rights reserved</div> 
    </div>
  )
}

export default Footer
