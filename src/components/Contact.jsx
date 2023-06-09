import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
   const formRef = useRef();
   const [form, setForm] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
         ...form,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
         .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
               from_name: form.name,
               to_name: 'Алексей Соловьев',
               from_email: form.email,
               to_email: 'alexsolov766@gmail.com',
               message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
         )
         .then(
            () => {
               setLoading(false);
               alert('Благодарю вас. Я свяжусь с вами как можно скорее.');

               setForm({
                  name: '',
                  email: '',
                  message: ''
               });
            },
            (error) => {
               setLoading(false);
               console.error(error);

               alert('Что-то пошло не так. Пожалуйста, попробуйте снова.');
            }
         );
   };

   return (
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
         <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
         >
            <p className={styles.sectionSubText}>Остались вопросы?</p>
            <h3 className={styles.sectionHeadText}>Связаться</h3>

            <form
               ref={formRef}
               onSubmit={handleSubmit}
               className='mt-12 flex flex-col gap-8'
            >
               <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Имя</span>
                  <input
                     type='text'
                     name='name'
                     value={form.name}
                     onChange={handleChange}
                     placeholder='Введите имя'
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                  />
               </label>
               <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>
                     Электронная почта
                  </span>
                  <input
                     type='email'
                     name='email'
                     value={form.email}
                     onChange={handleChange}
                     placeholder='Введите электронную почту'
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                  />
               </label>
               <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>
                     Сообщение
                  </span>
                  <textarea
                     rows='7'
                     name='message'
                     value={form.message}
                     onChange={handleChange}
                     placeholder='Введите сообщение'
                     className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                  />
               </label>

               <button
                  type='submit'
                  className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
               >
                  {loading ? 'Отправляется...' : 'Отправить'}
               </button>
            </form>
         </motion.div>

         <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className='xl:flex-1 xl:h-auto lg:h-[950px] md:h-[650px] h-[410px]'
         >
            <EarthCanvas />
         </motion.div>
      </div>
   );
};

export default SectionWrapper(Contact, 'contact');
