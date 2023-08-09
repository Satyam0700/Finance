import Audited from '@/components/Audited'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Support from '@/components/Support'
import Token from '@/components/Token'
import WhatDo from '@/components/WhatDo'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='bg-[#00040f] sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <Audited />
      <div className='bg-[#00040f] sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Token />
          <WhatDo />
          <Support />
          <Footer />
        </div>
      </div>
    </div>
  )
}
