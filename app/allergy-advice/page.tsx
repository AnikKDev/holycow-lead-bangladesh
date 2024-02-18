import Head from 'next/head'

import AllergyAdviceTable from '@/components/allergy-advice/allergy-advice-table'

type Props = {}

export default function AllergyAdvice({}: Props) {
	return (
		<>
			<Head>
				<title>Allergy Advice - Holycow Fine Indian Restaurant</title>
			</Head>
			<header className='allergy-advice__header flex h-80 items-center justify-center bg-[#332d21] bg-cover bg-center bg-no-repeat py-4 text-center text-white bg-blend-overlay'>
				<h1 className='text-primary-dark text-5xl font-bold'>Allergy Advice</h1>
			</header>
			<div className='container mx-auto py-11 text-center'>
				<section className='content fullwidth text-center'>
					<article
						id='post-65'
						className='post-65 page type-page status-publish has-post-thumbnail hentry text-lg text-gray-600'
					>
						<p className='my-8'>
							<strong>ALLERGY ADVICE:</strong> We can not guarantee our products
							are allergen-free. If you have an allergen concern please ask a
							member of staff before you make an order.
						</p>
						<div className='responsive-table'>
							<AllergyAdviceTable />
						</div>
						<p className='mt-7'>
							<em />
							<strong>Review date:</strong> 20/09/2021 |{' '}
							<em>
								<strong>Reviewed by:</strong>
							</em>{' '}
							Suman Sharma | You can find this template, including more
							information{' '}
							<a href='http://www.food.gov.uk/allergy'>
								{' '}
								at www.food.gov.uk/allergy
							</a>
						</p>
					</article>
				</section>
			</div>
		</>
	)
}
