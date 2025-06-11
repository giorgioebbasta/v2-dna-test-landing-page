
import { useState, useCallback } from 'react';

export const useQuantity = (initialQuantity: number = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity(prev => Math.max(1, prev - 1));
  }, []);

  const getQuantityCartUrl = useCallback((qty: number) => {
    return `https://holifya.com/cart/43782964445448:${qty}`;
  }, []);

  const handleOrder = useCallback(() => {
    window.open(getQuantityCartUrl(quantity), '_blank', 'noopener,noreferrer');
  }, [quantity, getQuantityCartUrl]);

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    getQuantityCartUrl,
    handleOrder
  };
};
