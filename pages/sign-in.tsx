import React, { useEffect, useState } from 'react';
import { Nav, SignIn } from '../devlink';
import Layout from '../src/app/layout';
import Axios from 'axios';
import { useRouter } from 'next/router';

const SignInPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/auth', { withCredentials: true });
        if (response.data.authenticated) {
          setIsAuthenticated(true);
          router.push('/dashboard'); // Redirect if already authenticated
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  if (isAuthenticated === false) {
    return (
      <Layout>
        <Nav />
        <SignIn />
      </Layout>
    );
  }

  return null; // You can return null because the user will be redirected to the dashboard
};

export default SignInPage;
