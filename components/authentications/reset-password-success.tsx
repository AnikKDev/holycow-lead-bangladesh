'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaRegCheckCircle } from 'react-icons/fa'

import { LoginPageStep } from '@/app/(auth)/login/page'

import AuthLayoutContainer from './auth-layout-container'

const ResetPasswordSuccessPage = ({
	setCurrentStep,
}: {
	setCurrentStep: React.Dispatch<React.SetStateAction<LoginPageStep>>
}) => {
	const router = useRouter()
	useEffect(() => {
		setTimeout(() => {
			setCurrentStep('login')
		}, 2000)
	}, [])
	return (
		<AuthLayoutContainer hideBackBtn>
			<div className='-mt-[8rem] flex w-full flex-col space-y-3.5 place-self-center rounded-lg px-7  py-6 drop-shadow-lg mobile-sm:bg-transparent mobile-sm:px-0 mobile-sm:drop-shadow-none '>
				<div className='flex flex-col items-center justify-center text-center'>
					{/* icon here */}
					<FaRegCheckCircle className='mb-8 text-6xl font-bold text-primary' />
					<h2 className='mb-6 text-2xl font-medium leading-10 text-primary'>
						Your password has been changed successfully
					</h2>
					<p className='text-lg text-[#191919]'>Redirecting to Login Page...</p>
				</div>
			</div>
		</AuthLayoutContainer>
	)
}

export default ResetPasswordSuccessPage
