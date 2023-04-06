import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { netlify } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SiNetlify, SiGithub } from 'react-icons/si';

const ProjectCard = ({
   index,
   name,
   image,
   description,
   tags,
   source_code_link,
   deploy_project_link
}) => {
   return (
      <Tilt
         className='sm:w-[360px] w-full'
         options={{
            max: 45,
            scale: 1,
            speed: 450
         }}
      >
         <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-2xl shadow-card'
         >
            <div className='bg-tertiary p-5 rounded-2xl min-h-[280px]'>
               <div className='relative w-full h-[230px]'>
                  <img
                     src={image}
                     alt={name}
                     className='w-full h-5/6 object-cover rounded-xl'
                  />

                  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                     <div
                        onClick={() => window.open(source_code_link, '_blank')}
                        className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer mr-2'
                     >
                        {/* <img
                           src={github}
                           alt='github'
                           className='w-3/4 h-3/4 object-contain'
                        /> */}
                        <SiGithub className='w-4/6 h-4/6 object-contain text-white hover:text-purple transition-all duration-300' />
                     </div>
                     <div
                        onClick={() =>
                           window.open(deploy_project_link, '_blank')
                        }
                        className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
                     >
                        {/* <img
                           src={netlify}
                           alt='netlify'
                           className='w-3/4 h-3/4 object-contain'
                        /> */}
                        <SiNetlify className='w-4/6 h-4/6 object-contain text-green hover:text-purple transition-all duration-300' />
                     </div>
                  </div>
               </div>

               <div className='mt-5'>
                  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                  <p className='mt-2 text-secondary text-[14px] text-justify'>
                     {description}
                  </p>
               </div>

               <div className='mt-4 flex flex-wrap gap-2'>
                  {tags.map((tag) => (
                     <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                     </p>
                  ))}
               </div>
            </div>
         </motion.div>
      </Tilt>
   );
};

const Works = () => {
   return (
      <>
         <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Мои работы</p>
            <h2 className={styles.sectionHeadText}>Проекты</h2>
         </motion.div>

         <div className='w-full flex'>
            <motion.p
               variants={fadeIn('', '', 0.1, 1)}
               className='text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
               Следующие проекты демонстрируют мои навыки и опыт благодаря
               реальным примерам моей работы. Каждый проект кратко описан со
               ссылками на репозитории кода и живыми демо-версиями в нем. Это
               отражает мою способность решать сложные проблемы, работать с
               различными технологиями и эффективно управлять проектами.
            </motion.p>
         </div>

         <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
               <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
               />
            ))}
         </div>
      </>
   );
};

export default SectionWrapper(Works, 'works');
