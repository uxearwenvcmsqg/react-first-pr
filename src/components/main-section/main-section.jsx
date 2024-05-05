import React from 'react'
import { TopContentSection } from '../top-content-section'
import { MiddleContentSection } from '../middle-content-section'
import { BottomContentSection } from '../bottom-content-section'

export const MainSection = () => {
  return (
    <section className='w-full flex flex-col gap-4 mt-10 items-center'>
        <TopContentSection/>
        <MiddleContentSection/>
        <BottomContentSection/>
    </section>
  )
}

