import { IconBuildingStore, IconCalendarWeek, IconChartBar, IconCoins, IconPaint } from '@tabler/icons-react'
import React from 'react'
import { fadeInUp, scaleIn, staggerChildren, toLeft } from '@/app/animations';
import { motion } from 'framer-motion';


function Hero() {
    return (
        <section className=' bg-cover bg-fixed  relative  text-white' style={{ backgroundImage: 'url(hero-bg.jpg)' }} id='home' >
            <div className='bg-black opacity-60 w-full h-full absolute' />
            <div className='relative min-h-screen w-full h-full py-32 flex flex-col justify-center items-center'>
                <div className='text-center'>
                    <motion.h1 variants={scaleIn} initial='hidden' animate='visible' className='text-3xl md:text-6xl md:w-[525px] font-extrabold'>Portfolio KitaDigital<span className='text-yellow-400'></span></motion.h1>
                    <motion.p variants={scaleIn} initial='hidden' animate='visible' className='mt-4 text-xl md:text-2xl'>One Example of KitaDigital</motion.p>
                </div>
                <motion.div variants={staggerChildren} initial='hidden' animate='visible' className='flex flex-wrap mt-8 justify-center items-center gap-2 md:gap-8 container text-center '>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconBuildingStore color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>

                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconChartBar
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Dolor Sitema
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconCalendarWeek
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />

                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconPaint
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                    <motion.div variants={toLeft} className='border-2 border-white/40 py-3 px-6 md:py-6 md:px-16 hover:border-yellow-400 '>
                        <IconCoins
                            color='yellow' className='mx-auto w-4 h-4 md:w-8 md:h-8' />
                        <h2 className='text-sm md:text-xl font-bold'>
                            Lorem Ipsum
                        </h2>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero