import React from 'react'
import bg from '@/assets/career/career-and-offer-bg.png'
import GradientWrapper from '@/components/v2/shared/gradient-wrapper'
import BannerContents from '@/components/v2/shared/banner-contents'
import DeliveryAndDine from '@/components/v2/home-components/header/DeliveryAndDine'
import Branches from '@/components/v2/contact-us/branches'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <GradientWrapper>
      {/* banner here */}
      <div>
        <BannerContents text='Contact Us' image={bg.src} />
      </div>
      <DeliveryAndDine />
      {/* branches */}
      <Branches branchOpeningHours={<>

        <ul className='font-[400] text-[#727272] leading-[31.5px] font-open_sans tracking-[4%]'>
          <li className="mb-1">Monday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Tuesday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Wednesday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Thursday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Friday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Saturday: 5:00 pm - 11:00 pm</li>
          <li className="mb-1">Sunday: 5:00 pm - 11:00 pm</li>
        </ul>
      </>}
        branchEmail='restaurant@holycowonline.com'
        branchLocation='In Putney, London'
        branchName='Holy Cow Indian Restaurant & Bar'
        branchNum={1}

      />



      <Branches branchOpeningHours={<>
        <ul className='font-[400] text-[#727272] leading-[31.5px] font-open_sans tracking-[4%]'>
          <li className="mb-1">Monday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Tuesday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Wednesday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Thursday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Friday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Saturday: 2:00 pm – 11:00 pm</li>
          <li className="mb-1">Sunday: 2:00 pm – 11:00 pm</li>
        </ul></>}
        branchEmail='canarywharf@holycowonline.com'
        branchLocation='In canary Wharf, London'
        branchName='Holy Cow Indian Restaurant & Bar'
        branchNum={2}
        classes='flex-row-reverse'

      />
    </GradientWrapper >
  )
}
export default ContactUs
