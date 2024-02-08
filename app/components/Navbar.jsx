import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex flex-wrap items-center justify-between mx-auto px-6 sm:px-24 py-6'>
            <Link href={"/"}>
                <Image
                    src="/images/Icon.svg"
                    alt="logo"
                    width={60}
                    height={60}
                    className="transform transition-transform duration-500 hover:rotate-90"
                />
            </Link>
            <div className='menu hidden md:block w-auto' id='navbar'>
                <ul className='flex flex-row'>
                    <li className='mx-3'><Link href={"#"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0'>about</Link></li>
                    <li className='mx-3'><Link href={"#"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0'>contact</Link></li>
                    <li className='mx-3'><Link href={"#"} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0'>projects</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar