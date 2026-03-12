import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ShopSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { 
    cartItems, removeFromCart, updateQuantity, clearCart,
    subtotal, totalProducts, taxCost, shippingCost, finalTotal 
  } = useCart();

  if (!isOpen) return null;

  const formatPrice = (num) => {
    const n = typeof num === 'number' ? num : parseFloat(num) || 0;
    return n.toLocaleString('fr-TN', { minimumFractionDigits: 3, maximumFractionDigits: 3 }) + ' DT';
  };

  // Gère tous les formats de prix : 59 | "59,000 DT" | "59.000DT"
  const parseItemPrice = (price) => {
    if (typeof price === 'number') return price;
    if (!price) return 0;
    return parseFloat(price.toString().replace(',', '.').replace(/[^0-9.]/g, '')) || 0;
  };

  const handleOrder = () => {
    onClose();
    navigate('/auth-gateway'); // Redirige vers la page de sélection Login/SignUp
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed inset-0 z-[200] flex justify-end font-montserrat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative h-full w-full sm:w-[450px] bg-white shadow-2xl flex flex-col p-8 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
          {cartItems.length > 0 ? cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100 shrink-0">
                <img src={item.img} alt={item.name} className="max-h-full object-contain" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800 text-sm truncate">{item.name}</h4>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  {/* Boutons de quantité carrés verts */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      className="w-7 h-7 rounded-md bg-[#238d7b] text-white flex items-center justify-center hover:bg-[#1a6e60] transition-all active:scale-90"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-bold text-sm text-gray-800 w-4 text-center">{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="w-7 h-7 rounded-md bg-[#238d7b] text-white flex items-center justify-center hover:bg-[#1a6e60] transition-all active:scale-90"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-[#238d7b]">{formatPrice(parseItemPrice(item.price) * (item.quantity || 1))}</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-300">
              <ShoppingBag size={60} className="mb-4 opacity-20" />
              <p className="font-medium">Your cart is empty</p>
            </div>
          )}
        </div>

        {/* Summary Section (seulement si le panier n'est pas vide) */}
        {cartItems.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 text-base">Summary</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Subtotal</span>
                <span className="text-gray-900 font-bold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Total Products</span>
                <span className="text-gray-900 font-bold">{totalProducts}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Shipping Cost</span>
                <span className="text-gray-900 font-bold">Free</span>
              </div>
              <div className="flex justify-between text-gray-500 font-medium">
                <span>Tax Cost</span>
                <span className="text-gray-900 font-bold">{formatPrice(taxCost)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-100">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-[#238d7b]">{formatPrice(finalTotal)}</span>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={clearCart}
                className="py-3.5 px-4 border-2 border-[#238d7b] text-[#238d7b] rounded-[20px] font-bold hover:bg-[#238d7b]/5 transition-all text-sm active:scale-95"
              >
                Clear Cart
              </button>
              <button 
                onClick={handleOrder}
                className="py-3.5 px-4 bg-[#238d7b] text-white rounded-[20px] font-bold hover:bg-[#1a6e60] transition-all text-sm shadow-lg shadow-[#238d7b]/20 active:scale-95"
              >
                Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSidebar;