'use client'

import React from 'react'

import { OrderTableColumns } from '@/types/account/account.types'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { DUMMY_ORDERS } from '@/app/account/your-orders/page'

import DatatablePagination from './data-table-pagination'
import DataTableRow from './data-table-row'

type Props = {
	data: OrderTableColumns[]
}

export default function OrderDataTable({}: Props) {
	return (
		<div>
			<div className='mt-8 rounded-md border'>
				<Table className='text-base'>
					<TableHeader>
						<TableRow className='capitalize'>
							<TableHead className=''>Order Number</TableHead>
							<TableHead>Items</TableHead>
							<TableHead>Order Date</TableHead>
							<TableHead className=''>Status</TableHead>
							<TableHead className=''>total</TableHead>
							<TableHead className=''></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className='text-muted-foreground'>
						{DUMMY_ORDERS.map(
							({ orderNumber, items, orderDate, status, total }) => (
								<DataTableRow
									items={items}
									orderDate={orderDate}
									status={status}
									orderNumber={orderNumber}
									total={total}
								/>
							)
						)}
					</TableBody>
				</Table>
			</div>
			{/* separators and paginations */}
			<Separator orientation='horizontal' className='my-6' />
			<div className='flex items-center justify-between space-x-2'>
				<div>
					<h6>Showing 1 to 10 of 11 results</h6>
				</div>
				<div>
					<DatatablePagination />
				</div>
			</div>
		</div>
	)
}
