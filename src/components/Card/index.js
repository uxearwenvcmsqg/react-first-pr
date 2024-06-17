import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../data/cardData';

import Card from "./ui/Card";
export { Card };

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>Products</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;



