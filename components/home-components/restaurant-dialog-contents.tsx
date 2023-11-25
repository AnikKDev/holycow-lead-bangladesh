'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Button } from '../ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

type Props = {}

export default function RestaurantsDialogContents({}: Props) {
	const FormSchema = z.object({
		locations: z.string({}),
	})
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})
	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data)
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
				<FormField
					control={form.control}
					name='locations'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-2xl'>
								Select the nearest takeaway location
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder='Select takeaway location' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value='angel'>Angel</SelectItem>
									<SelectItem value='archway'>Archway</SelectItem>
									<SelectItem value='balham'>Balham</SelectItem>
									<SelectItem value='battersea'>Battersea</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}
