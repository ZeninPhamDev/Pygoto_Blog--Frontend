import Image from 'next/image'

export default function Social() {
	return (
		<div className='flex flex-1 space-x-2'>
			<Image src='/youtube.png' alt='youtube' width={32} height={32} />
			<Image src='/facebook.png' alt='facebook' width={32} height={32} />
			<Image src='/instagram.png' alt='instagram' width={32} height={32} />
		</div>
	)
}
