'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function WritePage() {
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState('')

	return (
		<div className='container container-custom'>
			<div className='flex flex-col'>
				<Button className='btn publish'>Đăng bài</Button>
				<input type='text' placeholder='Tiêu đề' className='input-title' />
			</div>
			<div className='editor'>
				<button onClick={() => setIsOpen(!isOpen)} className='plus-btn'>
					<Image src='/plus.png' alt='plus' width={16} height={16} />
				</button>
				{isOpen && (
					<div className='add'>
						<button className='add-btn'>
							<Image src='/image.png' alt='plus' width={16} height={16} />
						</button>
						<button className='add-btn'>
							<Image src='/external.png' alt='plus' width={16} height={16} />
						</button>
						<button className='add-btn'>
							<Image src='/video.png' alt='plus' width={16} height={16} />
						</button>
					</div>
				)}
				<ReactQuill
					theme='bubble'
					value={value}
					onChange={setValue}
					placeholder='Chia sẻ của bạn...'
					className='text-area'
				/>
			</div>
		</div>
	)
}
