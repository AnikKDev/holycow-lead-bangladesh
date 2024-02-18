import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`)

const Checkout = () => {
	const [clientSecret, setClientSecret] = useState('')

	const appearance = {
		theme: 'stripe',
	}
	const options = {
		clientSecret,
		appearance,
	}

	return (
		<div>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	)
}

export default Checkout
