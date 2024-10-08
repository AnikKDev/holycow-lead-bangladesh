'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'

import { Button } from '../button'
import { Form } from '../form'
import AutoFormObject from './fields/object'
import { FieldConfig } from './types'
import {
	getDefaultValues,
	getObjectFormSchema,
	ZodObjectOrWrapped,
} from './utils'

export function AutoFormSubmit({ children }: { children?: React.ReactNode }) {
	return <Button type='submit'>{children ?? 'Submit'}</Button>
}

function AutoForm<SchemaType extends ZodObjectOrWrapped>({
	formSchema,
	values: valuesProp,
	onValuesChange: onValuesChangeProp,
	onParsedValuesChange,
	onSubmit: onSubmitProp,
	fieldConfig,
	children,
	className,
	containerClassName,
}: {
	formSchema: SchemaType
	values?: Partial<z.infer<SchemaType>>
	onValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
	onParsedValuesChange?: (values: Partial<z.infer<SchemaType>>) => void
	onSubmit?: (values: z.infer<SchemaType>) => void
	fieldConfig?: FieldConfig<z.infer<SchemaType>>
	children?: React.ReactNode
	className?: string
	containerClassName?: string
}) {
	const objectFormSchema = getObjectFormSchema(formSchema)
	const defaultValues: DefaultValues<z.infer<typeof objectFormSchema>> =
		getDefaultValues(objectFormSchema)

	const form = useForm<z.infer<typeof objectFormSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
		values: valuesProp,
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const parsedValues = formSchema.safeParse(values)
		if (parsedValues.success) {
			onSubmitProp?.(parsedValues.data)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => {
					form.handleSubmit(onSubmit)(e)
				}}
				onChange={() => {
					const values = form.getValues()
					onValuesChangeProp?.(values)
					const parsedValues = formSchema.safeParse(values)
					if (parsedValues.success) {
						onParsedValuesChange?.(parsedValues.data)
					}
				}}
				className={cn('space-y-5', className)}
			>
				<AutoFormObject
					schema={objectFormSchema}
					form={form}
					fieldConfig={fieldConfig}
					className={containerClassName}
				/>

				{children}
			</form>
		</Form>
	)
}

export default AutoForm
