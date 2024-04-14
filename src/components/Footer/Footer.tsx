import Social from '@/components/Social/Social'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
	return (
		<footer className='bg-accent'>
			<div className='container container-custom'>
				<div className='flex flex-col md:flex-row gap-12 items-center py-12'>
					<div className='md:flex-1 flex flex-col gap-5'>
						<div className='text-xl font-bold'>Pygoto Blog</div>
						<div className='footer-desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							qui deserunt unde expedita explicabo sint ducimus. Nihil, animi,
							corrupti neque totam fugit exercitationem debitis mollitia tempora
							deserunt incidunt vero nemo?
						</div>
						<div className='footer-social'>
							<Social />
						</div>
					</div>
					<div className='flex-1 flex gap-8 w-full justify-between md:justify-around'>
						<div className='footer-links-list'>
							<span className='links-list-title'>Links</span>
							<Link href='#!' className='footer-link'>
								Trang chủ
							</Link>
							<Link href='#!' className='footer-link'>
								Blog
							</Link>
							<Link href='#!' className='footer-link'>
								Login
							</Link>
						</div>
						<div className='footer-links-list'>
							<span className='links-list-title'>Links</span>
							<Link href='#!' className='footer-link'>
								Trang chủ
							</Link>
							<Link href='#!' className='footer-link'>
								Blog
							</Link>
							<Link href='#!' className='footer-link'>
								Login
							</Link>
						</div>
						<div className='footer-links-list'>
							<span className='links-list-title'>Links</span>
							<Link href='#!' className='footer-link'>
								Trang chủ
							</Link>
							<Link href='#!' className='footer-link'>
								Blog
							</Link>
							<Link href='#!' className='footer-link'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
