import Comments from '@/components/Comments/Comments'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import React from 'react'

export default function PostPage() {
	return (
		<div className='container container-custom'>
			<div className='post-header'>
				<div className='post-info'>
					<div className='full post-title'>
						Tiêu đề bài viết dài Tiêu đề bài viết dài Tiêu đề bài viết dài
					</div>
					<div className='user'>
						<div className='user-avatar'>
							<Image src='/p1.jpeg' alt='' fill className='user-image' />
						</div>
						<div className='user-info'>
							<span className='user-name'>Zenin Pham</span>
							<span className='date'>09.04.2024</span>
						</div>
					</div>
				</div>
				<div className='post-media'>
					<Image src='/p1.jpeg' alt='' fill />
				</div>
			</div>
			<div className='page-content'>
				<div className='post-content'>
					<div className='post-desc'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
							alias doloribus asperiores aperiam? Necessitatibus voluptates
							maxime accusantium corrupti quisquam reiciendis, nesciunt corporis
							velit iusto sunt deserunt amet est accusamus qui?
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
							alias doloribus asperiores aperiam? Necessitatibus voluptates
							maxime accusantium corrupti quisquam reiciendis, nesciunt corporis
							velit iusto sunt deserunt amet est accusamus qui?
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
							alias doloribus asperiores aperiam? Necessitatibus voluptates
							maxime accusantium corrupti quisquam reiciendis, nesciunt corporis
							velit iusto sunt deserunt amet est accusamus qui?
						</p>
					</div>
					<div className='post-comment'>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	)
}
