import React from 'react';

const borderStyles = 'border-2 border-dark rounded-3xl bg-green hover:text-orange ease-in duration-300';
const filledStyles = 'text-dark rounded-2xl font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-red border-2 border-dark';

export const Button = ({
    children = '',
    hasBorder = false,
    isFilled = false
}) => {
  return (
    <button className={`text-dark px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`} >{ children }</button>
  )
}



