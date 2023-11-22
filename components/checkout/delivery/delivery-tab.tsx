import { useState } from 'react'
import { motion } from 'framer-motion'

let tabs = [
	{ id: 'delivery', label: 'Delivery' },
	{ id: 'collection', label: 'Collection' },
]

function DeliveryTab() {
	let [activeTab, setActiveTab] = useState(tabs[0].id)

	return (
		<div className='flex items-center justify-center'>
			<div className='flex w-max flex-row items-center space-x-1 rounded-full bg-[#E9E2D2] p-1.5 '>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`${
							activeTab === tab.id ? '' : 'hover:text-black'
						} relative rounded-full px-10 py-1.5 text-[15px] font-medium text-foreground outline-black transition focus-visible:outline-4`}
						style={{
							WebkitTapHighlightColor: 'transparent',
						}}
					>
						{activeTab === tab.id && (
							<motion.span
								layoutId='bubble'
								className='absolute inset-0 z-10 bg-foreground mix-blend-difference'
								style={{ borderRadius: 9999 }}
								transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
							/>
						)}
						{tab.label}
					</button>
				))}
			</div>
		</div>
	)
}
export default DeliveryTab
