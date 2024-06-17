// src/data/cardData.js
export const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data.slice(0, 3); // Возвращаем только три карточки
    } catch (error) {
      console.error('Error fetching the products:', error);
      return [];
    }
  };

  

