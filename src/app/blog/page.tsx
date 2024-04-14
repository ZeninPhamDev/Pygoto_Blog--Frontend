import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import React from 'react'

export default function BlogPage() {
	return (
		<div className='container container-custom'>
			<h1 className='page-title'>Blog</h1>
			<div className='page-content'>
				<CardList />
				<Menu />
			</div>
		</div>
	)
}
