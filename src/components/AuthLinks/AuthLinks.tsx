import Link from 'next/link'
import React from 'react'

export default function AuthLinks() {
	// temporary
	const status = 'not-authenticated'

	return (
		<>
			{status === 'not-authenticated' ? (
				<Link href='/login'>Đăng Nhập</Link>
			) : (
				<>
					<Link href='write'>Viết Bài</Link>
					<span className='cursor-pointer'>Đăng Xuất</span>
				</>
			)}
		</>
	)
}
