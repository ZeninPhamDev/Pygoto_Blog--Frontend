import Image from 'next/image'
import Link from 'next/link'

interface IProps {
	posts: IPost[]
}

export default function Card(props: IProps) {
	const { posts } = props
	console.log('check props: ', posts)

	return (
		<>
			{posts.map(post => (
				<div key={post.id}>
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
								<h3 className='post-title'>{post.title}</h3>
							</Link>
							<p className='post-excerpt'>{post.excerpt}</p>
							<Link href='/' className='post-link'>
								Read more &raquo;
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
