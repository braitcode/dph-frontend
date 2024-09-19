import { useEffect, useState } from 'react';
import { useAuth } from '../../components/contexts/Auth'; 
import Cookies from 'js-cookie';

const GoogleAuthCallback = () => {
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const user = params.get('user');

    if (token && user) {
      // Save token and user to context and cookies
      setAuth({
        user: JSON.parse(user),
        token,
        success: true,
        message: 'Google login successful',
      });
      Cookies.set('auth', JSON.stringify({ user: JSON.parse(user), token, success: true }), { expires: 7 });
    }

    // Start the countdown timer
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
      setLoading(false);
      window.location.href = '/';
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [setAuth, countdown]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
          <p className="text-lg">Redirecting in {countdown} seconds...</p>
      </div>
    );
  }

  return null;
};

export default GoogleAuthCallback;