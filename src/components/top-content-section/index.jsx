import React, { useState } from 'react';
import { ReactComponent as RowIcon } from '../../remained/img/row.svg';

export const TopContentSection = () => {
  const [buttonPosition, setButtonPosition] = useState(0);

  const handleMoveRight = () => {
    const newPosition = buttonPosition + 10; 
    setButtonPosition(newPosition);
  };

  return (
    <div className='flex items-center'>
      <div className='rounded-2xl bg-light-gray border-2 border-dark flex flex-row items-center h-8 gap-3 py-4 mt-20'>
        <button 
          className='rounded-xl bg-green border-2 border-white ml-4 px-4 text-white hover:text-orange ease-in duration-300' 
          style={{ transform: `translateX(${buttonPosition}px)` }}
          onClick={handleMoveRight}
        >
          New feature
        </button>
        
        <h6 className='text-white'> Check out the team dashboard </h6>
        <RowIcon className='mr-4'/>
      </div>
    </div>
  );
};
