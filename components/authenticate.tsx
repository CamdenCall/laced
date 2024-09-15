import React, { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';

interface RequireAuthProps {
  children: React.ReactNode | ((userData: any) => React.ReactNode);
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userData, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/auth', { withCredentials: true });
        if (response.data.authenticated) {
          setData(response.data.userData);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push('/sign-in');
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        router.push('/sign-in');
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    // Check if children is a function (render prop pattern), otherwise render JSX directly
    if (typeof children === 'function') {
      return <>{(children as (userData: any) => React.ReactNode)(userData)}</>;
    }
    return <>{children}</>; // If it's normal JSX
  }

  return null;
};

export default RequireAuth;
