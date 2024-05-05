import React, { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../remained/img/arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../remained/img/arrow-up.svg';

export const NavItem = ({ text = '', children }) => {
    const [ selected, setSelected ] = useState(false);
  return (
    <div className='relative'>
        <div className="flex space-x-2 cursor-pointer items-center">
            <span 
                className='text-black hover:text-red ease-in duration-300'
                onClick={() => children && setSelected(text !== selected ? text : '')}
            >
                { text } 
            </span>
            { children && !selected  && <ArrowDownIcon className='w-3 h-3'/> }
            { children && selected && <ArrowUpIcon className='w-5 h-5'/> }
        </div>
        { selected && children }
    </div>
  )
}

