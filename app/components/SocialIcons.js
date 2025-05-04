'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaFigma
} from 'react-icons/fa';

 const SocialIcons = () => (
  <div  className="flex gap-4">
    {[
      { icon: <FaFacebookF />, href: "https://www.facebook.com/mo.naeem.503/" },
      { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/linkedrealfalcon/" },
      { icon: <FaTwitter />, href: "https://x.com/Monaeem8Naeem" },
      // { icon: <FaGithub />, href: "https://github.com/GitRealFalcon" },
      // { icon: <FaFigma />, href: "#" },
    ].map((social, index) => (
      <motion.div 
        key={index}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link 
          href={social.href} 
          className="text-amber-400 hover:text-amber-500 transition-colors text-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      </motion.div>
    ))}
  </div>
);

export default SocialIcons