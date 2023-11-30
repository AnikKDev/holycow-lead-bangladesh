'use client'

import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

import { OrderTableColumns } from '@/types/account/account.types'

type Props = {}

export const ORDER_COLUMN: ColumnDef<OrderTableColumns>[] = [
	{
		accessorKey: 'orderNumber',
		header: 'Order Number',
	},
	{
		accessorKey: 'items',
		header: 'Items',
	},
	{
		accessorKey: 'orderDate',
		header: 'Order Date',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'total',
		header: 'Total',
	},
]
/* 
export default function DataTableColulmns({}: Props) {
	return <div>DataTableColulmns</div>
}
 */
