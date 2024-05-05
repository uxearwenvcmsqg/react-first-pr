import React from 'react';
import { ReactComponent as BoltShift } from '../../remained/img/Boltshiftsvg.svg';
import { ReactComponent as LightBox } from '../../remained/img/lightbox.svg'
import { ReactComponent as GlobalBank } from '../../remained/img/globalBank.svg';


export const BottomContentSection = () => {
  return (
    <div className='flex flex-row gap-8 items-center'>
        <div className='flex flex-row items-center gap-2'> 
            <BoltShift/>
            <a href="#" className='hover:text-red ease-in duration-150 my-10'>BoltShift</a>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <LightBox/>
            <a href="#" className='hover:text-red ease-in duration-150 my-10'>LightBox</a>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <LightBox/>
            <a href="#" className='hover:text-red ease-in duration-150 my-10'>FeatherDev</a>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <GlobalBank/>
            <a href="#" className='hover:text-red ease-in duration-150 my-10'>GlobalBank</a>
        </div>
    </div>
  )
}

