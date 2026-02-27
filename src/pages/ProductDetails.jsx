import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe, X, Facebook, Instagram, Youtube, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const allProducts = [
    {
      id: 103,
      name: 'Baby S.HOTs',
      description: 'Premium organic spirulina in easy baby Shots format.',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'New',
      badgeColor: '#22c55e',
      stock: 'In Stock (25 available)',
      rating: 4,
      reviews: 2,
      img: '/images/p3.jpg',
      images: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
      category: 'Shots',
      features: [
        'Easy-to-consume format',
        'Perfect for on-the-go consumption',
        'Pure spirulina concentrate',
        'No additives or fillers'
      ],
      nutritionalInfo: [
        { label: 'Protein', value: '65%' },
        { label: 'Chlorophyll', value: '30mg' },
        { label: 'Iron', value: '58mg' },
        { label: 'Calories', value: '26 per tsp' }
      ]
    },
    {
      id: 102,
      name: 'Spirulina Diamonds',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (20 available)',
      rating: 5,
      reviews: 2,
      img: '/images/p2.png',
      images: ['/images/p2.png', '/images/p2.png', '/images/p2.png', '/images/p2.png'],
      category: 'Diamonds',
      features: [
        'Includes 1 bottle of capsules and 1 container of powder',
        'Save 10% compared to buying separately',
        'Ideal for varied consumption preferences',
        'Premium quality and purity guaranteed'
      ],
      nutritionalInfo: [
        { label: 'Protein', value: '65%' },
        { label: 'Chlorophyll', value: '30mg' },
        { label: 'Iron', value: '58mg' },
        { label: 'Calories', value: '26 per tsp' }
      ]
    },
    {
      id: 101,
      name: 'Spirulina Powder',
      description: 'Premium organic spirulina Powder 100g',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (50 available)',
      rating: 4,
      reviews: 2,
      img: '/images/p1.png',
      images: ['/images/p1.png', '/images/p1.png', '/images/p1.png', '/images/p1.png'],
      category: 'Powder',
      features: [
        '100% pure spirulina',
        'Easy to mix in drinks',
        '30 servings per container',
        'Rich in chlorophyll and phycocyanin',
        'Cold-pressed to preserve nutrients'
      ],
      nutritionalInfo: [
        { label: 'Protein', value: '65%' },
        { label: 'Chlorophyll', value: '30mg' },
        { label: 'Iron', value: '58mg' },
        { label: 'Calories', value: '26 per tsp' }
      ]
    },
    {
      id: 104,
      name: 'Spirulina Tablets',
      description: 'Easy-to-take spirulina tablets for daily wellness.',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '69,000 DT',
      priceNum: 69000,
      badge: 'Popular',
      badgeColor: '#f59e0b',
      stock: 'In Stock (35 available)',
      rating: 4,
      reviews: 2,
      img: '/images/p4.png',
      images: ['/images/p4.png', '/images/p4.png', '/images/p4.png', '/images/p4.png'],
      category: 'Tablets',
      features: [
        '100% pure spirulina powder',
        'Easy to mix in drinks and food',
        '30 servings per container',
        'Rich in chlorophyll and phycocyanin',
        'Cold-pressed to preserve nutrients'
      ],
      nutritionalInfo: [
        { label: 'Protein', value: '65%' },
        { label: 'Chlorophyll', value: '30mg' },
        { label: 'Iron', value: '58mg' },
        { label: 'Calories', value: '26 per tsp' }
      ]
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(productId));
  const recommendedProducts = allProducts.filter(p => p.id !== parseInt(productId)).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-[#238d7b] hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  const toggleWishlist = () => {
    const exists = wishlistItems.find(i => i.id === product.id);
    if (exists) {
      setWishlistItems(prev => prev.filter(i => i.id !== product.id));
    } else {
      setWishlistItems(prev => [...prev, product]);
    }
  };

  const isInWishlist = wishlistItems.some(i => i.id === product.id);

  const addToCart = () => {
    setCartItems(prev => [...prev, { ...product, quantity }]);
    setIsShopOpen(true);
  };

  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: () => { setIsWishlistOpen(true); setIsShopOpen(false); } },
    { id: 'cart', icon: ShoppingCart, action: () => { setIsShopOpen(true); setIsWishlistOpen(false); } },
    { id: 'user', icon: User }
  ];

  const navLinks = ['Home', 'Products', 'About us', 'Contact'];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 24 24"
        fill={i < rating ? "#f39c12" : "none"}
        stroke={i < rating ? "#f39c12" : "#d1d5db"}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));

  const closeSidebars = () => {
    setIsWishlistOpen(false);
    setIsShopOpen(false);
    setActiveIcon(null);
  };

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] overflow-x-hidden bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        * { font-family:'Montserrat',sans-serif; }

        .nav-fixed-video { background-color:rgba(45,75,68,.85); height:75px; backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); }
        .nav-link-item { color:white; opacity:.8; font-weight:600; font-size:15px; transition:all .3s ease; cursor:pointer; }
        .nav-link-item:hover { opacity:1; text-shadow:0 0 8px rgba(255,255,255,.5); }
        .icon-box-vid { width:44px; height:44px; display:flex; align-items:center; justify-content:center; border-radius:14px; transition:all .2s ease; color:white; cursor:pointer; position:relative; }
        .icon-box-vid:hover,.icon-box-active { background-color:white !important; color:#238d7b !important; transform:translateY(-2px); }
        .btn-signup-vid { background-color:white; color:#238d7b; font-weight:700; font-size:14px; height:42px; padding:0 25px; border-radius:50px; border:2px solid white; transition:all .3s ease; cursor:pointer; }
        .btn-signup-vid:hover { background-color:#238d7b; color:white !important; }

        .product-section { max-width:1200px; margin:0 auto; padding:40px 40px; display:grid; grid-template-columns: 1fr 1fr; gap:60px; }
        .product-images { display:flex; gap:20px; }
        .thumbnails { display:flex; flex-direction:column; gap:12px; }
        .thumbnail { width:80px; height:80px; border-radius:12px; cursor:pointer; overflow:hidden; border:2px solid transparent; transition:all .3s ease; }
        .thumbnail:hover, .thumbnail.active { border-color:#238d7b; }
        .thumbnail img { width:100%; height:100%; object-fit:cover; }
        .main-image { flex:1; position:relative; background:#f5f5f5; border-radius:16px; overflow:hidden; }
        .main-image img { width:100%; height:100%; object-fit:contain; }

        .product-info h1 { font-size:32px; font-weight:700; color:#111827; margin-bottom:12px; }
        .rating-section { display:flex; align-items:center; gap:12px; margin-bottom:20px; }
        .rating-stars { display:flex; gap:4px; }
        .rating-text { color:#666; font-size:14px; }
        .price-section { font-size:32px; font-weight:800; color:#238d7b; margin-bottom:24px; }
        .description-text { color:#666; line-height:1.7; margin-bottom:24px; font-size:15px; }

        .features-list { background:#f9f9f9; padding:20px; border-radius:12px; margin-bottom:32px; }
        .features-list h3 { font-weight:700; color:#111827; margin-bottom:12px; }
        .features-list ul { list-style:none; padding:0; margin:0; }
        .features-list li { padding:8px 0; color:#666; font-size:14px; }
        .features-list li:before { content:'• '; color:#238d7b; font-weight:bold; margin-right:8px; }

        .quantity-section { display:flex; align-items:center; gap:16px; margin-bottom:24px; }
        .quantity-box { display:flex; align-items:center; gap:12px; background:#f9f9f9; padding:12px 16px; border-radius:50px; }
        .quantity-btn { background:none; border:none; cursor:pointer; color:#238d7b; font-size:20px; }
        .quantity-input { width:60px; text-align:center; border:none; background:transparent; font-weight:600; font-size:16px; }

        .action-buttons { display:flex; gap:16px; }
        .btn-add-cart { flex:1; padding:16px; background:#f39c12; color:white; border:none; border-radius:50px; font-weight:700; font-size:16px; cursor:pointer; transition:all .3s ease; }
        .btn-add-cart:hover { background:#d68910; }
        .btn-wishlist { width:56px; height:56px; border-radius:50%; background:#f5f5f5; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all .3s ease; }
        .btn-wishlist:hover { background:#238d7b; }
        .btn-wishlist svg { color:#238d7b; }
        .btn-wishlist.active svg { color:#ef4444; }

        .tabs { display:flex; gap:32px; border-bottom:1px solid #eee; margin-bottom:32px; }
        .tab { padding:16px 0; font-weight:600; color:#666; cursor:pointer; border-bottom:3px solid transparent; transition:all .3s ease; }
        .tab.active { color:#238d7b; border-bottom-color:#238d7b; }

        .recommended-section { max-width:1200px; margin:60px auto; padding:0 40px; }
        .recommended-title { font-size:28px; font-weight:700; color:#238d7b; text-align:center; margin-bottom:12px; }
        .recommended-subtitle { text-align:center; color:#666; margin-bottom:40px; }
        .recommended-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:32px; }
        .recommended-card { background:white; border:1px solid #eee; border-radius:16px; overflow:hidden; cursor:pointer; transition:all .3s ease; }
        .recommended-card:hover { transform:translateY(-8px); box-shadow:0 12px 32px rgba(0,0,0,0.1); }
        .recommended-card-img { width:100%; height:280px; background:#f5f5f5; overflow:hidden; }
        .recommended-card-img img { width:100%; height:100%; object-fit:contain; padding:20px; }
        .recommended-card-body { padding:20px; }
        .recommended-card-badge { display:inline-block; background:#2563eb; color:white; padding:4px 12px; border-radius:50px; font-size:12px; font-weight:700; margin-bottom:12px; }
        .recommended-card-name { font-weight:700; font-size:16px; color:#111827; margin-bottom:8px; }
        .recommended-card-rating { display:flex; gap:4px; margin-bottom:8px; }
        .recommended-card-price { font-weight:800; font-size:18px; color:#238d7b; }

        .footer-container { background: radial-gradient(circle at top right, #1f7a6a 0%, #0d4a3e 100%); color: white; padding: 80px 0 40px; margin-top:60px; }
        .footer-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 50px; max-width: 1200px; margin: 0 auto; padding: 0 40px; margin-bottom: 60px; }
        .footer-col h3 { font-size: 18px; font-weight: 700; color: white; margin-bottom: 25px; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-col ul li { margin-bottom: 12px; }
        .footer-col ul li a { color: rgba(255,255,255,0.70); text-decoration: none; font-size: 15px; transition: color .3s ease; cursor:pointer; }
        .footer-col ul li a:hover { color: white; }

        @media (max-width: 768px) { 
          .product-section { grid-template-columns: 1fr; gap: 32px; padding: 20px; }
          .recommended-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* SIDEBAR WISHLIST */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0f1a18]">Wishlist</h2>
            <button onClick={closeSidebars} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} className="text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {wishlistItems.length > 0 ? wishlistItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                  </div>
                  <div><h4 className="font-bold text-[#0f1a18]">{item.name}</h4><p className="text-[#238d7b] font-bold">{item.price}</p></div>
                </div>
                <button onClick={() => toggleWishlist()} className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all text-red-500 hover:scale-110"><Heart size={18} fill="currentColor" /></button>
              </div>
            )) : <p className="text-center text-gray-400 mt-10">Your wishlist is empty.</p>}
          </div>
        </div>
      </div>

      {/* SIDEBAR SHOP */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out ${isShopOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0f1a18]">My Shop</h2>
            <button onClick={closeSidebars} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} className="text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {cartItems.length > 0 ? cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                  </div>
                  <div><h4 className="font-bold text-[#0f1a18]">{item.name}</h4><p className="text-[#238d7b] font-bold">{item.price}</p><p className="text-sm text-gray-500">Qty: {item.quantity}</p></div>
                </div>
              </div>
            )) : <p className="text-center text-gray-400 mt-10">Your shop is empty.</p>}
          </div>
          <button className="w-full py-4 bg-[#238d7b] text-white rounded-full font-bold mt-6 hover:bg-[#1a6e60] transition-all">Checkout</button>
        </div>
      </div>

      {(isWishlistOpen || isShopOpen) && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={closeSidebars} />}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
        <div className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
          <Link to="/"><div className="flex-shrink-0 cursor-pointer"><img src="/images/shot2.png" alt="S.HOT" className="h-7 md:h-9 w-auto" /></div></Link>
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const linkPath = item === 'Products' ? '/products' : item === 'Home' ? '/' : '#';
              return (
                <Link key={item} to={linkPath}>
                  <button className="nav-link-item">{item}</button>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1">
              {icons.map((item) => (
                <div key={item.id} onClick={() => { setActiveIcon(item.id); if(item.action) item.action(); }} className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}>
                  <item.icon size={18} strokeWidth={2.5} />
                  {item.id === 'cart' && cartItems.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartItems.length}</span>}
                </div>
              ))}
            </div>
            <Link to="/register"><button className="btn-signup-vid ml-1 md:ml-2 text-xs md:text-sm">Sign Up</button></Link>
          </div>
        </div>
      </nav>

      {/* PRODUCT HERO SECTION */}
      <div className="pt-32">
        <div className="product-section">
          {/* LEFT - IMAGES */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[currentImageIndex]} alt={product.name} />
            </div>
            <div className="thumbnails">
              {product.images.map((img, idx) => (
                <div key={idx} className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`} onClick={() => setCurrentImageIndex(idx)}>
                  <img src={img} alt={`${product.name} ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - INFO */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="rating-section">
              <div className="rating-stars">{renderStars(product.rating)}</div>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="price-section">{product.price}</div>
            <p className="description-text">{product.description}</p>

            {/* TABS */}
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Key Features
              </button>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'description' && (
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px', fontSize: '14px' }}>
                {product.fullDescription}
              </p>
            )}

            {activeTab === 'features' && (
              <div className="features-list">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* QUANTITY */}
            <div className="quantity-section">
              <span style={{ fontWeight: 600, color: '#333' }}>{product.name}</span>
              <div className="quantity-box">
                <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={18} />
                </button>
                <input type="text" className="quantity-input" value={quantity} readOnly />
                <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* TOTAL PRICE */}
            <div style={{ background: '#238d7b', color: 'white', padding: '16px 20px', borderRadius: '50px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Total Price</span>
              <span style={{ fontSize: '24px', fontWeight: 800 }}>{product.price}</span>
            </div>

            {/* ACTIONS */}
            <div className="action-buttons">
              <button className="btn-add-cart" onClick={addToCart}>Add to Cart</button>
              <button 
                className={`btn-wishlist ${isInWishlist ? 'active' : ''}`}
                onClick={toggleWishlist}
              >
                <Heart size={24} fill={isInWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RECOMMENDED SECTION */}
      {recommendedProducts.length > 0 && (
        <div className="recommended-section">
          <h2 className="recommended-title">Recommended for You</h2>
          <p className="recommended-subtitle">Based on your preferences and browsing history</p>
          <div className="recommended-grid">
            {recommendedProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="recommended-card"
                onClick={() => {
                  setQuantity(1);
                  setActiveTab('description');
                  navigate(`/product/${prod.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="recommended-card-img">
                  <img src={prod.img} alt={prod.name} />
                </div>
                <div className="recommended-card-body">
                  <span className="recommended-card-badge">{prod.badge}</span>
                  <h3 className="recommended-card-name">{prod.name}</h3>
                  <div className="recommended-card-rating">
                    {renderStars(prod.rating)}
                  </div>
                  <p className="recommended-card-price">{prod.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <div style={{ marginBottom: '25px' }}>
              <img src="/images/shot2.png" alt="S.HOT" style={{ height: '45px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.8, marginBottom: '25px', fontWeight: 500 }}>
              Premium spirulina products for your health and wellbeing.
            </p>
          </div>
          <div className="footer-col">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/products"><a>All Products</a></Link></li>
              <li><a href="#">Spirulina Powder</a></li>
              <li><a href="#">Spirulina Tablets</a></li>
              <li><a href="#">Spirulina Diamonds</a></li>
              <li><a href="#">Baby S.HOTs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', maxWidth: '1200px', margin: '0 auto', padding: '0 40px', marginBottom: '30px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: '13px' }}>© 2026 SHOT. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '25px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.80)', cursor: 'pointer' }}><Facebook size={22} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.80)', cursor: 'pointer' }}><Instagram size={22} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.80)', cursor: 'pointer' }}><Youtube size={22} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;