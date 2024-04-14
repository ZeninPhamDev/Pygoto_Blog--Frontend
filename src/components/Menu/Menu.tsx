import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
	return (
		<div className='hidden md:flex flex-col flex-auto max-w-[30%]'>
			{/* hot posts */}
			<div className='hot-posts'>
				<h2 className='section-subtitle'>Bài viết hot?</h2>
				<h2 className='menu section-title'>Đọc nhiều</h2>
				<div className='flex flex-col gap-5 my-8'>
					<Link href='#!' className='menu-item'>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
					<Link href='#!' className='menu-item'>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
					<Link href='#!' className='menu-item'>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
			{/* tags */}
			<div className='tags'>
				<h2 className='section-subtitle'>Tìm kiếm theo tag</h2>
				<h2 className='menu section-title'>Thẻ tags</h2>
				<div className='tag-list flex flex-wrap gap-3'>
					<Link href='#!' className='tag'>
						Hướng dẫn
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
					<Link href='#!' className='tag'>
						Kiến thức
					</Link>
				</div>
			</div>
			{/* recommended posts */}
			<div className='recommended-posts'>
				<h2 className='section-subtitle'>Bài viết khuyến nghị</h2>
				<h2 className='menu section-title'>Nên đọc</h2>
				<div className='flex flex-col gap-5 my-8'>
					<Link href='#!' className='menu-item'>
						<div className='menu-item-media'>
							<Image src='/p1.jpeg' alt='' fill className='menu-item-image' />
						</div>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
					<Link href='#!' className='menu-item'>
						<div className='menu-item-media'>
							<Image src='/p1.jpeg' alt='' fill className='menu-item-image' />
						</div>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
					<Link href='#!' className='menu-item'>
						<div className='menu-item-media'>
							<Image src='/p1.jpeg' alt='' fill className='menu-item-image' />
						</div>
						<div className='media-item-content'>
							<span className='menu-item-category'>Python</span>
							<h3 className='menu-item-title'>Tiêu đề</h3>
							<div className='menu-item-info'>
								<span className='menu-item-author'>Zenin Pham</span>
								<span className='menu-item-date'> - 04.08.2024</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
