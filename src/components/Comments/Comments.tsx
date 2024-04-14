import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const status = 'authenticated'

export default function Comments() {
	return (
		<div>
			<h2 className='section-title'>Bình luận</h2>
			{status === 'authenticated' ? (
				<div>
					<div className='flex flex-col gap-5'>
						<textarea
							placeholder='Viết bình luận...'
							id=''
							cols={30}
							rows={10}
							className='comment-input'
						></textarea>
						<Button className='btn'>Gửi</Button>
					</div>
					<div className='comment-list flex flex-col gap-12 mt-16'>
						<div className='comment flex flex-col gap-5'>
							<div className='user'>
								<div className='user-avatar'>
									<Image src='/p1.jpeg' alt='' fill className='user-image' />
								</div>
								<div className='user-info'>
									<span className='user-name'>Zenin Pham</span>
									<span className='date'>09.04.2024</span>
								</div>
							</div>
							<p className='font-extralight'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam nisi commodi, in maiores consequatur ratione
								voluptatum illum nemo numquam doloremque. Sequi natus amet
								facilis vitae at deleniti consectetur exercitationem
								perspiciatis!
							</p>
						</div>
						<div className='comment flex flex-col gap-5'>
							<div className='user'>
								<div className='user-avatar'>
									<Image src='/p1.jpeg' alt='' fill className='user-image' />
								</div>
								<div className='user-info'>
									<span className='user-name'>Zenin Pham</span>
									<span className='date'>09.04.2024</span>
								</div>
							</div>
							<p className='font-extralight'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam nisi commodi, in maiores consequatur ratione
								voluptatum illum nemo numquam doloremque. Sequi natus amet
								facilis vitae at deleniti consectetur exercitationem
								perspiciatis!
							</p>
						</div>
						<div className='comment flex flex-col gap-5'>
							<div className='user'>
								<div className='user-avatar'>
									<Image src='/p1.jpeg' alt='' fill className='user-image' />
								</div>
								<div className='user-info'>
									<span className='user-name'>Zenin Pham</span>
									<span className='date'>09.04.2024</span>
								</div>
							</div>
							<p className='font-extralight'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam nisi commodi, in maiores consequatur ratione
								voluptatum illum nemo numquam doloremque. Sequi natus amet
								facilis vitae at deleniti consectetur exercitationem
								perspiciatis!
							</p>
						</div>
					</div>
				</div>
			) : (
				<div>
					<Link href='/login' className='text-primary hover:text-foreground'>
						Đăng nhập để bình luận
					</Link>
				</div>
			)}
		</div>
	)
}
