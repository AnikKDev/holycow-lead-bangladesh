import { Dispatch, SetStateAction } from 'react'

import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'

const TopNavigationSidebarModal = ({
	showNavSidebar,
	setShowNavSidebar,
}: {
	showNavSidebar: boolean
	setShowNavSidebar: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<>
			<Sheet open={showNavSidebar} onOpenChange={setShowNavSidebar}>
				<SheetContent
					side='left'
					className=' flex h-full w-[420px] flex-col flex-nowrap gap-0 px-0 py-3 mobile-sm:w-full '
				>
					<SheetHeader className='shrink-0 border-b border-border px-3 pb-4'>
						<SheetTitle>Sheet Title</SheetTitle>
					</SheetHeader>
					<div className=' min-h-fit grow-[1] overflow-y-auto px-3 py-4'>
						sheet body
					</div>
					<SheetFooter className='shrink-0 flex-col gap-3 border-t border-border px-3 pt-3'>
						<div className='flex items-center justify-between'>
							<h3 className='text-base font-semibold'>sheet footer</h3>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default TopNavigationSidebarModal
