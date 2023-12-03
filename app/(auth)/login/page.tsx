'use client'

import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	description: 'Login Page',
}

export type LoginPageStep =
	| 'login'
	| 'forgot-password'
	| 'forgot-verify'
	| 'reset-password'
	| 'reset-success'
	| ''

const Login = () => {
	return (
		<section>
			<h1>Login Page</h1>
		</section>
	)
}

export default Login
