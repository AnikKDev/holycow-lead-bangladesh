import React from 'react'

import AwardBackground from '@/assets/v2/home-page/award-bg.png'
import OffersImg from '@/assets/v2/offers/offers.png'

import Image from 'next/image'
import SectionHeader from '@/components/v2/shared/SectionHeader'
type Props = {}

export default function Offers({ }: Props) {
  return <div>
    <section className='mt-[166px]'>
      <SectionHeader title='Whats On' />
      <div className='mt-[98px] flex items-center justify-center gap-[78px]'>
        <div className='flex  gap-4'>

          <div className='max-w-[489px]'>
            <h4
              className='text-[32px] font-medium tracking-[0.04em] text-primary'
              style={{ lineHeight: 1.3 }}
            >
              Ring In The New Year With Culinary Delights!
            </h4>
            <p
              className='text-[18px] tracking-[0.04em] text-[#0C0B08]'
              style={{ lineHeight: 1.75 }}
            >
              3-course meal + welcome drink, all for just $30 per person
            </p>
            <div className="mt-6">
              <p className='text-[#727272] leading-[31.5px]'>
                Monday to Thursday till 31st January 2024!
                Offer available at Putney and Canary Wharf restaurant via online booking only.
              </p>
            </div>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={OffersImg}
            width={535}
            height={549}
            alt='shortlisted for best indian restaurant in the deliveroo restaurant award 2021 '
          />
          <Image
            src={AwardBackground}
            alt='background'
            className='absolute left-[-145px] top-[205px]'
          />
        </div>
      </div>
    </section>
  </div>
}
