import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe, X, Trash2, ShieldCheck, Zap, Headset, Leaf } from 'lucide-react';

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

  // --- Logique de la bande défilante (Couleurs et Textes ajustés) ---
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
  
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 2, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 3, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
    { id: 4, name: 'Spirulina Powder', price: '59.000DT', img: '/images/Rectangle 56.png' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToShop = (item) => {
    if (!cartItems.find(i => i.id === item.id)) {
      setCartItems(prev => [...prev, item]);
    }
    setIsShopOpen(true);
    setIsWishlistOpen(false);
  };

  const clearAllWishlist = () => {
    if (wishlistItems.length === 0) return;
    setIsClearing(true);
    setTimeout(() => {
      setWishlistItems([]);
      setIsClearing(false);
    }, 600); 
  };

  const toggleHeart = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const handleTyping = useCallback(() => {
    const fullText = words[index];
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setSpeed(150);
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setSpeed(100);
    }

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % (words.length || 1));
    }
  }, [displayText, isDeleting, index, words]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, speed]);

  const closeSidebars = () => {
    setIsWishlistOpen(false);
    setIsShopOpen(false);
    setActiveIcon(null);
  };

  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: () => { setIsWishlistOpen(true); setIsShopOpen(false); } },
    { id: 'cart', icon: ShoppingCart, action: () => { setIsShopOpen(true); setIsWishlistOpen(false); } },
    { id: 'user', icon: User }
  ];

  const navLinks = ['Home', 'Products', 'About us', 'Contact'];

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] bg-[#0c1312] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Dancing+Script:wght@700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; will-change: transform; }
        .font-kemangi { font-family: 'Dancing Script', cursive; }
        
        * { font-family: 'Montserrat', sans-serif; }

        .nav-fixed-video {
          background-color: rgba(45, 75, 68, 0.85);
          height: 75px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-link-item { color: white; opacity: 0.8; font-weight: 600; font-size: 15px; transition: all 0.3s ease; }
        .nav-link-item:hover, .nav-link-active { opacity: 1; text-shadow: 0 0 8px rgba(255, 255, 255, 0.5); }

        .icon-box-vid {
          width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
          border-radius: 14px; transition: all 0.2s ease; color: white; cursor: pointer;
          position: relative;
        }
        .icon-box-vid:hover, .icon-box-active { background-color: white !important; color: #238d7b !important; transform: translateY(-2px); }

        .btn-signup-vid {
          background-color: white; color: #238d7b; font-weight: 700; font-size: 14px;
          height: 42px; padding: 0 25px; border-radius: 50px; border: 2px solid white; transition: all 0.3s ease;
        }
        .btn-signup-vid:hover { background-color: #238d7b; color: white !important; border-color: #238d7b; transform: scale(1.05); }
      `}</style>

      {/* --- SIDEBARS --- */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0f1a18]">Wishlist</h2>
            <button onClick={closeSidebars} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} className="text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div key={item.id} className={`flex items-center justify-between border-b border-gray-100 pb-6 transition-all duration-500 ${isClearing ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100"><img src={item.img} alt={item.name} className="max-h-full object-contain" /></div>
                    <div><h4 className="font-bold text-[#0f1a18]">{item.name}</h4><p className="text-[#238d7b] font-bold">{item.price}</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => addToShop(item)} className="w-10 h-10 bg-gray-50 text-[#238d7b] rounded-full flex items-center justify-center transition-all hover:bg-[#238d7b] hover:text-white"><ShoppingCart size={18} /></button>
                    <button onClick={() => toggleHeart(item.id)} className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all text-red-500 hover:scale-110"><Heart size={18} fill="currentColor" /></button>
                  </div>
                </div>
              ))
            ) : <p className="text-center text-gray-400 mt-10">Your wishlist is empty.</p>}
          </div>
          <button onClick={clearAllWishlist} disabled={wishlistItems.length === 0} className={`w-full py-3.5 rounded-full font-bold mt-6 flex items-center justify-center gap-3 transition-all active:scale-95 border-2 ${wishlistItems.length === 0 ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed' : 'bg-white text-[#333] border-[#238d7b] hover:bg-gray-50'}`}>Clear Wishlist {isClearing && <Trash2 size={20} className="text-[#238d7b] animate-bounce" />}</button>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[200] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out ${isShopOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8"><h2 className="text-2xl font-bold text-[#0f1a18]">My Shop</h2><button onClick={closeSidebars} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} className="text-gray-500" /></button></div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {cartItems.length > 0 ? cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-2 border border-gray-100"><img src={item.img} alt={item.name} className="max-h-full object-contain" /></div>
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
        <header className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 39.png')" }}>
            <div className="fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
              <nav className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
                <div className="flex-shrink-0"><img src="/images/negative-logo-shot-Photoroom 1.png" alt="S.HOT" className="h-7 md:h-9 w-auto" /></div>
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

        {/* --- BANDE DYNAMIQUE (TYPOGRAPHIE CORRIGÉE SELON CAPTURE) --- */}
        <div className={`w-full transition-colors duration-700 ease-in-out py-12 flex items-center justify-center overflow-hidden border-y border-white/5 ${bannerData[currentBanner].color}`}>
          <div className="flex items-center gap-8 px-10">
            <span className="text-white transform scale-125">{bannerData[currentBanner].icon}</span>
            {/* Changement ici : Retrait de 'uppercase' et utilisation de font-bold (700) */}
            <span className="text-white text-3xl md:text-[32px] font-bold tracking-normal whitespace-nowrap leading-none">
              {bannerData[currentBanner].text}
            </span>
          </div>
        </div>

        <section className="relative z-10 py-20 md:py-32 px-6 md:px-12 bg-[#0f1a18]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 md:mb-16 font-kemangi">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="group h-auto md:h-72 bg-[#1a2e2a] rounded-3xl border border-white/5 p-8 md:p-10 text-white hover:border-[#238d7b]/50 transition-all duration-300 hover:-translate-y-2">
                      <h3 className="text-2xl font-bold mb-4 text-[#238d7b]">100% Organic</h3>
                      <p className="opacity-70 text-lg leading-relaxed">Pure spirulina grown in optimal conditions with zero chemicals or additives.</p>
                  </div>
              </div>
            </div>
        </section>
      </div>
      <div className="h-[200px] md:h-[400px] bg-[#0f1a18]"></div>
    </div>
  );
};

export default Home;