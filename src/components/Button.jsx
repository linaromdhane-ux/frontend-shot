import { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-[#238d7b] text-white hover:bg-[#1a6e60]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-[#238d7b] text-[#238d7b] hover:bg-[#238d7b] hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Animated "Back to Home" button used on auth pages
const BackToHomeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-8 left-8">
      <Link
        to="/home"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center bg-[#29ac96] text-white shadow-lg
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
          ${isHovered ? 'w-[200px] h-12 rounded-full px-4' : 'w-12 h-12 rounded-2xl justify-center'}
        `}
      >
        <div className="relative w-8 h-6 shrink-0 flex items-center justify-center">
          {/* Arrow icon (shown on hover) */}
          <div className={`absolute flex items-center transition-all duration-500 ease-out ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-[2px] h-4 bg-white rounded-full mr-[2px]"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
          {/* House icon (default) */}
          <div className={`absolute transition-all duration-500 ease-in ${isHovered ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 19.875v-6.198c.03-.028.06-.056.091-.086L12 5.432z" />
            </svg>
          </div>
        </div>
        <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-w-[140px] ml-4 opacity-100' : 'max-w-0 opacity-0 ml-0'}`}>
          <span className="font-bold whitespace-nowrap text-base font-montserrat">Back to Home</span>
        </div>
      </Link>
    </div>
  );
};

// Primary action button with animated arrow on hover
const ActionButton = ({ children, onClick, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`w-full bg-[#238d7b] hover:bg-[#1db096] text-white font-bold py-4 rounded-3xl shadow-lg transition-all flex items-center justify-center gap-1 relative overflow-hidden ${className}`}
      {...props}
    >
      <span className={`transition-all duration-300 ${isHovered ? '-translate-x-1' : 'translate-x-0'}`}>
        {children}
      </span>
      <div className={`flex items-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0.5' : 'opacity-0 -translate-x-1'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        <span className="h-5 w-[2px] bg-white rounded-full ml-0.5 inline-block"></span>
      </div>
    </button>
  );
};

// Outline/secondary action button with animated arrow on hover
const OutlineActionButton = ({ children, onClick, disabled, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`w-full py-4 border border-[#1cb1a5] font-bold rounded-3xl transition-all flex items-center justify-center gap-1 relative overflow-hidden
        ${disabled
          ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300'
          : 'text-[#102321] hover:bg-[#ecfbf9] hover:text-black'
        } ${className}`}
      {...props}
    >
      <span className={`transition-all duration-300 ${isHovered ? '-translate-x-1' : 'translate-x-0'}`}>
        {children}
      </span>
      <div className={`flex items-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0.5' : 'opacity-0 -translate-x-1'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#1cb1a5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        <span className="h-5 w-[2px] bg-[#1cb1a5] rounded-full ml-0.5 inline-block"></span>
      </div>
    </button>
  );
};

export default Button;
export { BackToHomeButton, ActionButton, OutlineActionButton };