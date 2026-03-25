const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#238d7b] text-white hover:bg-[#1a6e60]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-[#238d7b] text-[#238d7b] hover:bg-[#238d7b] hover:text-white'
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

export default Button;