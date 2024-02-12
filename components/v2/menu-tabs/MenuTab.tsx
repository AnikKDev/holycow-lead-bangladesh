'use client'

import {
	dessertsSection,
	FoodSection,
	softLassiSection,
	specialOffer,
	spiritsSection,
	tailsSection,
	winesSection,
} from '@/lib/restaurantData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import FoodCard from '../shared/card/FoodCard'
import MenuFoodList from '../shared/menu/text-type/MenuFoodList'
import MenuSection from '../shared/menu/text-type/MenuSection'

const MenuTab = () => {
	console.log({ winesSection })
	return (
		<Tabs defaultValue='food-menu' className='flex flex-col md:gap-[114px]'>
			<TabsList className='container flex h-fit items-center bg-transparent md:gap-[149px]'>
				<TabsTrigger
					value='food-menu'
					className='v2-custom-tab flex flex-col gap-6 border-b-[2.5px] border-transparent font-lora font-medium tracking-[0.04em] md:text-3xl'
				>
					<svg
						width='51'
						height='50'
						viewBox='0 0 51 50'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clip-path='url(#clip0_2221_108)'>
							<path
								d='M17.7466 18.4504C14.5626 20.0027 11.9402 22.4471 10.164 25.5182C9.87513 26.0167 10.046 26.6535 10.5434 26.9414C10.7015 27.0335 10.8812 27.0819 11.0642 27.0818C11.4244 27.0818 11.7743 26.8957 11.9665 26.562C13.5352 23.851 15.8504 21.6934 18.6601 20.3221C19.1769 20.0699 19.3915 19.4463 19.1392 18.9296C18.889 18.4128 18.2675 18.1961 17.7466 18.4504Z'
								className='svg-fill'
							/>
							<path
								d='M49.4583 33.332H47.3223C46.8186 22.716 38.732 14.0715 28.3598 12.7077C28.5282 12.3241 28.625 11.9021 28.625 11.457C28.625 9.73379 27.2232 8.33203 25.5 8.33203C23.7768 8.33203 22.375 9.73379 22.375 11.457C22.375 11.9022 22.4718 12.3241 22.6402 12.7077C12.268 14.0715 4.18145 22.716 3.67773 33.332H1.5417C1.40488 33.3319 1.26938 33.3588 1.14295 33.4111C1.01653 33.4635 0.901655 33.5402 0.804906 33.6369C0.708158 33.7337 0.63143 33.8486 0.579112 33.975C0.526793 34.1014 0.49991 34.2369 0.5 34.3737V35.4175C0.5 36.9851 0.959766 38.5038 1.83057 39.81C2.21045 40.3813 2.72583 40.8497 3.33074 41.1735C3.93564 41.4972 4.61127 41.6662 5.29736 41.6654H45.7026C46.3889 41.666 47.0647 41.4968 47.6698 41.1729C48.2748 40.849 48.7904 40.3805 49.1704 39.809C50.0402 38.5027 50.5 36.9851 50.5 35.4175V34.3737C50.5001 34.2369 50.4732 34.1014 50.4209 33.975C50.3686 33.8486 50.2918 33.7337 50.1951 33.6369C50.0983 33.5402 49.9835 33.4635 49.857 33.4111C49.7306 33.3588 49.5951 33.3319 49.4583 33.332ZM25.5 10.4154C26.0747 10.4154 26.5417 10.8823 26.5417 11.4571C26.5417 12.0318 26.0748 12.4988 25.5 12.4988C24.9252 12.4988 24.4583 12.0319 24.4583 11.4571C24.4583 10.8823 24.9253 10.4154 25.5 10.4154ZM25.5 14.582C36.0615 14.582 44.692 22.9043 45.2389 33.332H5.76113C6.30801 22.9043 14.9385 14.582 25.5 14.582ZM48.4167 35.4175C48.4177 36.5698 48.0764 37.6964 47.436 38.6544C47.246 38.94 46.9883 39.1741 46.6859 39.336C46.3834 39.4978 46.0457 39.5824 45.7026 39.5821H5.29736C4.95409 39.5825 4.61606 39.4978 4.31344 39.3358C4.01081 39.1737 3.753 38.9393 3.56299 38.6534C2.92345 37.6955 2.58253 36.5694 2.5834 35.4176V35.4155H48.4167V35.4175Z'
								className='svg-fill'
							/>
						</g>
						<defs>
							<clipPath id='clip0_2221_108'>
								<rect
									width='50'
									height='50'
									fill='white'
									transform='translate(0.5)'
								/>
							</clipPath>
						</defs>
					</svg>
					<h3>Food Menu</h3>
				</TabsTrigger>
				<TabsTrigger
					value='desert'
					className='v2-custom-tab flex flex-col gap-6 border-b-[2.5px] border-transparent font-lora font-medium tracking-[0.04em] md:text-3xl'
				>
					<svg
						width='50'
						height='50'
						viewBox='0 0 50 50'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							className='svg-stoke'
							d='M46.5243 19.4469V40.9747C46.5243 41.7424 45.9024 42.3635 45.1354 42.3635H4.85764C4.09062 42.3635 3.46875 41.7424 3.46875 40.9747V19.4469C3.46875 18.6806 4.09062 18.058 4.85764 18.058L28.466 14.2812'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M40.2891 12.5352C43.7918 12.8895 46.5261 15.8484 46.5261 19.444'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M3.46875 27.7804H4.16319C6.08104 27.7804 7.63542 26.226 7.63542 24.3089C7.63542 22.391 9.18979 20.8359 11.1076 20.8359C13.0255 20.8359 14.5799 22.391 14.5799 24.3089C14.5799 26.226 16.1342 27.7804 18.0521 27.7804C19.9699 27.7804 21.5243 26.226 21.5243 24.3089C21.5243 22.391 23.0787 20.8359 24.9965 20.8359C26.9144 20.8359 28.4687 22.391 28.4687 24.3089C28.4687 26.226 30.0231 27.7804 31.941 27.7804C33.8588 27.7804 35.4132 26.226 35.4132 24.3089C35.4132 22.391 36.9676 20.8359 38.8854 20.8359C40.8033 20.8359 42.3576 22.391 42.3576 24.3089C42.3576 26.226 43.912 27.7804 45.8299 27.7804H46.5243'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M3.46875 33.3359H46.5243'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M3.46875 36.1133H46.5243'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M34.3707 15.9757C36.2883 15.9757 37.8429 14.4211 37.8429 12.5035C37.8429 10.5858 36.2883 9.03125 34.3707 9.03125C32.453 9.03125 30.8984 10.5858 30.8984 12.5035C30.8984 14.4211 32.453 15.9757 34.3707 15.9757Z'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							className='svg-stoke'
							d='M34.375 11.1124C34.375 7.27707 37.4837 4.16797 41.3194 4.16797'
							stroke-width='2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>

					<h3>Desert</h3>
				</TabsTrigger>
				<TabsTrigger
					value='drinks'
					className='v2-custom-tab flex flex-col gap-6 border-b-[2.5px] border-transparent font-lora font-medium tracking-[0.04em] md:text-3xl'
				>
					<svg
						width='51'
						height='50'
						viewBox='0 0 51 50'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.4064 32.6779C18.8794 32.5072 18.372 32.2811 17.8927 32.0035L18.645 30.7045C19.0325 30.9289 19.4426 31.1117 19.8686 31.2497L19.4064 32.6779ZM16.5535 31.021C16.1449 30.6457 15.7778 30.2276 15.4587 29.7738L16.6865 28.9101C16.9435 29.2756 17.2392 29.6125 17.5683 29.9148L16.5535 31.021ZM14.6538 28.3272C14.4372 27.8194 14.2731 27.2908 14.1641 26.7496L15.6356 26.4531C15.7244 26.8938 15.858 27.3243 16.0343 27.7378L14.6538 28.3272ZM33.176 30.9291L34.5206 31.5967C34.7593 31.1155 34.9708 30.6213 35.1542 30.1164L33.7432 29.604C33.579 30.0559 33.3896 30.4983 33.176 30.9291Z'
							className='svg-fill'
						/>
						<path
							d='M44.3587 10.1935C44.3587 4.7832 39.9572 0.381687 34.5468 0.381687C29.389 0.381687 25.1481 4.382 24.7635 9.4429H16.6672L14.9351 2.06996L7.02862 0L6.64844 1.45219L13.6804 3.29318L15.1251 9.4429H9.16483L7.67991 23.6095C7.4031 26.2499 7.84994 28.9101 8.97199 31.3024C10.1033 33.7146 11.8724 35.7466 14.0879 37.1788C16.1749 38.5296 18.5802 39.3085 21.0629 39.4375V43.3757L17.6356 45.1676L18.3311 46.4979L21.8114 44.6782L27.6465 47.7274C27.9729 47.8973 28.2359 48.1678 28.3966 48.4988H15.23C15.3906 48.1677 15.6536 47.8972 15.98 47.7272L16.9942 47.1969L16.2987 45.8666L15.2844 46.3969C14.7628 46.6685 14.3258 47.0781 14.0213 47.5812C13.7167 48.0842 13.5561 48.6613 13.5572 49.2493V49.9999H30.0696V49.2493C30.0707 48.6612 29.9102 48.0841 29.6055 47.581C29.3007 47.078 28.8636 46.6684 28.3419 46.397L22.5641 43.3777V39.4382C25.6499 39.2727 28.6217 38.0984 31.0035 36.0878C32.0599 35.1957 32.9782 34.1518 33.7284 32.9903L32.4677 32.1753C31.798 33.2123 30.9782 34.1442 30.0351 34.9407C27.7302 36.8864 24.8088 37.958 21.8092 37.958C19.3554 37.958 16.9673 37.2526 14.9029 35.9181C12.9239 34.6387 11.3429 32.8222 10.3311 30.665C9.32515 28.5201 8.92465 26.1345 9.17294 23.7659L10.5168 10.9439H15.4779L16.887 16.9421H11.6328L10.8649 23.9431C10.6488 26.0036 10.9969 28.078 11.8714 29.9424C12.7477 31.8107 14.1154 33.383 15.8265 34.4892C17.6151 35.6455 19.6838 36.2567 21.8092 36.2567C24.4076 36.2567 26.9392 35.3276 28.9377 33.6405C31.7058 31.3039 33.1374 27.7039 32.767 24.0086L32.0397 16.942H23.3385V18.4432H30.6852L31.1486 22.9466H12.4843L12.9783 18.4432H21.8135V16.942H18.4291L17.0199 10.9438H33.1674L34.0769 20.0179L34.4601 23.8409C34.6102 25.3268 34.5044 26.8275 34.1471 28.2776L35.6046 28.6365C36.003 27.0189 36.1204 25.3551 35.9537 23.6912L35.5788 19.9507C37.846 19.7146 39.9453 18.7045 41.5583 17.057C43.3641 15.2127 44.3587 12.7752 44.3587 10.1935ZM27.9694 32.4935C26.2414 33.9522 24.0536 34.7556 21.8092 34.7556C19.9737 34.7556 18.1867 34.2276 16.6415 33.2288C15.1667 32.2754 13.9872 30.9187 13.2304 29.3051C12.5209 27.7923 12.2112 26.1191 12.3276 24.4479H31.298C31.5191 27.5469 30.2875 30.5369 27.9694 32.4935ZM36.3589 10.944H42.8229C42.6724 12.6303 42.0158 14.2138 40.9288 15.514L36.3589 10.944ZM40.9269 4.87487C41.9805 6.13662 42.6665 7.7142 42.822 9.4429H36.3589L40.9269 4.87487ZM35.2975 8.3814V1.91824C37.0261 2.07386 38.6038 2.75978 39.8655 3.81337L35.2975 8.3814ZM33.7964 8.3814L29.2279 3.81297C30.4897 2.75938 32.0676 2.07296 33.7964 1.91744V8.3814ZM28.1664 4.87457L32.7348 9.4429H26.2697C26.4252 7.714 27.1127 6.13641 28.1664 4.87457ZM34.725 11.433L39.8679 16.576C38.604 17.6329 37.069 18.2854 35.4291 18.4578L34.725 11.433Z'
							className='svg-fill'
						/>
					</svg>

					<h3>Drinks</h3>
				</TabsTrigger>
			</TabsList>
			<TabsContent value='food-menu'>
				<MenuSection
					id={FoodSection.id}
					food_section_name={FoodSection.food_section_name}
					food_section_items={FoodSection.food_section_items}
				/>
				<div className='container my-16 flex flex-col gap-16'>
					{specialOffer.food_list_items?.map((item) => (
						<FoodCard
							key={item.id}
							id={item.id}
							food_name={item.food_name}
							description={item.description}
						/>
					))}
				</div>
			</TabsContent>
			<TabsContent value='desert'>
				<MenuSection
					id={dessertsSection.id}
					food_section_name={dessertsSection.food_section_name}
					food_section_items={dessertsSection.food_section_items}
				/>
				<p className='container my-4 text-center font-lora text-[22px] leading-[1.75] tracking-[0.04em] text-[#414141]'>
					Please notify staff of any allergies or intolerance before ordering
				</p>
			</TabsContent>
			<TabsContent value='drinks'>
				<MenuSection
					id={tailsSection.id}
					food_section_name={tailsSection.food_section_name}
					food_section_items={tailsSection.food_section_items}
				/>
				<MenuSection
					id={softLassiSection.id}
					food_section_name={softLassiSection.food_section_name}
					food_section_items={softLassiSection.food_section_items}
				/>
				<MenuSection
					id={spiritsSection.id}
					food_section_name={spiritsSection.food_section_name}
					food_section_items={spiritsSection.food_section_items}
				/>
				<MenuSection
					id={winesSection.id}
					food_section_name={winesSection.food_section_name}
					food_section_items={winesSection.food_section_items}
				/>
			</TabsContent>
		</Tabs>
	)
}

export default MenuTab
