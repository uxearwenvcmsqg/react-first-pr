import React from 'react'
import { MenuItem } from '../menu-item'

export const NavMenu = ({ items = [] }) => {
  return (
    <div className='flex flex-col bg-white drop-shadow rounded-lg absolute top-10 right-0 w-38 space-y-2 z-30 py-2 px-4'> 
        { items.map(({ text, icon }) => <MenuItem key={ text } text={ text } icon={ icon } />) } 
    </div>
  )
}


