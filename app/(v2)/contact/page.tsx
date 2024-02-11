import React from 'react'
import Image from 'next/image'
import DividerLine from '@/assets/homepage/divider_line.svg'
import bg from '@/assets/career/career-and-offer-bg.png'
import { Button } from '@/components/ui/button'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import BannerContents from '@/components/v2/shared/banner-contents'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <GradientWrapper>
      {/* banner here */}
      <div>
        <BannerContents text='Contact Us' image={bg.src} />
      </div>
      <DeliveryAndDine />
    </GradientWrapper>
  )
}
export default ContactUs
