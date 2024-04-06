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

export default function Navbar() {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<nav>
			<div className='container container-custom'>
				<div className='flex justify-between items-center h-20'>
					{/* social */}
					<div className='hidden lg:flex flex-1 space-x-2 '>
						<Image src='/youtube.png' alt='youtube' width={24} height={24} />
						<Image src='/facebook.png' alt='facebook' width={24} height={24} />
						<Image
							src='/instagram.png'
							alt='instagram'
							width={24}
							height={24}
						/>
					</div>
					<div className='flex-1 lg:text-center text-xl md:text-2xl lg:text-3xl font-bold'>
						<Link href='/'>Pygoto Blog</Link>
					</div>

					<div className='flex flex-1 justify-end items-center'>
						<div className='mx-5 lg:mx-8'>
							<ModeToggle />
						</div>
						{/* Nav links */}
						<div className='whitespace-nowrap hidden md:flex justify-end items-center space-x-5 lg:space-x-8 md:text-base lg:text-lg font-semibold'>
							<Link href='/'>Trang Chủ</Link>
							<Link href='/blog'>Blog</Link>
							<DropdownMenu>
								<DropdownMenuTrigger className='flex items-center space-x-1'>
									<span>Danh Mục</span>
									<IoMdArrowDropdown />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										<Link href='/python'>Python</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href='/web-developement'>Web Developement</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href='/machine-learning'>Machine Learning</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
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
