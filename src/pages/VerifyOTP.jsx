import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BackToHomeButton, ActionButton, OutlineActionButton } from '../components/Button';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // --- Logique du Compteur ---
  const [timeLeft, setTimeLeft] = useState(300); // 300 secondes = 5 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formattage du temps (mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleResend = () => {
    if (timeLeft === 0) {
      // Logique pour renvoyer le code ici
      setTimeLeft(300); // Relancer le compteur après clic
    }
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value) element.nextSibling.focus();
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* --- Bouton Back to Home --- */}
      <BackToHomeButton />

      <div className="w-full max-w-[500px] bg-white rounded-[40px] p-10 shadow-sm flex flex-col items-center border border-gray-100 text-center">
        <div className="mb-10 h-7">
          <img src="/images/logo_SHOT.png" alt="S.HOT Logo" className="h-full w-auto" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
        <p className="text-gray-600 text-sm mb-10 px-4">Enter the verification code sent to your inbox</p>

        <div className="flex justify-center gap-4 mb-10">
          {otp.map((data, index) => (
            <input 
              key={index} 
              type="text" 
              maxLength="1" 
              className="w-14 h-14 border border-gray-200 rounded-2xl text-center text-xl font-bold focus:border-[#0a9382] outline-none transition-all" 
              value={data} 
              onChange={e => handleChange(e.target, index)} 
            />
          ))}
        </div>

        <Link to="/reset-password" title="Continue" className="block w-full mb-8">
          <ActionButton>Continue</ActionButton>
        </Link>

        {/* --- Section Compteur & Resend --- */}
        <div className="w-full space-y-4">
          <p className="text-gray-500 text-sm">
            {timeLeft > 0 ? (
              <>Resend code available in <span className="font-bold text-[#238d7b]">{formatTime(timeLeft)}</span></>
            ) : (
              "Didn't receive the code?"
            )}
          </p>
          <OutlineActionButton disabled={timeLeft > 0} onClick={handleResend}>
            Resend Code
          </OutlineActionButton>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;