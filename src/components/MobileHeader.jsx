import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Globe, Menu } from 'lucide-react';

const MobileHeader = ({ 
  activeIcon, 
  setActiveIcon, 
  cartItemsCount = 0,
  onHeartClick,
  onCartClick,
  onMenuClick 
}) => {
  const icons = [
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: onHeartClick },
    { id: 'cart', icon: ShoppingCart, action: onCartClick },
    { id: 'user', icon: User }
  ];

  return (
    <div className="mobile-header fixed top-0 left-0 z-[100] w-full">
      <Link to="/">
        <img src="/images/shot2.png" alt="S.HOT" style={{ height: '32px' }} />
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {icons.map((item) => (
            <div 
              key={item.id} 
              onClick={() => { 
                setActiveIcon && setActiveIcon(item.id); 
                if(item.action) item.action(); 
              }} 
              className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}
            >
              <item.icon size={18} strokeWidth={2.5} />
              {item.id === 'cart' && cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </div>
          ))}
        </div>
        <button className="icon-box-vid" onClick={onMenuClick}>
          <Menu size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;