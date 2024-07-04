'use client'
import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Fetures from '@/components/Fetures'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Portfolio from '@/components/Portfolio'
import Count from '@/components/Count'
import Testimoni from '@/components/Testimoni'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import { Button } from '@mantine/core'

function page() {
    return (
        <div className='w-full h-[200vh] bg-slate-600'>
            <Contact />
        </div>
    )
}

export default page