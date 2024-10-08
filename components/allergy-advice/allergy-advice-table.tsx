import React from 'react'
import cashew from '@/assets/allergy-advice/table_icons/cashew.png'
// images
import cellery from '@/assets/allergy-advice/table_icons/cellery.png'
import cereals from '@/assets/allergy-advice/table_icons/cereals.png'
import crust from '@/assets/allergy-advice/table_icons/crust_creams.png'
import dairy from '@/assets/allergy-advice/table_icons/dairy.png'
import dshes from '@/assets/allergy-advice/table_icons/dshes.png'
import eggs from '@/assets/allergy-advice/table_icons/eggs.png'
import fish from '@/assets/allergy-advice/table_icons/fsh.png'
import glutten from '@/assets/allergy-advice/table_icons/glttn.png'
import lupin from '@/assets/allergy-advice/table_icons/lupin.png'
import milk from '@/assets/allergy-advice/table_icons/mlk.png'
import mollusc from '@/assets/allergy-advice/table_icons/mollusc.png'
import mstrd from '@/assets/allergy-advice/table_icons/mstrd.png'
import nuts from '@/assets/allergy-advice/table_icons/nuts.png'
import nuts2 from '@/assets/allergy-advice/table_icons/nuts2.png'
import prwn from '@/assets/allergy-advice/table_icons/prwn.png'
import seeds from '@/assets/allergy-advice/table_icons/seeds.png'
import sesame from '@/assets/allergy-advice/table_icons/sesame.png'
import so2 from '@/assets/allergy-advice/table_icons/so2.png'
import soya from '@/assets/allergy-advice/table_icons/soya.png'

type Props = {}

