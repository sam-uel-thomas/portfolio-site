import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavbarItem from './NavbarItem'

const navItems = [
    { link: '#projects', title: 'projects' },
    { link: '#about', title: 'about' },
    { link: '#contact', title: 'contact' },
]

const Navbar = () => {
    return (
        <div className='primary-navigation sticky top-0 z-50 flex flex-wrap items-center justify-between mx-auto px-6 sm:px-24 py-6 bg-[#0E0E0C]'>
            <div className="group flex items-center space-x-4">
                <Link href={"#landing"}>
                    <Image
                        src="/images/Icon.svg"
                        alt="logo"
                        width={60}
                        height={60}
                        className="transform transition-transform duration-700 group-hover:rotate-90"
                    />
                </Link>
                <div className="overflow-hidden md:max-w-0 group-hover:max-w-full transition-all duration-700">
                    <Link href={'#'} className="text-2xl font-sans font-bold whitespace-nowrap">
                        SAM THOMAS
                    </Link>
                </div>
            </div>
            <div className='menu hidden md:block w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                    {
                        navItems.map((item, index) => (
                            <li key={index}>
                                <NavbarItem href={item.link} title={item.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar