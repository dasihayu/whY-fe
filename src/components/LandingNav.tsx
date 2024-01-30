import React from 'react'
import whY from '@/assets/img/whY.png'
import { Link } from '@chakra-ui/react'

function LandingNav() {
  return (
    <div className='bg-whyS flex justify-between items-center px-4 py-4 sticky top-0 z-[9999]'>
      <div>
        <img src={whY} className='w-12' alt="logo-why" />
      </div>
      <div className='text-whyP font-semibold'>
        <ul className='flex flex-row gap-6'>
          <li><Link href='#'>Home</Link></li>
          <li><Link href='#about'>About whY</Link></li>
          <li><Link href='#testi'>Testimoni</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LandingNav