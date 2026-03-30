import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Leaf, Recycle, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Ajouté

// Import des components - CHEMINS CORRIGÉS
import Navbar from '../components/Navbar';
import MobileHeader from '../components/MobileHeader';
import MobileMenu from '../components/MobileMenu';
import WishlistSidebar from '../components/WishlistSidebar';
import ShopSidebar from '../components/ShopSidebar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SubscribeModal from '../components/SubscribeModal';

// Hooks des Contexts
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const AboutUs = () => {
  const { t } = useTranslation(); // Ajouté
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [activeValueCard, setActiveValueCard] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. Récupération de la Wishlist via le Context global
  const { 
    wishlistItems, 
    isClearing, 
    toggleWishlist, 
    removeItem, 
    clearAll, 
    isInWishlist 
  } = useWishlist();

  // 2. Récupération du Panier et des contrôles de sidebars
  const {
    cartItems,
    isWishlistOpen,
    isShopOpen,
    addToCart,
    openWishlist,
    openShop,
    closeSidebars,
  } = useCart();

  const handleCloseSidebars = () => {
    closeSidebars();
    setActiveIcon(null);
    setIsMobileMenuOpen(false);
  };

  const handleSubscribe = () => { 
    if (subscribeEmail.trim()) { 
      setShowSubscribeModal(true); 
      setSubscribeEmail(''); 
    } 
  };

  const addToShop = (item) => {
    addToCart(item);
    openShop();
  };

  const values = [
    {
      id: 1,
      icon: <Leaf size={32} strokeWidth={2} />,
      title: t('about_val1_t'),
      text: t('about_val1_d'),
      color: "#0f766e"
    },
    {
      id: 2,
      icon: <Recycle size={32} strokeWidth={2} />,
      title: t('about_val2_t'),
      text: t('about_val2_d'),
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: <HeartHandshake size={32} strokeWidth={2} />,
      title: t('about_val3_t'),
      text: t('about_val3_d'),
      color: "#f59e0b"
    }
  ];

  const testimonials = [
    {
      name: "Michael T",
      role: t('role_coach'),
      stars: 5,
      text: t('testi_1')
    },
    {
      name: "Sarah J",
      role: t('role_fitness'),
      stars: 5,
      text: t('testi_2')
    },
    {
      name: "Alex R",
      role: t('role_athlete'),
      stars: 5,
      text: t('testi_3')
    }
  ];

  const influencers = [
    { name: 'Lina B',  role: 'Pro Athlete',     initials: 'LB' },
    { name: 'Adam L',  role: 'Music Teacher',    initials: 'AL' },
    { name: 'Emma D',  role: 'Fashion Designer', initials: 'ED' },
    { name: 'Sarah K', role: 'Influencer',       initials: 'SK' },
    { name: 'Alex M',  role: 'Padel Coach',      initials: 'AM' },
  ];

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] overflow-x-hidden">...
    </div>
  );
};

export default AboutUs;
