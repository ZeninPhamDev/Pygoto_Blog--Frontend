import Image from 'next/image'
import Link from 'next/link'

export default function Card() {
	return (
		<div className='wrapper'>
			<div className='post'>
				<div className='post-media'>
					<Image className='post-image' src='/p1.jpeg' alt='' fill />
				</div>

				<div className='post-content'>
					<div className='post-info'>
						<span className='post-date'>04.08.2024 - </span>
						<Link href='#!' className='post-tag'>
							Python
						</Link>
					</div>
					<Link href='/'>
						<h3 className='post-title'>Tiêu đề bài</h3>
					</Link>
					<p className='post-excerpt'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
						fugiat eum asperiores aspernatur cupiditate delectus maxime placeat
						alias quas harum ipsa quos magni! A laudantium odit reprehenderit
						exercitationem maiores impedit.
					</p>
					<Link href='/' className='post-link'>
						Read more &raquo;
					</Link>
				</div>
			</div>
		</div>
	)
}
