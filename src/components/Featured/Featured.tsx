import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Featured() {
	return (
		<section>
			<div>
				<h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold capitalize'>
					Blog Kiến Thức Về Python
				</h1>
			</div>
			<div className='featured post'>
				<div className='featured post-media'>
					<Image
						className='featured post-image'
						src='/p1.jpeg'
						alt='featured-iamge'
						fill
					/>
				</div>
				<div className='featured post-content '>
					<Link href='/'>
						<h3 className='featured post-title'>Tiêu đề bài Featured</h3>
					</Link>
					<p className='post-excerpt '>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
						fugiat eum asperiores aspernatur cupiditate delectus maxime placeat
						alias quas harum ipsa quos magni! A laudantium odit reprehenderit
						exercitationem maiores impedit.
					</p>
					<Button className='btn' variant='outline'>
						Read more
					</Button>
				</div>
			</div>
		</section>
	)
}
