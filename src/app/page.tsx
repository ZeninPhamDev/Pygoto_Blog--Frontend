import CardList from '@/components/CardList/CardList'
import CategoryList from '@/components/CategoryList/CategoryList'
import Featured from '@/components/Featured/Featured'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'

export default function Home() {
	return (
		<main className=''>
			<div className='container container-custom'>
				<Featured />
				<CategoryList />
				<div className='content'>
					<CardList />
					<Menu />
				</div>
			</div>
		</main>
	)
}
