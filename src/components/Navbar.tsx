import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-16 z-10 absolute hidden md:flex items-center justify-center gap-20 bg-transparent font-young-serif'>
        <Link href={'/speakers'}>
            <p className='text-white'>Speakers</p>
        </Link>
        <Link href={'/events'}>
            <p className='text-white'>Events</p>
        </Link>
        <Link href={'/'}>
            <Image src='/images/logo.png' alt="logo" width={100} height={100} />
        </Link>
        <Link href={'/teams'}>
            <p className='text-white'>Teams</p>
        </Link>
        <Link href={'/gallery'}>
            <p className='text-white'>Gallery</p>
        </Link>
    </div>
  )
}

export default Navbar