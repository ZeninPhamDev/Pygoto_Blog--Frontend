interface SubLink {
	category: string
	href: string
}

interface Link {
	name: string
	href: string
	subMenu: boolean
	subLinks: SubLink[]
}

export const links: Link[] = [
	{
		name: 'Home',
		href: '/',
		subMenu: false,
		subLinks: [{ category: 'null', href: 'null' }]
	},
	{
		name: 'Blog',
		href: '/blog',
		subMenu: false,
		subLinks: [{ category: 'null', href: 'null' }]
	},
	{
		name: 'Danh mục',
		href: '#category-list',
		subMenu: true,
		subLinks: [
			{ category: 'Python', href: '/#!' },
			{ category: 'Web Development', href: '/#!' },
			{ category: 'Machine Learning', href: '/#!' }
		]
	}
]
