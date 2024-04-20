'use client'

import Card from '@/components/Card/Card'
import Pagination from '@/components/PaginationHome/PaginationHome'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function CardList() {
	const { data, error, isLoading } = useSWR(
		'http://127.0.0.1:8000/api',
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false
		}
	)

	if (error) return 'An error has occurred.'
	if (isLoading) return 'Loading...'

	console.log('check data: ', data)

	return (
		<section className='flex-auto w-[70%]'>
			<h2 className='section-title'>Bài viết gần đây</h2>
			<div className='posts'>
				<Card posts={data} />
			</div>
			<Pagination />
		</section>
	)
}
