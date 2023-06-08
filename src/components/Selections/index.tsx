import React from 'react'
import CustomText from '../CustomText'
import Image from 'next/image'

type selectionProps={
  text:string,
  isActive: boolean,
}

const activeChoices = "bg-opacity-75 shadow-inner shadow-gray-700 bg-white";
function Selections(props: selectionProps) {
  return (
      <div className={`flex py-3 ${props.isActive && activeChoices} rounded-3xl cursor-pointer`}>
        <Image alt='Test' src={"confrence.svg"}  width={0} height={0} className='h-14 w-14'/>
       <CustomText text={props.text} textType='heading' className={`${props.isActive &&"text-[#0950A1]"} text-2xl pt-3 px-12`}/>
      </div>

  )
}

export default Selections

