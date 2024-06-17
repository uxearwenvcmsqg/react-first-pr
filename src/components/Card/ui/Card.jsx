import React from 'react'
import { Cards } from '../../../data/cardData'

const Card = ({ product }) => {

    if (!product) {
        return null; // Возвращаем null, если product не определен
      }

  return (
    <div className='flex flex-row gap-3'>
      <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-500 font-bold mt-2">${product.price}</p>
      <p className="text-sm text-gray-600">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
    </div>
  )
}

export default Card;
