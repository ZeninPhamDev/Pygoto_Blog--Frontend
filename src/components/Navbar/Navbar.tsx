'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import AuthLinks from '@/components/AuthLinks/AuthLinks'
import { useState } from 'react'
import HamburgerMenu from '@/components/Navbar/HamburgerMenu'
import Social from '@/components/Social/Social'
import NavLinks from '@/components/Navbar/NavLinks'

export default function Navbar() {
	return (
		<nav className=''>
			<div className='container container-custom'>
				<div className='flex justify-between items-center h-20'>
					<div className='hidden xl:flex'>
						<Social />
					</div>
					<div className='flex-1 lg:text-center text-xl lg:text-2xl xl:text-3xl font-bold'>
						<Link href='/'>Pygoto Blog</Link>
					</div>

					<div className='flex flex-1 justify-end items-center'>
						<div className='mx-5 lg:mx-8'>
							<ModeToggle />
						</div>
						{/* Nav links */}
						<div className='whitespace-nowrap hidden md:flex justify-end items-center space-x-2 lg:space-x-8 md:text-base lg:text-lg font-semibold'>
							<NavLinks />
							<AuthLinks />
						</div>
						{/* Hamburger Menu */}
						<HamburgerMenu />
					</div>
				</div>
			</div>
		</nav>
	)
}
