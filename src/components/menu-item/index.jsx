import React from 'react'

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-full gap-4'>
      { icon }
      <span className='text-dark hover:text-red-600 cursor-pointer hover:text-red'>{ text }</span>
    </div>
  )
}

