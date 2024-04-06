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
			{isOpen && (
				<div className='absolute top-[80px] left-0 flex flex-col gap-10 pt-20 items-center text-2xl w-full h-[calc(100vh-80px)] bg-background z-10'>
					<Link href='/' onClick={() => setIsOpen(!isOpen)}>
						Trang Chủ
					</Link>
					<Link href='/blog' onClick={() => setIsOpen(!isOpen)}>
						Blog
					</Link>
					<AuthLinks />
				</div>
			)}
		</>
	)
}
