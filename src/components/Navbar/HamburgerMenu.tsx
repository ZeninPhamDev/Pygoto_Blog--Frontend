'use client'
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import AuthLinks from '@/components/AuthLinks/AuthLinks'
import NavLinks from '@/components/Navbar/NavLinks'

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<button
				className='md:hidden text-3xl font-bold'
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
			</button>
			<div
				className={`absolute duration-300 top-[80px] md:hidden flex flex-col gap-10 pt-20 pl-5 text-2xl w-full h-[calc(100vh-80px)] bg-background z-10 ${
					isOpen ? 'left-0' : 'left-[-100%]'
				}`}
			>
				<div onClick={() => setIsOpen(!isOpen)}>
					<NavLinks />
				</div>
				<div onClick={() => setIsOpen(!isOpen)}>
					<AuthLinks />
				</div>
			</div>
		</>
	)
}
