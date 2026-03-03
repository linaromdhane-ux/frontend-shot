import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe, X, Facebook, Instagram, Youtube, Headphones, Star, Menu } from 'lucide-react';

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
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });

  const allProducts = [
    {
      id: 101,
      name: 'Spirulina Powder',
      description: 'Premium organic spirulina Powder 100g',
      fullDescription: 'Our premium spirulina capsules are packed with essential nutrients to support your daily health routine. Each capsule contains 500mg of pure, high-quality spirulina that\'s been carefully sourced and tested for purity. Spirulina is rich in protein, vitamins, minerals, and antioxidants, making it an excellent supplement for overall wellness.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (50 available)',
      rating: 4.7,
      reviews: 2,
      img: '/images/p1.png',
      images: ['/images/p1.png', '/images/p1.png', '/images/p1.png', '/images/p1.png'],
      category: 'Powder',
      features: [
        '100% pure organic spirulina',
        '500mg per capsule',
        '60 capsules per bottle',
        'No additives or fillers',
        'Sustainably sourced'
      ],
      nutritionalInfo: [
        { label: 'Serving Size', value: '1 shot (2oz)' },
        { label: 'Spirulina', value: '1g' },
        { label: 'Vitamin C', value: '60% DV' },
        { label: 'Zinc', value: '20% DV' },
        { label: 'Ginger Extract', value: '200mg' }
      ],
      customerReviews: [
        { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
        { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
        { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
      ],
      overallRating: 4.7,
      totalReviews: 45
    },
    {
      id: 102,
      name: 'Spirulina Diamonds',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+250)',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (20 available)',
      rating: 4.8,
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
        { label: 'Capsules', value: 'See Pure Spirulina Capsules' },
        { label: 'Powder', value: 'See Spirulina Powder' }
      ],
      customerReviews: [
        { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
        { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
        { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
      ],
      overallRating: 4.7,
      totalReviews: 45
    },
    {
      id: 103,
      name: 'Baby S.HOTs',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
      fullDescription: 'Get the best of both worlds with our Daily Boost Bundle. This package includes our premium spirulina capsules and powder, giving you flexible options for incorporating this powerful superfood into your daily routine. Perfect for those who want to alternate between quick capsules on busy days and powder for recipes when you have more time.',
      price: '59,000 DT',
      priceNum: 59000,
      badge: 'New',
      badgeColor: '#22c55e',
      stock: 'In Stock (25 available)',
      rating: 4.8,
      reviews: 2,
      img: '/images/p3.jpg',
      images: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
      category: 'Shots',
      features: [
        '100% pure spirulina powder',
        'Easy to mix in drinks and food',
        '30 servings per container',
        'Rich in chlorophyll and phycocyanin',
        'Cold-pressed to preserve nutrients'
      ],
      nutritionalInfo: [
        { label: 'Capsules', value: 'See Pure Spirulina Capsules' },
        { label: 'Powder', value: 'See Spirulina Powder' }
      ],
      customerReviews: [
        { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
        { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
        { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
      ],
      overallRating: 4.7,
      totalReviews: 45
    },
    {
      id: 104,
      name: 'Spirulina Tablets',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
      fullDescription: 'Our premium spirulina tablets are easy to mix in drinks and food. 100% pure spirulina powder with 30 servings per container. Rich in chlorophyll and phycocyanin, cold-pressed to preserve nutrients.',
      price: '69,000 DT',
      priceNum: 69000,
      badge: 'Popular',
      badgeColor: '#f59e0b',
      stock: 'In Stock (35 available)',
      rating: 4.8,
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
        { label: 'Serving Size', value: '1 shot (2oz)' },
        { label: 'Spirulina', value: '1g' },
        { label: 'Vitamin C', value: '60% DV' },
        { label: 'Zinc', value: '20% DV' },
        { label: 'Ginger Extract', value: '200mg' }
      ],
      customerReviews: [
        { name: 'Frank', date: '2024-06-06', rating: 5, comment: 'Great for immunity, tastes good!' },
        { name: 'Alex X', date: '2024-06-06', rating: 5, comment: 'Great supplement for fast post-workout recovery.' },
        { name: 'Sarah', date: '2024-06-06', rating: 5, comment: 'Simple way to get my daily greens.' }
      ],
      overallRating: 4.7,
      totalReviews: 45
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(productId));
  const recommendedProducts = allProducts.filter(p => p.id !== parseInt(productId)).slice(0, 3);

  const getTotalPrice = () => {
    return (product.priceNum * quantity).toLocaleString('en-US');
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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

  const addToCart = () => {
    setCartItems(prev => [...prev, { ...product, quantity }]);
    setIsShopOpen(true);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setShowReviewModal(false);
    setReviewForm({ name: '', email: '', review: '', rating: 0 });
  };

  const handleSubscribe = () => {
    if (subscribeEmail.trim()) {
      setShowSubscribeModal(true);
      setSubscribeEmail('');
    }
  };

  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: () => { setIsWishlistOpen(true); setIsShopOpen(false); } },
    { id: 'cart', icon: ShoppingCart, action: () => { setIsShopOpen(true); setIsWishlistOpen(false); } },
    { id: 'user', icon: User }
  ];

  const navLinks = ['Home', 'Products', 'About us', 'Contact'];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24"
            fill="#f39c12" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
        {hasHalf && (
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        )}
        {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }, (_, i) => (
          <svg key={i + fullStars} width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </>
    );
  };

  const closeSidebars = () => {
    setIsWishlistOpen(false);
    setIsShopOpen(false);
    setActiveIcon(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] overflow-x-hidden" style={{ backgroundImage: "url('/images/Sign Up.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        * { font-family:'Montserrat',sans-serif; }

        .nav-fixed-video { background-color:rgba(45,75,68,.85); height:75px; backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); }
        .nav-link-item { color:white; opacity:.8; font-weight:600; font-size:14px; transition:all .3s ease; cursor:pointer; }
        .nav-link-item:hover { opacity:1; text-shadow:0 0 8px rgba(255,255,255,.5); }
        .icon-box-vid { width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:12px; transition:all .2s ease; color:white; cursor:pointer; position:relative; }
        .icon-box-vid:hover,.icon-box-active { background-color:white !important; color:#238d7b !important; transform:translateY(-2px); }
        .btn-signup-vid { background-color:white; color:#238d7b; font-weight:700; font-size:13px; height:38px; padding:0 20px; border-radius:50px; border:2px solid white; transition:all .3s ease; cursor:pointer; }
        .btn-signup-vid:hover { background-color:#238d7b; color:white !important; }

        /* MOBILE HEADER */
        .mobile-header {
          display: none;
        }
        @media (max-width: 1023px) {
          .mobile-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(45,75,68,.85);
            height: 70px;
            backdrop-filter: blur(12px);
            padding: 0 20px;
            border-bottom: 1px solid rgba(255,255,255,.1);
          }
          .desktop-nav {
            display: none !important;
          }
        }

        /* MOBILE MENU */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          z-index: 250;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: linear-gradient(135deg, #238d7b 0%, #1a6e60 100%);
          z-index: 300;
          padding: 30px 20px;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 25px rgba(0,0,0,0.3);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .mobile-menu-close {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mobile-menu-close:hover {
          background: white;
          transform: rotate(90deg);
        }
        .mobile-menu-close:hover svg {
          color: #238d7b;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
        }
        .mobile-menu-link {
          color: white;
          font-size: 17px;
          font-weight: 600;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .mobile-menu-link:hover {
          background: white;
          color: #238d7b;
          transform: translateX(5px);
        }

        .mobile-menu-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        .mobile-signup-btn {
          width: 100%;
          background: white;
          color: #238d7b;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          text-align: center;
        }
        .mobile-signup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .product-hero { max-width:1200px; margin:0 auto; padding:30px 35px 35px; display:grid; grid-template-columns: 1.15fr 1fr; gap:35px; align-items:center; }
        .product-images { display:flex; gap:14px; }
        .thumbnails { display:flex; flex-direction:column; gap:11px; }
        .thumbnail { width:80px; height:80px; border-radius:14px; cursor:pointer; overflow:hidden; border:3px solid rgba(255,255,255,0.7); transition:all .3s ease; background:rgba(255,255,255,0.8); box-shadow:0 4px 12px rgba(0,0,0,0.14); }
        .thumbnail:hover, .thumbnail.active { border-color:#238d7b; box-shadow:0 5px 15px rgba(0,0,0,0.2); transform:scale(1.06); }
        .thumbnail img { width:100%; height:100%; object-fit:cover; }
        .main-image-wrapper { background:rgba(255,255,255,0.88); border-radius:24px; padding:24px; box-shadow:0 14px 45px rgba(0,0,0,0.2); }
        .main-image { position:relative; background:transparent; border-radius:20px; overflow:hidden; display:flex; align-items:center; justify-content:center; width:100%; height:480px; }
        .main-image img { width:100%; height:100%; object-fit:contain; }

        .product-info h1 { font-size:30px; font-weight:700; color:#1a1a1a; margin-bottom:11px; line-height:1.3; letter-spacing:-0.3px; }
        .rating-section { display:flex; align-items:center; gap:12px; margin-bottom:17px; }
        .rating-stars { display:flex; gap:3px; }
        .rating-text { color:#2d2d2d; font-size:13px; font-weight:600; }
        .price-section { font-size:28px; font-weight:800; color:#238d7b; margin-bottom:17px; letter-spacing:-0.5px; }
        .description-text { color:#404040; line-height:1.6; margin-bottom:19px; font-size:13px; font-weight:500; }

        .key-features { background:transparent; padding:0; border-radius:0; margin-bottom:22px; }
        .key-features h3 { font-weight:700; color:#1a1a1a; margin-bottom:10px; font-size:14px; }
        .key-features ul { list-style:none; padding:0; margin:0; }
        .key-features li { padding:6px 0; color:#404040; font-size:13px; font-weight:500; line-height:1.5; }
        .key-features li:before { content:'• '; color:#238d7b; font-weight:bold; margin-right:8px; font-size:15px; }

        .cart-box { background:#238d7b; color:white; padding:22px; border-radius:18px; box-shadow:0 10px 32px rgba(35,141,123,0.3); }
        .cart-box-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
        .cart-box-title { font-weight:700; font-size:15px; }
        .quantity-controls { display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.14); padding:8px 12px; border-radius:50px; }
        .quantity-btn { background:rgba(255,255,255,0.2); border:none; cursor:pointer; color:white; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all .3s ease; font-size:14px; font-weight:700; }
        .quantity-btn:hover { background:rgba(255,255,255,0.3); }
        .quantity-input { width:38px; text-align:center; border:none; background:transparent; font-weight:700; font-size:15px; color:white; }

        .price-display { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; gap:14px; }
        .price-label { font-weight:600; font-size:13px; }
        .price-value { font-size:28px; font-weight:800; }

        .add-to-cart-btn { width:100%; padding:14px; background:white; color:#238d7b; border:none; border-radius:50px; font-weight:700; font-size:15px; cursor:pointer; transition:all .3s ease; box-shadow:0 5px 14px rgba(0,0,0,0.12); }
        .add-to-cart-btn:hover { background:#f5f5f5; transform:translateY(-1px); box-shadow:0 6px 16px rgba(0,0,0,0.14); }

        .tabs-section { max-width:1200px; margin:30px auto; padding:32px; background:rgba(255,255,255,0.42); border-radius:18px; }
        .tabs { display:flex; gap:30px; border-bottom:2px solid #238d7b; margin-bottom:28px; padding-bottom:0; }
        .tab { padding:14px 0; font-weight:600; color:#2d2d2d; cursor:pointer; border-bottom:3px solid transparent; transition:all .3s ease; font-size:14px; margin-bottom:-2px; }
        .tab.active { color:#238d7b; border-bottom-color:#238d7b; font-weight:700; }

        .tab-content { margin-bottom:22px; }
        .tab-content p { color:#404040; line-height:1.7; font-size:13px; font-weight:500; }
        .tab-content h2 { color:#1a1a1a; font-weight:700; margin-bottom:14px; font-size:17px; }

        .nutritional-table { width:100%; }
        .nutritional-table tr { border-bottom:1px solid rgba(0,0,0,0.08); }
        .nutritional-table td { padding:12px 0; font-size:13px; color:#404040; font-weight:500; }
        .nutritional-table td:first-child { color:#238d7b; font-weight:700; }

        .reviews-section { background:transparent; border-radius:0; padding:0; margin-bottom:22px; }
        .overall-rating { display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid rgba(0,0,0,0.08); }
        .rating-box { display:flex; align-items:center; gap:14px; }
        .rating-number { font-size:40px; font-weight:800; color:#1a1a1a; }
        .rating-info { }
        .rating-info-text { font-size:13px; color:#2d2d2d; font-weight:600; }
        .add-review-btn { background:#238d7b; color:white; padding:10px 24px; border:none; border-radius:50px; font-weight:700; cursor:pointer; font-size:13px; box-shadow:0 4px 12px rgba(35,141,123,0.28); transition:all .3s ease; }
        .add-review-btn:hover { background:#1a6e60; transform:translateY(-1px); box-shadow:0 5px 14px rgba(35,141,123,0.32); }

        .reviews-title { font-size:15px; font-weight:700; color:#1a1a1a; margin-bottom:19px; padding-bottom:14px; border-bottom:1px solid rgba(0,0,0,0.08); }

        .customer-reviews { display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; margin-top:19px; }
        .review-card { background:#238d7b; color:white; border-radius:14px; padding:18px; box-shadow:0 5px 14px rgba(35,141,123,0.22); transition:all .3s ease; }
        .review-card:hover { transform:translateY(-2px); box-shadow:0 6px 16px rgba(35,141,123,0.28); }
        .review-header { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .review-avatar { width:40px; height:40px; border-radius:50%; background:rgba(255,255,255,0.27); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; }
        .review-name { font-weight:700; font-size:13px; }
        .review-date { font-size:11px; opacity:0.85; }
        .review-stars { display:flex; gap:2px; margin-bottom:10px; }
        .review-text { font-size:12px; line-height:1.5; font-style:italic; font-weight:500; }

        .recommended-section { max-width:1200px; margin:35px auto; padding:32px; }
        .recommended-title { font-size:30px; font-weight:800; color:#238d7b; text-align:center; margin-bottom:10px; letter-spacing:-0.3px; }
        .recommended-subtitle { text-align:center; color:#404040; margin-bottom:32px; font-size:13px; font-weight:500; }
        .recommended-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; }
        .recommended-card { background:rgba(255,255,255,0.87); border:none; border-radius:18px; overflow:hidden; cursor:pointer; transition:all .3s ease; position:relative; box-shadow:0 7px 22px rgba(0,0,0,0.13); }
        .recommended-card:hover { transform:translateY(-7px); box-shadow:0 12px 32px rgba(0,0,0,0.16); }
        .recommended-card-img { width:100%; height:330px; background:white; overflow:hidden; display:flex; align-items:center; justify-content:center; position:relative; }
        .recommended-card-img img { width:100%; height:100%; object-fit:contain; padding:20px; }
        .recommended-card-body { padding:18px; }
        .recommended-card-badge { display:inline-block; background:#2563eb; color:white; padding:5px 13px; border-radius:50px; font-size:11px; font-weight:700; margin-bottom:10px; box-shadow:0 2px 6px rgba(37,99,235,0.22); }
        .recommended-card-name { font-weight:700; font-size:15px; color:#1a1a1a; margin-bottom:7px; }
        .recommended-card-rating { display:flex; gap:3px; margin-bottom:6px; }
        .recommended-card-stock { font-size:11px; color:#404040; margin-bottom:7px; font-weight:500; }
        .recommended-card-price { font-weight:800; font-size:18px; color:#238d7b; margin-bottom:12px; }
        .recommended-card-btn { background:#f39c12; color:white; padding:9px 18px; border:none; border-radius:50px; font-weight:700; font-size:12px; cursor:pointer; transition:all .3s ease; box-shadow:0 3px 10px rgba(243,156,18,0.22); }
        .recommended-card-btn:hover { background:#d68910; transform:translateY(-1px); box-shadow:0 4px 12px rgba(243,156,18,0.28); }
        .recommended-card-heart { position:absolute; top:12px; right:12px; width:40px; height:40px; border-radius:50%; background:white; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.14); transition:all .3s ease; }
        .recommended-card-heart:hover { transform:scale(1.1); box-shadow:0 4px 12px rgba(0,0,0,0.2); }
        .recommended-card-heart svg { color:#238d7b; width:18px; height:18px; }

        .stay-ahead-container { 
          background-image: url('/images/Sign Up.png'); 
          background-size: cover; 
          background-position: center; 
          background-repeat: no-repeat; 
          background-attachment: fixed; 
          position: relative; 
          padding: 40px 40px; 
          margin-top: 40px; 
        }
        .stay-ahead-overlay { position: absolute; inset: 0; background: transparent; }
        .stay-ahead-content { position: relative; z-index: 10; text-align: center; }
        .stay-ahead-title { 
          font-size: clamp(24px, 5vw, 48px); 
          font-weight: 800; 
          letter-spacing: -0.5px; 
          line-height: 1.2; 
          color: #0d4a3e; 
        }

        .footer-container { background: radial-gradient(circle at top right, #1f7a6a 0%, #0d4a3e 100%); color: white; padding: 65px 0 35px; }
        .footer-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 35px; max-width: 1200px; margin: 0 auto; padding: 0 35px; margin-bottom: 45px; }
        .footer-col h3 { font-size: 15px; font-weight: 700; color: white; margin-bottom: 18px; }
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .footer-col ul li { margin-bottom: 9px; }
        .footer-col ul li a { color: rgba(255,255,255,0.72); text-decoration: none; font-size: 13px; transition: color .3s ease; cursor:pointer; font-weight:500; }
        .footer-col ul li a:hover { color: white; }
        .footer-logo { margin-bottom: 20px; }
        .footer-logo img { height: 45px; width: auto; }
        .footer-description { font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.6; margin-bottom: 24px; }
        .footer-contact { display: flex; align-items: center; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.75); margin-bottom: 12px; }
        .footer-contact svg { width: 18px; height: 18px; flex-shrink: 0; }
        .footer-divider { border-top: 1px solid rgba(255,255,255,0.1); max-width: 1200px; margin: 0 auto; padding: 0 35px; margin-bottom: 30px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 35px; flex-wrap: wrap; gap: 20px; }
        .footer-copyright { color: rgba(255,255,255,0.60); font-size: 13px; }
        .footer-socials { display: flex; gap: 25px; }
        .footer-socials a { color: rgba(255,255,255,0.80); cursor: pointer; transition: color .3s ease; }
        .footer-socials a:hover { color: white; }

        .review-modal { position:fixed; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:500; }
        .review-modal-content { background:white; border-radius:20px; padding:35px; max-width:420px; width:100%; position:relative; box-shadow:0 22px 65px rgba(0,0,0,0.32); }
        .review-modal-header { text-align:center; margin-bottom:28px; }
        .review-modal-icon { width:60px; height:60px; border-radius:50%; background:#238d7b; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; box-shadow:0 4px 12px rgba(35,141,123,0.28); }
        .review-modal-icon svg { color:white; width:30px; height:30px; }
        .review-modal-title { font-size:22px; font-weight:700; color:#1a1a1a; margin-bottom:8px; }
        .review-modal-subtitle { font-size:13px; color:#404040; font-weight:500; }
        .review-stars-input { display:flex; gap:8px; justify-content:center; margin-bottom:24px; }
        .star-btn { background:none; border:none; cursor:pointer; font-size:32px; transition:transform .2s ease; }
        .star-btn:hover { transform:scale(1.12); }
        .form-group { margin-bottom:16px; }
        .form-group label { display:block; font-weight:600; color:#1a1a1a; margin-bottom:8px; font-size:13px; }
        .form-group input, .form-group textarea { width:100%; padding:10px; border:1px solid #e5e7eb; border-radius:8px; font-size:13px; font-family:'Montserrat', sans-serif; transition:all .3s ease; color:#1a1a1a; }
        .form-group textarea { resize:vertical; min-height:100px; }
        .form-group input:focus, .form-group textarea:focus { outline:none; border-color:#238d7b; box-shadow:0 0 0 3px rgba(35,141,123,0.12); }
        .submit-review-btn { width:100%; background:#238d7b; color:white; padding:12px; border:none; border-radius:50px; font-weight:700; font-size:14px; cursor:pointer; transition:all .3s ease; box-shadow:0 4px 12px rgba(35,141,123,0.28); }
        .submit-review-btn:hover { background:#1a6e60; transform:translateY(-1px); box-shadow:0 5px 14px rgba(35,141,123,0.32); }
        .close-modal-btn { position:absolute; top:20px; right:20px; background:none; border:none; color:#999; cursor:pointer; font-size:24px; transition:color .2s ease; }
        .close-modal-btn:hover { color:#1a1a1a; }

        @keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        @media (max-width: 768px) { 
          .product-hero { grid-template-columns: 1fr; gap: 22px; padding: 18px 18px; align-items: start; }
          .main-image-wrapper { padding: 14px; }
          .main-image { height: 320px; }
          .recommended-grid { grid-template-columns: 1fr; }
          .customer-reviews { grid-template-columns: 1fr; }
          .tabs-section { padding: 24px; }
          .recommended-section { padding: 24px; }
          .stay-ahead-container { margin-top: 30px; padding: 30px 20px; }
        }
      `}</style>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/images/shot2.png" alt="S.HOT" style={{ height: '35px' }} />
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={18} color="white" />
          </button>
        </div>

        <div className="mobile-menu-links">
          {navLinks.map((item) => {
            const linkPath = item === 'Products' ? '/products' : item === 'Home' ? '/' : item === 'About us' ? '/about' : '#';
            return (
              <Link 
                key={item} 
                to={linkPath} 
                className="mobile-menu-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="mobile-menu-footer">
          <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="mobile-signup-btn">Sign Up</div>
          </Link>
        </div>
      </div>

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
                <button onClick={toggleWishlist} className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all text-red-500 hover:scale-110"><Heart size={18} fill="currentColor" /></button>
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

      {(isWishlistOpen || isShopOpen || isMobileMenuOpen) && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={closeSidebars} />}

      {/* MOBILE HEADER - UNIQUEMENT SUR MOBILE */}
      <div className="mobile-header fixed top-0 left-0 z-[100] w-full">
        <Link to="/">
          <img src="/images/shot2.png" alt="S.HOT" style={{ height: '32px' }} />
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {icons.map((item) => (
              <div key={item.id} onClick={() => { setActiveIcon(item.id); if(item.action) item.action(); }} className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}>
                <item.icon size={18} strokeWidth={2.5} />
                {item.id === 'cart' && cartItems.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartItems.length}</span>}
              </div>
            ))}
          </div>
          <button className="icon-box-vid" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* NAVBAR DESKTOP - UNIQUEMENT SUR DESKTOP */}
      <nav className="desktop-nav fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
        <div className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
          <Link to="/"><div className="flex-shrink-0 cursor-pointer"><img src="/images/shot2.png" alt="S.HOT" className="h-7 md:h-9 w-auto" /></div></Link>
          <div className="flex items-center gap-10">
            {navLinks.map((item) => {
              const linkPath = item === 'Products' ? '/products' : item === 'Home' ? '/' : item === 'About us' ? '/about' : '#';
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

      {/* Le reste du code reste identique... (PRODUCT SECTION, TABS, etc.) - Je résume pour la longueur */}

      {/* PRODUCT SECTION */}
      <div className="pt-24 pb-16">
        <div className="product-hero">
          {/* LEFT - IMAGES */}
          <div className="product-images">
            <div className="thumbnails">
              {product.images.map((img, idx) => (
                <div key={idx} className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`} onClick={() => setCurrentImageIndex(idx)}>
                  <img src={img} alt={`${product.name} ${idx + 1}`} />
                </div>
              ))}
            </div>
            <div className="main-image-wrapper">
              <div className="main-image">
                <img src={product.images[currentImageIndex]} alt={product.name} />
              </div>
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

            {/* KEY FEATURES */}
            <div className="key-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* CART BOX */}
            <div className="cart-box">
              <div className="cart-box-header">
                <span className="cart-box-title">{product.name}</span>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    −
                  </button>
                  <input type="text" className="quantity-input" value={quantity} readOnly />
                  <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="price-display">
                <span className="price-label">TotalPrice</span>
                <span className="price-value">{formatPrice(getTotalPrice())} DT</span>
              </div>

              <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* TABS SECTION - (garde le code existant) */}
      <div className="px-4 md:px-12">
        <div className="tabs-section">
          {/* ... garde tout le contenu des tabs ... */}
        </div>
      </div>

      {/* RECOMMENDED SECTION - (garde le code existant) */}
      {/* JOIN NEWSLETTER - (garde le code existant) */}
      {/* FOOTER - (garde le code existant) */}
      {/* MODALS - (garde le code existant) */}

    </div>
  );
};

export default ProductDetails;