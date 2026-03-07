import { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Headset, Leaf } from 'lucide-react';

const Banner = () => {
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

  return (
    <div className={`w-full transition-colors duration-700 ease-in-out py-12 flex items-center justify-center overflow-hidden border-y border-white/5 ${bannerData[currentBanner].color}`}>
      <div className="flex items-center gap-8 px-10">
        <span className="text-white transform scale-125">{bannerData[currentBanner].icon}</span>
        <span className="text-white text-3xl md:text-[32px] font-bold tracking-normal whitespace-nowrap leading-none">
          {bannerData[currentBanner].text}
        </span>
      </div>
    </div>
  );
};

export default Banner;