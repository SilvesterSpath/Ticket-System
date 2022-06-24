import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
  const [loggedIn, setLoogedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setLoogedIn(true);
    } else {
      setLoogedIn(false);
    }

    setLoading(false);
  }, [user]);

  return { loggedIn, loading };
};
