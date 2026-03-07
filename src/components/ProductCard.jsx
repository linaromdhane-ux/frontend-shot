import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ 
  product, 
  isHovered, 
  isInWishlist,
  onMouseEnter,
  onMouseLeave,
  onToggleWishlist,
  onOpenDetails 
}) => {
  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        width="17" 
        height="17" 
        viewBox="0 0 24 24"
        fill={i < rating ? "#f39c12" : "none"}
        stroke={i < rating ? "#f39c12" : "#d1d5db"}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));

  return (
    <div 
      className="prod-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="prod-img-wrap">
        <img src={product.img} alt={product.name} />
        <span className="prod-badge" style={{ backgroundColor: product.badgeColor }}>
          {product.badge}
        </span>
        <button 
          className="prod-heart" 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist && onToggleWishlist(product); }}
        >
          <Heart 
            size={17} 
            strokeWidth={2}
            fill={isInWishlist ? '#ef4444' : 'none'}
            stroke={isInWishlist ? '#ef4444' : '#9ca3af'} 
          />
        </button>
        {isHovered && (
          <div className="prod-cart-overlay">
            <button 
              className="prod-cart-btn" 
              onClick={(e) => { e.stopPropagation(); onOpenDetails && onOpenDetails(product); }}
            >
              <ShoppingCart size={22} color="#238d7b" strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
      <div className="prod-body">
        <div className="prod-stars">{renderStars(product.rating)}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-desc">{product.description}</div>
        <div className="prod-price">{product.price}</div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="prod-stock">{product.stock}</span>
          <button 
            className="btn-shop-orange" 
            onClick={(e) => { e.stopPropagation(); onOpenDetails && onOpenDetails(product); }}
          >
            Shop
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;