import React from 'react'
import { fadeInUp, staggerChildren, zoomOut } from '@/app/animations';
import { motion } from 'framer-motion';

function About() {
    return (
        <section className=' my-8 text-slate-800 container mx-auto' id='about'>
            <motion.div
                initial="hidden"
                // animate="visible"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className='flex-col-reverse flex gap-4 md:gap-0 md:flex-row px-10'>
                <div className='w-full md:w-1/2'>
                    <motion.h1 variants={fadeInUp} className='text-xl md:text-3xl font-bold md:w-4/6 w-full mb-4 md:mb-8'> Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</motion.h1>
                    <motion.p variants={fadeInUp} className='text-sm md:text-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi possimus tenetur ipsa quo, harum saepe obcaecati vel asperiores aliquid unde alias! Quod modi doloribus maiores, provident, dolorum, ipsam placeat explicabo alias soluta ea illo iure optio doloremque culpa praesentium esse!
                    </motion.p>
                </div>
                <div className='w-full md:w-1/2 md:px-6'>
                    <motion.img variants={zoomOut} src="about.jpg" alt="" className='w-full h-[125px] md:h-[342px] object-cover' />
                </div>
            </motion.div>
        </section>
    )
}

export default About