import Link from 'next/link'
import React from 'react'

export default function AuthLinks() {
	// temporary
	const status: string = 'authenticated'

	return (
		<div>
			{status === 'not-authenticated' ? (
				<Link href='/login' className='nav-link'>
					Đăng Nhập
				</Link>
			) : (
				<div className='flex gap-5 lg:gap-12'>
					<Link href='write' className='nav-link'>
						Viết Bài
					</Link>
					<Link href='#!' className='nav-link'>
						Đăng Xuất
					</Link>
				</div>
			)}
		</div>
	)
}
