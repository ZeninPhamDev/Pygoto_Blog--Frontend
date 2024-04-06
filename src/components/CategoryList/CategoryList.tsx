import Image from 'next/image'
import Link from 'next/link'

export default function CategoryList() {
	return (
		<section className='mt-16 mb-8'>
			<h2 className='section-title '>Danh Mục</h2>
			<div className='flex flex-wrap gap-5 justify-between mt-8'>
				<Link href='/blog?cat=python' className='category-item  bg-red-200'>
					<Image
						src='/python.png'
						alt='python'
						width={32}
						height={32}
						className='category-image'
					/>
					Python
				</Link>
				<Link
					href='/blog?cat=web-development'
					className='category-item bg-lime-200'
				>
					<Image
						src='/web-development.jpg'
						alt='web-development'
						width={32}
						height={32}
						className='category-image'
					/>
					Web Development
				</Link>
				<Link
					href='/blog?cat=machine-learning'
					className='category-item bg-sky-200'
				>
					<Image
						src='/machine-learning.png'
						alt='machine-learning'
						width={32}
						height={32}
						className='category-image'
					/>
					Machine Learning
				</Link>
			</div>
		</section>
	)
}
