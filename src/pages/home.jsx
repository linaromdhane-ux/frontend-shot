import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe, X, Trash2, ShieldCheck, Zap, Headset, Leaf, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Home = () => {
  const words = ["Health", "Energy"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false); 
  const [isClearing, setIsClearing] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const bannerData = [
    { text: "0% Preservatives", color: "bg-[#f39c12]", icon: <Zap size={32} strokeWidth={3} /> },
    { text: "60% Natural Protein", color: "bg-[#a855f7]", icon: <ShieldCheck size={32} strokeWidth={3} /> },
    { text: "24/7 Customer Support", color: "bg-[#2980b9]", icon: <Headset size={32} strokeWidth={3} /> },
    { text: "100% Certified Organic", color: "bg-[#16a085]", icon: <Leaf size={32} strokeWidth={3} /> }
  ];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  const products = [
    {
      id: 101,
      name: 'Spirulina Powder',
      description: 'Premium organic spirulina Powder 100g',
      price: '59,000 DT',
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (50 available)',
      rating: 4,
      img: '/images/p1.png',
    },
    {
      id: 102,
      name: 'Spirulina Diamonds',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
      price: '59,000 DT',
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (20 available)',
      rating: 4,
      img: '/images/p2.png',
    },
    {
      id: 103,
      name: 'Baby S.HOTs',
      description: 'Premium organic spirulina in easy baby Shots format.',
      price: '59,000 DT',
      badge: 'New',
      badgeColor: '#22c55e',
      stock: 'In Stock (25 available)',
      rating: 4,
      img: '/images/p3.jpg',
    },
  ];

  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 2, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 3, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 4, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const toggleWishlistProduct = (product) => {
    const exists = wishlistItems.find(i => i.id === product.id);
    if (exists) {
      setWishlistItems(prev => prev.filter(i => i.id !== product.id));
    } else {
      setWishlistItems(prev => [...prev, { id: product.id, name: product.name, price: product.price, img: product.img }]);
    }
  };
  const isInWishlist = (id) => wishlistItems.some(i => i.id === id);

  const addProductToCart = (product) => {
    if (!cartItems.find(i => i.id === product.id)) {
      setCartItems(prev => [...prev, { id: product.id, name: product.name, price: product.price, img: product.img }]);
    }
    setIsShopOpen(true);
    setIsWishlistOpen(false);
  };

  const addToShop = (item) => {
    if (!cartItems.find(i => i.id === item.id)) setCartItems(prev => [...prev, item]);
    setIsShopOpen(true);
    setIsWishlistOpen(false);
  };

  const clearAllWishlist = () => {
    if (wishlistItems.length === 0) return;
    setIsClearing(true);
    setTimeout(() => { setWishlistItems([]); setIsClearing(false); }, 600);
  };
  const toggleHeart = (id) => setWishlistItems(prev => prev.filter(item => item.id !== id));

  const handleTyping = useCallback(() => {
    const fullText = words[index];
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setSpeed(150);
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setSpeed(100);
    }
    if (!isDeleting && displayText === fullText) setTimeout(() => setIsDeleting(true), 1500);
    else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % (words.length || 1));
    }
  }, [displayText, isDeleting, index, words]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, speed]);

  const closeSidebars = () => { setIsWishlistOpen(false); setIsShopOpen(false); setActiveIcon(null); };

  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: () => { setIsWishlistOpen(true); setIsShopOpen(false); } },
    { id: 'cart', icon: ShoppingCart, action: () => { setIsShopOpen(true); setIsWishlistOpen(false); } },
    { id: 'user', icon: User }
  ];
  const navLinks = ['Home', 'Products', 'About us', 'Contact'];

  const whyCards = [
    {
      id: 0, title: "Eco-Friendly Spirulina Production",
      description: "Our spirulina is sustainably sourced to promote both your health and the health of the environment.",
      activeColor: "#16a085", iconBg: "#16a085",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>),
    },
    {
      id: 1, title: "Spirulina for Energy and Immune Support",
      description: "Packed with essential nutrients, our spirulina supports your energy, immune system, and overall wellness.",
      activeColor: "#a855f7", iconBg: "#a855f7",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
    },
    {
      id: 2, title: "Pure and Natural Spirulina Supplement",
      description: "100% natural, pesticide-free, and GMO-free spirulina for optimal health and vitality.",
      activeColor: "#f39c12", iconBg: "#f39c12",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="20" y2="4"/><path d="M8.5 8.5L4 4"/><path d="M15.5 15.5L20 20"/><path d="M4 20l4-4"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/></svg>),
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg key={i} width="17" height="17" viewBox="0 0 24 24"
        fill={i < rating ? "#f39c12" : "none"}
        stroke={i < rating ? "#f39c12" : "#d1d5db"}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));

  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const handleSubscribe = () => {
    if (subscribeEmail.trim()) { setShowSubscribeModal(true); setSubscribeEmail(''); }
  };

  const influencers = [
    { name: 'Lina B',  role: 'Pro Athlete',      initials: 'LB' },
    { name: 'Adam L',  role: 'Music Teacher',     initials: 'AL' },
    { name: 'Emma D',  role: 'Fashion Designer',  initials: 'ED' },
    { name: 'Sarah K', role: 'Influencer',        initials: 'SK' },
    { name: 'Alex M',  role: 'Padel Coach',       initials: 'AM' },
  ];

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] bg-[#0c1312] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Dancing+Script:wght@700&display=swap');

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes arrowSlide { 0%{transform:translateX(0)} 50%{transform:translateX(5px)} 100%{transform:translateX(0)} }
        @keyframes popIn { 0%{transform:scale(.6);opacity:0} 100%{transform:scale(1);opacity:1} }

        .animate-float { animation:float 5s ease-in-out infinite; will-change:transform; }
        .font-kemangi { font-family:'Dancing Script',cursive; }
        * { font-family:'Montserrat',sans-serif; }

        .nav-fixed-video { background-color:rgba(45,75,68,.85); height:75px; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); }
        .nav-link-item { color:white; opacity:.8; font-weight:600; font-size:15px; transition:all .3s ease; }
        .nav-link-item:hover,.nav-link-active { opacity:1; text-shadow:0 0 8px rgba(255,255,255,.5); }
        .icon-box-vid { width:44px; height:44px; display:flex; align-items:center; justify-content:center; border-radius:14px; transition:all .2s ease; color:white; cursor:pointer; position:relative; }
        .icon-box-vid:hover,.icon-box-active { background-color:white !important; color:#238d7b !important; transform:translateY(-2px); }
        .btn-signup-vid { background-color:white; color:#238d7b; font-weight:700; font-size:14px; height:42px; padding:0 25px; border-radius:50px; border:2px solid white; transition:all .3s ease; }
        .btn-signup-vid:hover { background-color:#238d7b; color:white !important; border-color:#238d7b; transform:scale(1.05); }
        .why-card { background:rgba(255,255,255,.85); border:1px solid rgba(255,255,255,.95); border-radius:24px; backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); box-shadow:0 4px 20px rgba(0,0,0,.06); padding:44px 28px 36px; display:flex; flex-direction:column; align-items:center; text-align:center; cursor:pointer; transition:transform .35s ease,box-shadow .35s ease,background .35s ease; }
        .why-card.active { transform:translateY(-6px) scale(1.01); box-shadow:0 24px 50px rgba(0,0,0,.18); }
        .why-icon-box { width:90px; height:90px; border-radius:22px; display:flex; align-items:center; justify-content:center; margin-bottom:28px; flex-shrink:0; transition:background .35s ease,box-shadow .35s ease; box-shadow:0 6px 18px rgba(0,0,0,.15); }
        .why-card.active .why-icon-box { background:white !important; box-shadow:0 6px 18px rgba(0,0,0,.12); }
        .btn-all-products { display:inline-flex; align-items:center; gap:10px; background-color:#238d7b; color:white; font-weight:700; font-size:16px; padding:18px 52px; border-radius:50px; border:none; cursor:pointer; transition:background .3s ease,transform .2s ease,box-shadow .3s ease; box-shadow:0 8px 24px rgba(35,141,123,.35); letter-spacing:.02em; }
        .btn-all-products:hover { background-color:#1a6e60; transform:translateY(-2px); box-shadow:0 14px 32px rgba(35,141,123,.45); }
        .btn-all-products.clicked { background-color:#0f4f44; transform:scale(.97); }
        .btn-all-products .arrow-icon { display:inline-flex; }
        .btn-all-products:hover .arrow-icon,.btn-all-products.clicked .arrow-icon { animation:arrowSlide .5s ease; }
        .prod-card { background:white; border:1px solid #eef0f0; border-radius:20px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,.07); transition:transform .3s ease,box-shadow .3s ease; display:flex; flex-direction:column; position:relative; }
        .prod-card:hover { transform:translateY(-6px); box-shadow:0 18px 40px rgba(0,0,0,.13); }
        .prod-img-wrap { position:relative; width:100%; height:300px; background:#f7f9f8; overflow:hidden; flex-shrink:0; }
        .prod-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform .4s ease; }
        .prod-card:hover .prod-img-wrap img { transform:scale(1.04); }
        .prod-badge { position:absolute; top:14px; left:14px; z-index:3; color:white; font-weight:700; font-size:12px; padding:5px 14px; border-radius:50px; pointer-events:none; }
        .prod-heart { position:absolute; top:12px; right:12px; z-index:3; width:36px; height:36px; border-radius:50%; background:white; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 10px rgba(0,0,0,.12); transition:transform .2s ease; }
        .prod-heart:hover { transform:scale(1.18); }
        .prod-cart-overlay { position:absolute; inset:0; z-index:2; display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity .25s ease; background:rgba(0,0,0,.04); }
        .prod-card:hover .prod-cart-overlay { opacity:1; }
        .prod-cart-btn { width:54px; height:54px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,.18); cursor:pointer; border:none; animation:popIn .22s ease; transition:transform .2s ease; }
        .prod-cart-btn:hover { transform:scale(1.1); }
        .prod-body { padding:18px 20px 22px; display:flex; flex-direction:column; flex:1; }
        .prod-stars { display:flex; gap:2px; margin-bottom:9px; }
        .prod-name { font-weight:700; font-size:16px; color:#111827; margin-bottom:6px; }
        .prod-desc { font-size:13px; color:#6b7280; line-height:1.55; margin-bottom:10px; }
        .prod-price { font-weight:800; font-size:18px; color:#238d7b; margin-bottom:8px; }
        .prod-stock { font-size:12px; color:#9ca3af; }
        .btn-shop-orange { display:inline-flex; align-items:center; gap:7px; background-color:#f39c12; color:white; font-weight:700; font-size:13px; padding:11px 22px; border-radius:50px; border:none; cursor:pointer; box-shadow:0 4px 14px rgba(243,156,18,.4); transition:background .2s ease,transform .15s ease; flex-shrink:0; }
        .btn-shop-orange:hover { background-color:#d68910; transform:translateY(-1px); }
        .btn-shop-orange:active { transform:scale(.96); }
        
        .vid-placeholder { 
          position: relative; 
          border-radius: 24px; 
          overflow: hidden; 
          height: 380px; 
          background: linear-gradient(160deg, #d1ede8 0%, #a8ddd3 50%, #c5e8e3 100%); 
          box-shadow: 0 8px 32px rgba(0,0,0,0.15); 
          flex-shrink: 0; 
        }
        
        .vid-placeholder .vid-inner { 
          position: absolute; 
          inset: 0; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        
        .vid-play-btn { 
          width: 80px; 
          height: 80px; 
          border-radius: 50%; 
          background: #f39c12; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          box-shadow: 0 8px 32px rgba(243,156,18,0.65); 
          cursor: pointer; 
          transition: transform .2s ease, box-shadow .2s ease; 
          border: none; 
        }
        
        .vid-play-btn:hover { 
          transform: scale(1.12); 
          box-shadow: 0 12px 40px rgba(243,156,18,0.8); 
        }
        
        .vid-info { 
          position: absolute; 
          bottom: 0; 
          left: 0; 
          right: 0; 
          padding: 16px 20px; 
          background: linear-gradient(transparent, rgba(0,0,0,0.7)); 
          display: flex; 
          align-items: center; 
          gap: 12px; 
        }
        
        .vid-avatar { 
          width: 48px; 
          height: 48px; 
          border-radius: 50%; 
          background: #238d7b; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-weight: 700; 
          font-size: 13px; 
          border: 3px solid white; 
          flex-shrink: 0; 
        }
        
        .gradient-title { background: linear-gradient(90deg, #1a1a1a 0%, #238d7b 50%, #1a1a1a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 800; }
        .signup-bg { background-image: url('/images/Sign Up.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; }
        .stay-ahead-container { background-image: url('/images/Sign Up.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; position: relative; padding: 80px 40px; }
        .stay-ahead-overlay { position: absolute; inset: 0; background: transparent; }
        .stay-ahead-content { position: relative; z-index: 10; text-align: center; }
        .stay-ahead-title { font-size: clamp(24px, 5vw, 48px); font-weight: 800; letter-spacing: -0.5px; line-height: 1.2; color: #0d4a3e; }
        
        /* FOOTER CLASSES - MATCHING CAPTURE */
        .footer-container { background: radial-gradient(circle at top right, #1f7a6a 0%, #0d4a3e 100%); color: white; padding: 80px 0 40px; }
        .footer-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 50px; max-width: 1200px; margin: 0 auto; padding: 0 40px; margin-bottom: 60px; }
        .footer-col h3 { font-size: 18px; font-weight: 700; color: white; margin-bottom: 25px; text-transform: capitalize; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-col ul li { margin-bottom: 12px; }
        .footer-col ul li a { color: rgba(255,255,255,0.70); text-decoration: none; font-size: 15px; transition: color .3s ease; }
        .footer-col ul li a:hover { color: white; }
        .footer-logo { margin-bottom: 25px; }
        .footer-logo img { height: 45px; width: auto; }
        .footer-description { color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.8; margin-bottom: 25px; font-weight: 500; }
        .footer-contact { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; color: rgba(255,255,255,0.80); font-size: 14px; }
        .footer-contact svg { flex-shrink: 0; width: 18px; height: 18px; color: rgba(255,255,255,0.6); }
        .footer-divider { border-top: 1px solid rgba(255,255,255,0.1); max-width: 1200px; margin: 0 auto; padding: 0 40px; margin-bottom: 30px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 40px; flex-wrap: wrap; gap: 20px; }
        .footer-copyright { color: rgba(255,255,255,0.60); font-size: 13px; }
        .footer-socials { display: flex; gap: 25px; align-items: center; }
        .footer-socials a { color: rgba(255,255,255,0.80); transition: all .3s ease; display: flex; align-items: center; justify-content: center; }
        .footer-socials a:hover { color: white; transform: scale(1.1); }
        @media (max-width: 768px) { .footer-top { gap: 30px; padding: 0 20px; } .footer-bottom { padding: 0 20px; justify-content: center; text-align: center; } }
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
              <div key={item.id} className={`flex items-center justify-between border-b border-gray-100 pb-6 transition-all duration-500 ${isClearing ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                  </div>
                  <div><h4 className="font-bold text-[#0f1a18]">{item.name}</h4><p className="text-[#238d7b] font-bold">{item.price}</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => addToShop(item)} className="w-10 h-10 bg-gray-50 text-[#238d7b] rounded-full flex items-center justify-center transition-all hover:bg-[#238d7b] hover:text-white"><ShoppingCart size={18} /></button>
                  <button onClick={() => toggleHeart(item.id)} className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all text-red-500 hover:scale-110"><Heart size={18} fill="currentColor" /></button>
                </div>
              </div>
            )) : <p className="text-center text-gray-400 mt-10">Your wishlist is empty.</p>}
          </div>
          <button onClick={clearAllWishlist} disabled={wishlistItems.length === 0}
            className={`w-full py-3.5 rounded-full font-bold mt-6 flex items-center justify-center gap-3 transition-all active:scale-95 border-2 ${wishlistItems.length === 0 ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed' : 'bg-white text-[#333] border-[#238d7b] hover:bg-gray-50'}`}>
            Clear Wishlist {isClearing && <Trash2 size={20} className="text-[#238d7b] animate-bounce" />}
          </button>
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
            {cartItems.length > 0 ? cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                  </div>
                  <div><h4 className="font-bold text-[#0f1a18]">{item.name}</h4><p className="text-[#238d7b] font-bold">{item.price}</p></div>
                </div>
              </div>
            )) : <p className="text-center text-gray-400 mt-10">Your shop is empty.</p>}
          </div>
          <button className="w-full py-4 bg-[#238d7b] text-white rounded-full font-bold mt-6 hover:bg-[#1a6e60] transition-all">Checkout</button>
        </div>
      </div>

      {(isWishlistOpen || isShopOpen) && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={closeSidebars} />}

      <div className={(isWishlistOpen || isShopOpen) ? "pointer-events-none select-none" : ""}>

        {/* HERO */}
        <header className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 39.png')" }}>
          <div className="fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
            <nav className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
              <div className="flex-shrink-0"><img src="/images/shot2.png" alt="S.HOT" className="h-7 md:h-9 w-auto" /></div>
              <div className="hidden lg:flex items-center gap-10" onMouseLeave={() => setActiveLink(null)}>
                {navLinks.map((item) => (<button key={item} onMouseEnter={() => setActiveLink(item)} className={`nav-link-item ${activeLink === item ? 'nav-link-active' : ''}`}>{item}</button>))}
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
            </nav>
          </div>

          <div className="relative z-20 container mx-auto px-6 md:px-15 pt-48 md:pt-56 text-white">
            <div className="flex items-center gap-3 mb-6 bg-gray-950/70 w-fit px-4 py-2.5 md:py-3 rounded-full backdrop-blur-md border border-white/20">
              <div className="w-2 h-2 bg-[#238d7b] rounded-full relative flex items-center justify-center"><div className="absolute w-full h-full bg-[#238d7b] rounded-full animate-ping opacity-75"></div></div>
              <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] opacity-90">Experience the Power of Spirulina</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1]">
              Premium <br /> Spirulina Supplement <br />
              For <span className="text-[#238d7b] font-kemangi text-6xl md:text-9xl ml-2 md:ml-4 inline-block">
                {displayText}<span className="animate-pulse text-white/50 font-sans text-3xl md:text-5xl ml-1">|</span>
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 mt-12 md:mt-16">
              <button className="bg-[#238d7b] text-white px-9 py-4 rounded-full font-extrabold flex items-center gap-4 transition-all shadow-[0_0_25px_rgba(35,141,123,0.5)] pointer-events-auto group hover:bg-[#1f7a6a] active:!bg-[#47cab4] active:scale-95">
                Shop now
                <span className="bg-white text-[#238d7b] rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
              <button className="group bg-white text-black border border-black/10 px-9 py-4 rounded-full font-bold flex items-center gap-3 transition-all pointer-events-auto hover:bg-gray-100 active:!bg-[#238d7b] active:!text-white active:scale-95">
                Join our community
                <svg className="text-[#0e8471] group-active:!text-white transition-colors" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.032 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.314l.542 1.312c.058.14.096.303.003.488l-.204.412c-.09.13-.184.216-.08.396.104.18.459.758.986 1.225.679.602 1.252.788 1.432.874.18.086.285.071.39-.051.105-.122.446-.519.563-.695.117-.175.234-.145.391-.087l1.314.618c.157.073.262.111.3.173.038.063.038.36-.106.765zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.302C8.36 21.528 10.103 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.166-.431-4.492-1.182l-.322-.182-2.413.634.646-2.355-.2-.318A7.953 7.953 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute right-[-5%] md:right-[-2%] bottom-0 w-[60%] md:w-[50%] h-[70%] md:h-[90%] flex justify-center items-end z-10 pointer-events-none">
            <div className="relative animate-float pointer-events-auto">
              <img src="/public/images/Group_76.png" alt="SHOT Product Group" className="max-h-[400px] md:max-h-[700px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </header>

        {/* BANNER */}
        <div className={`w-full transition-colors duration-700 ease-in-out py-12 flex items-center justify-center overflow-hidden border-y border-white/5 ${bannerData[currentBanner].color}`}>
          <div className="flex items-center gap-8 px-10">
            <span className="text-white transform scale-125">{bannerData[currentBanner].icon}</span>
            <span className="text-white text-3xl md:text-[32px] font-bold tracking-normal whitespace-nowrap leading-none">
              {bannerData[currentBanner].text}
            </span>
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="signup-bg">

          {/* WHY SHOULD YOU CHOOSE */}
          <div className="py-24 md:py-28 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] gradient-title mb-5 leading-tight">
                Why Should You Choose S.HOT ?
              </h2>
              <p className="text-gray-500 text-base md:text-[17px] max-w-8xl mx-auto mb-16 leading-relaxed font-medium">
                Our premium spirulina is carefully cultivated, processed, and tested to ensure the highest nutritional value and health benefits for you and your family.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {whyCards.map((card) => {
                  const isActive = activeCard === card.id;
                  return (
                    <div key={card.id}
                      className={`why-card${isActive ? ' active' : ''}`}
                      style={isActive ? { backgroundColor: card.activeColor, borderColor: card.activeColor } : {}}
                      onMouseEnter={() => setActiveCard(card.id)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <div className="why-icon-box" style={{ backgroundColor: isActive ? 'white' : card.iconBg }}>
                        <span style={{ color: isActive ? card.activeColor : 'white' }}>{card.icon}</span>
                      </div>
                      <h3 className="font-bold text-[15px] md:text-[16px] leading-snug transition-colors duration-300"
                        style={{ color: isActive ? 'white' : '#1a2e2a' }}>
                        {card.title}
                      </h3>
                      {isActive && <p className="text-white/90 text-sm mt-4 leading-relaxed font-medium">{card.description}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* OUR PREMIUM PRODUCTS */}
          <div className="pt-4 pb-10 px-6 md:px-12 text-center">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-[32px] md:text-[40px] gradient-title mb-5 leading-tight">
                Our Premium Products
              </h2>
              <p className="text-gray-500 text-base md:text-[17px] mb-10 leading-relaxed font-medium">
                Discover our most popular spirulina products for your health and wellness.
              </p>
              <button
                className={`btn-all-products${btnClicked ? ' clicked' : ''}`}
                onClick={() => { setBtnClicked(true); setTimeout(() => setBtnClicked(false), 600); }}
              >
                All Products
                <span className="arrow-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="pb-28 px-6 md:px-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <div key={product.id} className="prod-card"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="prod-img-wrap">
                    <img src={product.img} alt={product.name} />
                    <span className="prod-badge" style={{ backgroundColor: product.badgeColor }}>{product.badge}</span>
                    <button className="prod-heart" onClick={(e) => { e.stopPropagation(); toggleWishlistProduct(product); }}>
                      <Heart size={17} strokeWidth={2}
                        fill={isInWishlist(product.id) ? '#ef4444' : 'none'}
                        stroke={isInWishlist(product.id) ? '#ef4444' : '#9ca3af'} />
                    </button>
                    {hoveredProduct === product.id && (
                      <div className="prod-cart-overlay">
                        <button className="prod-cart-btn" onClick={(e) => { e.stopPropagation(); addProductToCart(product); }}>
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
                      <button className="btn-shop-orange" onClick={(e) => { e.stopPropagation(); addProductToCart(product); }}>
                        Shop
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THEY CHOOSE SHOT */}
          <div className="pb-32 px-8 md:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-[30px] md:text-[40px] gradient-title text-center mb-4 leading-tight">
                They Choose SHOT
              </h2>
              <p className="text-gray-700 text-base md:text-[16px] text-center max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                Real energy, captured on camera. See how top influencers fuel their daily hustle and maintain peak performance with S.HOT spirulina.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-5">
                {influencers.map((person, i) => (
                  <div key={i} className="vid-placeholder">
                    <div className="vid-inner">
                      <button className="vid-play-btn">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </button>
                    </div>
                    <div className="vid-info">
                      <div className="vid-avatar">{person.initials}</div>
                      <div>
                        <div style={{ color: 'white', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{person.name}</div>
                        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 500 }}>{person.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STAY AHEAD */}
          <div className="stay-ahead-container">
            <div className="stay-ahead-overlay"></div>
            <div className="stay-ahead-content max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="stay-ahead-title">Stay Ahead of the Curve</h2>
            </div>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div style={{ background: 'linear-gradient(135deg, #0d3d33 0%, #0f5a47 40%, #0d4a3a 70%, #0a3328 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '38%', backgroundImage: "url('/images/Frame 302.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22 }} />
          <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-xl">
              <h2 style={{ color: '#4dd9b8', fontWeight: 800, fontSize: 28, marginBottom: 14 }}>Stay Informed</h2>
              <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: 15, lineHeight: 1.65, marginBottom: 32 }}>
                Subscribe to our newsletter to receive health tips, special offers, and new product announcements.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  value={subscribeEmail}
                  onChange={e => setSubscribeEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  style={{
                    flex: '1 1 260px', padding: '15px 22px', borderRadius: 50, border: '2px solid rgba(77,217,184,0.55)',
                    background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 14, outline: 'none', backdropFilter: 'blur(6px)'
                  }}
                  onFocus={e => e.target.style.borderColor = '#4dd9b8'}
                  onBlur={e => e.target.style.borderColor = 'rgba(77,217,184,0.55)'}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    padding: '15px 34px', borderRadius: 50, background: '#238d7b', color: 'white', fontWeight: 700, fontSize: 15,
                    border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .2s ease, transform .15s ease',
                    boxShadow: '0 6px 20px rgba(35,141,123,0.45)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1a6e60'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#238d7b'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer-container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/images/shot2.png" alt="S.HOT" />
              </div>
              <p className="footer-description">Premium spirulina products for your health and wellbeing. We're committed to providing the highest quality, sustainably sourced spirulina to support your wellness journey.</p>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>shotpremiumspirulina@gmail.com</span>
              </div>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+216 46 307 550</span>
              </div>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Tunis, Tunisia</span>
              </div>
            </div>
            <div className="footer-col">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">All Products</a></li>
                <li><a href="#">Spirulina Powder</a></li>
                <li><a href="#">Spirulina Tablets</a></li>
                <li><a href="#">Spirulina Diamonds</a></li>
                <li><a href="#">Baby S.HOTs</a></li>
                <li><a href="#">Bundles</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 SHOT. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#" title="Facebook"><Facebook size={22} /></a>
              <a href="#" title="Instagram"><Instagram size={22} /></a>
              <a href="#" title="YouTube"><Youtube size={22} /></a>
              <a href="#" title="Twitter" className="font-bold text-xl ml-2">X</a>
            </div>
          </div>
        </footer>

      </div>

      {/* MODAL */}
      {showSubscribeModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setShowSubscribeModal(false)}>
          <div style={{ background: 'white', borderRadius: 24, padding: '52px 40px 44px', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.25)', animation: 'popIn .3s ease' }}
            onClick={e => e.stopPropagation()}>
            <img src="/images/logo_SHOT.png" alt="S.HOT" style={{ height: 36, objectFit: 'contain', marginBottom: 36 }} />
            <div style={{ width: 90, height: 90, borderRadius: '50%', border: '3px solid #238d7b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#238d7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: 22, color: '#111827', marginBottom: 12 }}>Thank you !</h3>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>Please check your inbox to confirm your subscription.</p>
            <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '16px', borderRadius: 50, background: '#238d7b', color: 'white', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background .2s ease' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a6e60'}
              onMouseLeave={e => e.currentTarget.style.background = '#238d7b'}>
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;