import Link from 'next/link'
import { links } from './AppLinks'
import { FaChevronDown } from 'react-icons/fa6'

const NavLinks: React.FC = () => {
	return (
		<>
			{links.map(link => (
				<div key={link.name}>
					<div className='px-3 text-left md:cursor-pointer group'>
						<div className='flex items-center space-x-2'>
							<Link
								href={link.href}
								className='py-3 md:py-8 hover:text-primary block'
							>
								{link.name}
							</Link>
							{link.subMenu && (
								<FaChevronDown
									size={14}
									className='hidden md:block group-hover:rotate-180'
								/>
							)}
						</div>
						{link.subMenu && (
							<div>
								<div className='absolute top-20 hidden group-hover:md:block hover:md:block z-50'>
									<div className='py-3'>
										<div className='h-4 w-4 absolute left-3 mt-1 bg-accent rotate-45'></div>
									</div>
									<div className='bg-accent p-3.5'>
										{link.subLinks.map(subLink => (
											<div key={subLink.category}>
												<Link
													href={subLink.href}
													className='text-base font-normal py-2.5 hover:text-primary block'
												>
													{subLink.category}
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Mobile Menu */}
					{link.subMenu && (
						<div className='md:hidden'>
							{link.subLinks.map(subLink => (
								<div key={subLink.category}>
									<Link
										href={subLink.href}
										className='py-2 pl-7 pr-5 md:pr-0 hover:text-primary block'
									>
										{subLink.category}
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</>
	)
}

export default NavLinks
