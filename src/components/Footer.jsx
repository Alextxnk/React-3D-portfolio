import React from 'react';

import { logo } from '../assets';

import { FaTelegram, FaGithub, FaVk, FaInstagram } from 'react-icons/fa';

const Footer = () => {
   const date = new Date();
   const currentYear = date.getFullYear();

   return (
      <footer className='bg-black-100 py-9'>
         <div className='container mx-auto max-w-5xl'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
               <div className='flex space-x-6 items-center justify-center'>
                  <a
                     className='text-purple hover:text-white text-3xl transition-all duration-300'
                     onClick={() =>
                        window.open('https://github.com/Alextxnk/', '_blank')
                     }
                  >
                     <FaGithub />
                  </a>
                  <a
                     className='text-purple hover:text-white text-3xl transition-all duration-300'
                     onClick={() =>
                        window.open(
                           'https://www.instagram.com/alextxnk/',
                           '_blank'
                        )
                     }
                  >
                     <FaInstagram />
                  </a>
                  <a
                     className='text-purple hover:text-white text-3xl transition-all duration-300'
                     onClick={() =>
                        window.open(
                           'https://vk.com/alextxnk',
                           '_blank'
                        )
                     }
                  >
                     <FaVk />
                  </a>
                  <a
                     className='text-purple hover:text-white text-3xl transition-all duration-300'
                     onClick={() =>
                        window.open(
                           'https://t.me/alextxnk',
                           '_blank'
                        )
                     }
                  >
                     <FaTelegram />
                  </a>
               </div>

               <div className='mx-auto'>
                  <img
                     src={logo}
                     alt='logo'
                     className='w-28 h-9 object-contain'
                  />
               </div>

               <p className='text-secondary'>
                  &copy; {currentYear} Alexey Solovyev. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
