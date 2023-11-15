import { Button } from '@/components/ui/button'

const LandingPage = () => {
	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
			<h1 className=' bg-primary text-primary-foreground'>LandingPage</h1>
			<h2 className='text-foreground'>Holy Cow - Fine Indian Food</h2>
			<Button>Primary Button</Button>
		</div>
	)
}

export default LandingPage
