import React from 'react'
import branchImg from '@/assets/v2/contact-us/branch_map.png'
import { cn } from '@/lib/utils'

type Props = {

  branchNum: number
  branchName: string
  branchLocation: string
  branchEmail: string
  branchOpeningHours: React.ReactNode
  classes?: string
}

export default function Branches({ branchNum, classes, branchName, branchLocation, branchEmail, branchOpeningHours }: Props) {
  return (
    <div>
      <div className={cn("max-w-7xl mx-auto p-10 items-center flex gap-x-32", classes)}>
        <div className="flex flex-col w-1/2 pr-10">
          <h2 className="text-2xl font-bold mb-2 text-primary">Branch {branchNum}</h2>
          <h1 className="text-4xl font-[32px] leading-[41.6px] tracking-[3%] mb-4">{branchName}</h1>
          <p className="text-xl mb-2">{branchLocation}</p>
          <a className="text-primary mb-8" href="#">
            {branchEmail}
          </a>
          <h3 className="font-[500] text-[32px] tracking-[3%] mb-4">Opening Hours</h3>
          {branchOpeningHours}
        </div>
        <div className="w-1/2">
          <img
            alt="Map"
            className="w-full h-auto"
            src={branchImg.src}
          />
        </div>
      </div>
    </div>
  )
}
