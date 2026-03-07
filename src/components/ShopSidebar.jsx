import { X } from 'lucide-react';

const ShopSidebar = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-[-10px_0_30px_rgba(0,0,0,0.2)]"
      style={{ transform: 'translateX(0)' }}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0f1a18]">My Shop</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          {cartItems.length > 0 ? cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                  <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0f1a18]">{item.name}</h4>
                  <p className="text-[#238d7b] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          )) : (
            <p className="text-center text-gray-400 mt-10">Your shop is empty.</p>
          )}
        </div>
        <button className="w-full py-4 bg-[#238d7b] text-white rounded-full font-bold mt-6 hover:bg-[#1a6e60] transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShopSidebar;