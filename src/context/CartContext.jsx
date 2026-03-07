import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  const toggleWishlistProduct = (product) => {
    const exists = wishlistItems.find(i => i.id === product.id);
    if (exists) {
      setWishlistItems(prev => prev.filter(i => i.id !== product.id));
    } else {
      setWishlistItems(prev => [...prev, { id: product.id, name: product.name, price: product.price, img: product.img }]);
    }
  };

  const isInWishlist = (id) => wishlistItems.some(i => i.id === id);
  const removeFromWishlist = (id) => setWishlistItems(prev => prev.filter(item => item.id !== id));
  
  const clearAllWishlist = () => {
    if (wishlistItems.length === 0) return;
    setIsClearing(true);
    setTimeout(() => { setWishlistItems([]); setIsClearing(false); }, 600);
  };

  const addToCart = (product, quantity = 1) => {
    const exists = cartItems.find(i => i.id === product.id);
    if (exists) {
      setCartItems(prev => prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i));
    } else {
      setCartItems(prev => [...prev, { id: product.id, name: product.name, price: product.price, img: product.img, quantity }]);
    }
  };

  const addToShop = (item) => {
    if (!cartItems.find(i => i.id === item.id)) {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
    setIsShopOpen(true);
    setIsWishlistOpen(false);
  };

  const openWishlist = () => { setIsWishlistOpen(true); setIsShopOpen(false); };
  const openShop = () => { setIsShopOpen(true); setIsWishlistOpen(false); };
  const closeSidebars = () => { setIsWishlistOpen(false); setIsShopOpen(false); };

  return (
    <CartContext.Provider value={{
      wishlistItems, cartItems, isWishlistOpen, isShopOpen, isClearing,
      toggleWishlistProduct, isInWishlist, removeFromWishlist, clearAllWishlist,
      addToCart, addToShop, openWishlist, openShop, closeSidebars,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);