export default function AllergyAdviceTable({}: Props) {
	return (
		<table
			id='tablepress-1'
			className='tablepress tablepress-id-1 allergen text-center'
		>
			<thead>
				<tr className='row-1'>
					<th className='column-1'></th>

					<th className='column-2 flex h-28 flex-col items-center justify-center'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={cellery.src}
							className='alignnone size-full wp-image-3556 lazyloaded'
							src={cellery.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={cellery.src}
								alt=''
								className='alignnone size-full wp-image-3556'
							/>
						</noscript>
						Celery
					</th>

					<th className='column-3'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={cereals.src}
							className='alignnone size-full wp-image-3557 lazyloaded'
							src={cereals.src}
						/>
						<br />
						CEREALS
					</th>

					<th className='column-4'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={crust.src}
							className='alignnone size-full wp-image-3558 lazyloaded'
							src={crust.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={crust.src}
								alt=''
								className='alignnone size-full wp-image-3558'
							/>
						</noscript>
						Crust aceans/
					</th>
					<th className='column-5'></th>
					<th className='column-6'></th>
					<th className='column-7'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={lupin.src}
							className='alignnone size-full wp-image-3562 lazyloaded'
							src={lupin.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={lupin.src}
								alt=''
								className='alignnone size-full wp-image-3562'
							/>
						</noscript>
						Lupin
					</th>
					<th className='column-8'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={dairy.src}
							className='alignnone size-full wp-image-3563 lazyloaded'
							src={dairy.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={dairy.src}
								alt=''
								className='alignnone size-full wp-image-3563'
							/>
						</noscript>
						DAIRY/
					</th>
					<th className='column-9'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={mollusc.src}
							className='alignnone size-full wp-image-3564 lazyloaded'
							src={mollusc.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={mollusc.src}
								alt=''
								className='alignnone size-full wp-image-3564'
							/>
						</noscript>
						Mollusc
					</th>
					<th className='column-10'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={mstrd.src}
							className='alignnone size-full wp-image-3565 lazyloaded'
							src={mstrd.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={mstrd.src}
								alt=''
								className='alignnone size-full wp-image-3565'
							/>
						</noscript>
						MUSTARD
					</th>
					<th className='column-11'>
						<div className='flex items-center justify-center'>
							<img
								decoding='async'
								width='100'
								height='100'
								alt=''
								data-src={cashew.src}
								className='alignnone size-full wp-image-3566 lazyloaded'
								src={cashew.src}
							/>
							<noscript>
								<img
									decoding='async'
									width='100'
									height='100'
									src={cashew.src}
									alt=''
									className='alignnone size-full wp-image-3566'
								/>
							</noscript>
						</div>
						CASHEW
					</th>
					<th className='column-12'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={nuts.src}
							className='alignnone size-full wp-image-3567 lazyloaded'
							src={nuts.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={nuts.src}
								alt=''
								className='alignnone size-full wp-image-3567'
							/>
						</noscript>
						Peanuts
					</th>
					<th className='column-13'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={sesame.src}
							className='alignnone size-full wp-image-3568 lazyloaded'
							src={sesame.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={sesame.src}
								alt=''
								className='alignnone size-full wp-image-3568'
							/>
						</noscript>
						Sesame
					</th>
					<th className='column-14'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={soya.src}
							className='alignnone size-full wp-image-3574 lazyloaded'
							src={soya.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={soya.src}
								alt=''
								className='alignnone size-full wp-image-3574'
							/>
						</noscript>
						Soya
					</th>
					<th className='column-15'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={so2.src}
							className='alignnone size-full wp-image-3575 lazyloaded'
							src={so2.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={so2.src}
								alt=''
								className='alignnone size-full wp-image-3575'
							/>
						</noscript>
						Sulphur Dioxide
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className='row-2'>
					<td className='column-1 flex h-full flex-col items-center justify-center'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={dshes.src}
							className='alignnone size-full wp-image-3555 lazyloaded'
							src={dshes.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={dshes.src}
								alt=''
								className='alignnone size-full wp-image-3555'
							/>
						</noscript>
						DISHES
					</td>
					<td className='column-2'></td>
					<td className='column-3'>
						<div className='flex'>
							<img
								decoding='async'
								width='100'
								height='100'
								alt=''
								data-src={glutten.src}
								className='alignnone size-full wp-image-3561 lazyloaded'
								src={glutten.src}
							/>
							<img
								decoding='async'
								width='100'
								height='100'
								alt=''
								data-src={glutten.src}
								className='alignnone size-full wp-image-3560 lazyloaded'
								src={glutten.src}
							/>
						</div>
						GLUTEN/WHEAT
					</td>

					<td className='column-4'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={prwn.src}
							className='alignnone size-full wp-image-3559 lazyloaded'
							src={prwn.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={prwn.src}
								alt=''
								className='alignnone size-full wp-image-3559'
							/>
						</noscript>
						PRAWN
					</td>

					<td className='column-5'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={eggs.src}
							className='alignnone size-full wp-image-3569 lazyloaded'
							src={eggs.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={eggs.src}
								alt=''
								className='alignnone size-full wp-image-3569'
							/>
						</noscript>
						EGGS
					</td>
					<td className='column-6'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={fish.src}
							className='alignnone size-full wp-image-3570 lazyloaded'
							src={fish.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={fish.src}
								alt=''
								className='alignnone size-full wp-image-3570'
							/>
						</noscript>
						FISH
					</td>
					<td className='column-7'></td>
					<td className='column-8'>
						<img
							decoding='async'
							width='100'
							height='100'
							alt=''
							data-src={milk.src}
							className='alignnone size-full wp-image-3571 lazyloaded'
							src={milk.src}
						/>
						<noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								src={milk.src}
								alt=''
								className='alignnone size-full wp-image-3571'
							/>
						</noscript>
						MILK
					</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>
						<div className='flex items-center justify-center'>
							<img
								decoding='async'
								width='100'
								height='100'
								alt=''
								data-src={nuts2.src}
								className='alignnone size-full wp-image-3572 lazyloaded'
								src={nuts2.src}
							/>
							<noscript>
								<img
									decoding='async'
									width='100'
									height='100'
									src={nuts2.src}
									alt=''
									className='alignnone size-full wp-image-3572'
								/>
							</noscript>
							<img
								decoding='async'
								width='100'
								height='100'
								alt=''
								data-src={nuts2.src}
								className='alignnone size-full wp-image-3573 lazyloaded'
								src={nuts2.src}
							/>
							<noscript>
								<img
									decoding='async'
									width='100'
									height='100'
									src={nuts2.src}
									alt=''
									className='alignnone size-full wp-image-3573'
								/>
							</noscript>
						</div>
						NUTS/TREENUTS
					</td>
					<td className='column-12'></td>
					<td className='column-13'>
						<img
							decoding='async'
							alt=''
							data-src={seeds.src}
							className='alignnone size-full wp-image-3568 lazyloaded'
							src={seeds.src}
						/>
						<noscript>
							<img
								decoding='async'
								src={seeds.src}
								alt=''
								className='alignnone size-full wp-image-3568'
							/>
						</noscript>{' '}
						Seeds
					</td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-3'>
					<td className='column-1'>Vegetable Pakora</td>
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-4'>
					<td className='column-1'>Onion Pakora</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-5'>
					<td className='column-1'>Vegetable Samosa</td>
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-6'>
					<td className='column-1'>Lamb Samosa</td>
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-7'>
					<td className='column-1'>chicken pakora</td>
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-8'>
					<td className='column-1'>Seti Salmon</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'>SALMON</td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-9'>
					<td rowSpan={2} className='column-1'>
						Lamb Kebab
					</td>
					{/* <td className='column-1'>Lamb Kebab</td> */}
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-10'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-11'>
					<td rowSpan={2} className='column-1'>
						Murgh Kebab
					</td>
					{/* <td className='column-1'>Murgh Kebab</td> */}
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-21'>
					<td className='column-1'>Shahi Rajma</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-22'>
					<td className='column-1'>Saag Aloo</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-23'>
					<td className='column-1'>Saag Paneer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-24'>
					<td className='column-1'>Sri Raam Dosa</td>
					<td className='column-2'></td>
					<td className='column-3'>RICE</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-25'>
					<td className='column-1'>Onion Dosa</td>
					<td className='column-2'></td>
					<td className='column-3'>RICE</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-26'>
					<td className='column-1'>Mysore Masala Dosa</td>
					<td className='column-2'></td>
					<td className='column-3'>RICE</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-27'>
					<td className='column-1'>Paper Dosa</td>
					<td className='column-2'></td>
					<td className='column-3'>RICE</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-28'>
					<td className='column-1'>Chana Masala</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>

				<tr>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-21'>
					<td rowSpan={3} className='column-1'>
						Mixed Vegetable Korma
					</td>
					{/* <td className='column-1'>Mixed Vegetable Korma</td> */}
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-22'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-23'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-24'>
					<td className='column-1'>Mixed Vegetable Curry</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-25'>
					<td rowSpan={3} className='column-1'>
						Vegetables jaisalmer
					</td>
					{/* <td className='column-1'>Vegetables jaisalmer</td> */}
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-26'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-27'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'> COCONUT</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-28'>
					<td className='column-1'>Pudina Paneer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-29'>
					<td className='column-1'>Saag Paneer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-30'>
					<td className='column-1'>Mutter Paneer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-31'>
					<td className='column-1'>Machli Malekhu</td>
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'>COD FISH</td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-32'>
					<td rowSpan={2} className='column-1'>
						Machli Masala
					</td>
					{/* <td className='column-1'>Machli Masala</td> */}
					<td className='column-2'></td>
					<td className='column-3'> WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'>COS FISH</td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-33'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-34'>
					<td rowSpan={2} className='column-1'>
						King Prawn Jafrani
					</td>
					{/* <td className='column-1'>King Prawn Jafrani</td> */}
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'>PRAWN</td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-35'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-36'>
					<td className='column-1'>Saliza King Prawn</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'>PRAWN</td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-39'>
					<td className='column-1'>King Prawn Saag</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'>PRAWN</td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-40'>
					<td className='column-1'>Salmon royale</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'>SALMON</td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-41'>
					<td className='column-1'>Lamb Tikka Masala</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEWNUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-42'>
					<td className='column-1'>Chilli Lamb</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-43'>
					<td className='column-1'>Parbat Lamb</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-44'>
					<td className='column-1'>Saag Gosht</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-45'>
					<td className='column-1'>Lamb Rogan</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-46'>
					<td className='column-1'>Lamb Bhuna</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-47'>
					<td rowSpan={2} className='column-1'>
						Lamb Badami
					</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-48'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-49'>
					<td className='column-1'>Minty Lamb</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-50'>
					<td rowSpan={3} className='column-1'>
						Murg Korma
					</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-51'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-52'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-53'>
					<td rowSpan={3} className='column-1'>
						Murgh Masala
					</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-54'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-55'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-56'>
					<td rowSpan={3} className='column-1'>
						Butter chicken
					</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-57'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-58'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-59'>
					<td rowSpan={3} className='column-1'>
						Murg Malayalam
					</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEW</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-60'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>D. CREAM</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>NUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-60'>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>COCONUT</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>

				<tr className='row-62'>
					<td className='column-1'>Murg jaiselmer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'>CASHEWNUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-63'>
					<td className='column-1'>Murg Madurai</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-64'>
					<td className='column-1'>MurgMagalore</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-65'>
					<td className='column-1'>Murg Dansak Mitho</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-66'>
					<td className='column-1'>MurgPalung</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-67'>
					<td className='column-1'>Murg Bhuna</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-68'>
					<td className='column-1'>Vegetable Biryani</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-69'>
					<td className='column-1'>Lamb Biryani</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-70'>
					<td className='column-1'>Chicken Biryani</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-71'>
					<td className='column-1'>King Prawn Biryani</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'>PRAWN</td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-72'>
					<td className='column-1'>TarkaDaal</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-73'>
					<td className='column-1'>Dal Hariyali</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-74'>
					<td className='column-1'>Parbate daal</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-75'>
					<td className='column-1'>Mumbai aloo</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-76'>
					<td className='column-1'>Kabul Mushroom</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-77'>
					<td className='column-1'>Palak</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-78'>
					<td className='column-1'>Bhindi Bhaji</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-79'>
					<td className='column-1'>Chana masala</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-80'>
					<td className='column-1'>Mumbai aloo</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-81'>
					<td className='column-1'>Aloo Gobi</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-82'>
					<td className='column-1'>Aloo Palak</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-83'>
					<td className='column-1'>Gobi Sabji</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-84'>
					<td className='column-1'>PathaniBaigan</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-85'>
					<td className='column-1'>Pilau Rice</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>MILK</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-86'>
					<td className='column-1'>Plain rice</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-87'>
					<td className='column-1'>Mushroom Rice</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-88'>
					<td className='column-1'>Plain Naan</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-89'>
					<td className='column-1'>Peshwari Naan</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>CASHEWNUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-90'>
					<td className='column-1'>Garlic Naan</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-91'>
					<td className='column-1'>Kulcha Naan</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'>CASHEWNUTS</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-92'>
					<td className='column-1'>Keema Naan</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'>EGGS</td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-93'>
					<td className='column-1'>Paratha</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-94'>
					<td className='column-1'>Tandoori Roti</td>
					<td className='column-2'></td>
					<td className='column-3'>WHEAT</td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>BUTTER</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-95'>
					<td className='column-1'>Raita</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-96'>
					<td className='column-1'>Mint Yoghurt</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-97'>
					<td className='column-1'>Mix Pickle</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'>MUSTARD</td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-98'>
					<td className='column-1'>Lime Pickle</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-99'>
					<td className='column-1'>Mango Chutney</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-100'>
					<td className='column-1'>Fresh Salad</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-101'>
					<td className='column-1'>Mango lassi</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-102'>
					<td className='column-1'>Coconut lassi</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'> COCONUT</td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-103'>
					<td className='column-1'>Sweet lassi</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-104'>
					<td className='column-1'>Salty lassi</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-105'>
					<td className='column-1'>Plain PopPadom</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-106'>
					<td className='column-1'>Spiced poppadom</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-107'>
					<td className='column-1'>Red Wine/White Wine</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'>Sulphur</td>
				</tr>
				<tr className='row-108'>
					<td className='column-1'>Cobra Beer</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'></td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
				<tr className='row-109'>
					<td className='column-1'>Coke/Diet Coke</td>
					<td className='column-2'></td>
					<td className='column-3'></td>
					<td className='column-4'></td>
					<td className='column-5'></td>
					<td className='column-6'></td>
					<td className='column-7'></td>
					<td className='column-8'>YOGURT</td>
					<td className='column-9'></td>
					<td className='column-10'></td>
					<td className='column-11'></td>
					<td className='column-12'></td>
					<td className='column-13'></td>
					<td className='column-14'></td>
					<td className='column-15'></td>
				</tr>
			</tbody>
		</table>
	)
}
