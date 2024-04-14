import Card from '@/components/Card/Card'
import Pagination from '@/components/PaginationHome/PaginationHome'
import React from 'react'

export default function CardList() {
	return (
		<section className='flex-auto w-[70%]'>
			<h2 className='section-title'>Bài viết gần đây</h2>
			<div className='posts'>
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</section>
	)
}
