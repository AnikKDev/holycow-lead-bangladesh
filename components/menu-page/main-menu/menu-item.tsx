'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import itemImg from '@/public/menu-item.jpg'
import { MenuItemType } from '@/redux/slices/menuPageSlice/menuPageSlice'

import { apiUrl } from '@/lib/constatns'
import { formatPrice } from '@/lib/utils'

import { MenuItemModal } from './menu-item-modal'

interface IMenuItem {
	item: MenuItemType
	isRestaurant?: boolean
}

const MenuItem = ({ item, isRestaurant }: IMenuItem) => {
	const [showModal, setShowModal] = useState(false)
	const router = useRouter()
	const [selectedItem, setSelectedItem] = useState<MenuItemType>(null)
	return (
		<>
			<div
				tabIndex={0}
				onClick={() => {
					if (isRestaurant) {
						return
					}
					setSelectedItem(item)
					setShowModal(!showModal)
				}}
				className='cursor-pointer overflow-hidden rounded-md border border-border/75 bg-white transition hover:border-border/100 hover:shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16)]'
			>
				<div className='grid grid-cols-16 justify-between gap-2'>
					<div className='col-start-1 col-end-12 flex flex-col gap-2 py-3 pl-2'>
						<h2 className='line-clamp-1 text-base font-medium uppercase text-foreground'>
							{item?.item_name}
						</h2>
						<p className='line-clamp-2 text-sm font-normal text-[#767676] text-foreground'>
							{item?.description}
						</p>
						{!isRestaurant && (
							<p className='text-sm font-bold text-foreground/90'>
								{formatPrice(item.price)}
							</p>
						)}
					</div>
					<div className='relative col-start-12 col-end-[17]'>
						<Image
							src={item.image ? `${apiUrl}${item.image}` : itemImg}
							className='h-full w-full object-cover'
							alt='Menu Item'
							height={125}
							width={140}
						/>
					</div>
				</div>
			</div>
			{!isRestaurant && selectedItem && (
				<MenuItemModal
					item={selectedItem}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			)}
		</>
	)
}

export default MenuItem
