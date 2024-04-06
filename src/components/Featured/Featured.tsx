import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Featured() {
	return (
		<section className='mt-8'>
			<div>
				<h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold capitalize'>
					Blog Kiến Thức Về Python
				</h1>
			</div>
			<div className='lg:flex items-center gap-10 mt-16'>
				<div className='flex-1 h-[300px] md:h-[500px] relative'>
					<Image className='object-cover' src='/p1.jpeg' alt='featured' fill />
				</div>
				<div className='flex-1 flex flex-col gap-5'>
					<h3 className='post-title'>Tiêu đề bài Featured</h3>
					<p className='post-excerpt '>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
						fugiat eum asperiores aspernatur cupiditate delectus maxime placeat
						alias quas harum ipsa quos magni! A laudantium odit reprehenderit
						exercitationem maiores impedit.
					</p>
					<Button className='btn' variant='outline'>
						Đọc Thêm
					</Button>
				</div>
			</div>
		</section>
	)
}
