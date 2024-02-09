import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavbarItem from './NavbarItem'

const navItems = [
    { link: '#', title: 'about' },
    { link: '#', title: 'contact' },
    { link: '#', title: 'projects' },
]

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