import CardList from '@/components/CardList/CardList'
import CategoryList from '@/components/CategoryList/CategoryList'
import Featured from '@/components/Featured/Featured'
import Menu from '@/components/Menu/Menu'

export default function Home() {
	return (
		<main className=''>
			<div className='container container-custom'>
				<Featured />
				<CategoryList />
				<div className='page-content'>
					<CardList />
					<Menu />
				</div>
			</div>
		</main>
	)
}
