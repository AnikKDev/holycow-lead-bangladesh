'use client'

import { useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { OrderTableColumns } from '@/types/account/account.types'
import { Separator } from '@/components/ui/separator'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

import DataTableRow from './data-table-row'

type Props = {
	data: OrderTableColumns[]
	itemsPerPage?: number
}

export default function OrderDataTable({
	data: orders,
	itemsPerPage = 5,
}: Props) {
	const ref = useRef<HTMLDivElement>(null)
	const [itemOffset, setItemOffset] = useState(0)

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage
	console.log(`Loading items from ${itemOffset} to ${endOffset}`)
	const currentItems = orders.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(orders.length / itemsPerPage)

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % orders.length
		console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
		)
		setItemOffset(newOffset)
	}
	const handlePageChange = () => {
		ref.current.scrollIntoView()
	}
	return (
		<div ref={ref} className='scroll-mt-36'>
			<div className='mt-5 overflow-hidden rounded-md border'>
				<Table className=' bg-white text-base'>
					<TableHeader className='bg-[#F9FAFB] text-sm font-medium'>
						<TableRow className='uppercase'>
							<TableHead className='whitespace-nowrap'>Order Num</TableHead>
							<TableHead className='whitespace-nowrap'>Items</TableHead>
							<TableHead className='whitespace-nowrap'>Order Date</TableHead>
							<TableHead className='whitespace-nowrap'>Status</TableHead>
							<TableHead className='whitespace-nowrap'>total</TableHead>
							<TableHead className='whitespace-nowrap'></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className='text-muted-foreground'>
						<OrderTableBody orders={currentItems} />
					</TableBody>
				</Table>
			</div>
			{/* separators and paginations */}
			<Separator orientation='horizontal' className='my-6' />
			<div className='flex items-center justify-between'>
				{/* <div>
					<h6>
						Showing {currentItems.length * pageCount - 4} to{' '}
						{currentItems.length * pageCount} of {orders.length} results
					</h6>
				</div> */}
				<PaginatedOrderTable
					pageCount={pageCount}
					handlePageClick={handlePageClick}
					handlePageChange={handlePageChange}
				/>
			</div>
		</div>
	)
}

const OrderTableBody = ({ orders }: { orders: OrderTableColumns[] }) => {
	return orders.map(({ orderNumber, items, orderDate, status, total }, idx) => (
		<DataTableRow
			key={idx}
			items={items}
			orderDate={orderDate}
			status={status}
			orderNumber={orderNumber}
			total={total}
		/>
	))
}

const PaginatedOrderTable = ({
	pageCount,
	handlePageClick,
	handlePageChange,
}) => {
	return (
		<>
			<div className='self-center'>
				<ReactPaginate
					onClick={handlePageChange}
					breakLabel='...'
					nextLabel='>'
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel='<'
					renderOnZeroPageCount={null}
					className='flex flex-row items-center gap-1.5 transition-all'
					pageClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center cursor-pointer'
					pageLinkClassName='cursor-pointer'
					activeClassName='!bg-[#AE9456]'
					activeLinkClassName='bg-[#AE9456]'
					previousClassName='bg-white border border-border rounded px-2.5 h-8 flex items-center justify-center cursor-pointer'
					nextClassName='bg-white border border-border rounded px-2.5 h-8  flex items-center justify-center cursor-pointer'
					disabledClassName='bg-gray-300 pointer-events-none cursor-not-allowed '
					disabledLinkClassName='pointer-events-none cursor-not-allowed '
				/>
			</div>
		</>
	)
}
