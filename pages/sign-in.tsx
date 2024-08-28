import React, { useEffect, useState } from 'react';
import { Nav, SignIn } from '../devlink'
import Layout from '../src/app/layout';
import Axios from 'axios';
import { useRouter } from 'next/router';




const SignInPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      
      Axios.get('http://localhost:3001/auth', {withCredentials: true})
      .then((response) => {
        if (response.data.authenticated) {
          const email = (response.data.session.user.email);
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }

      })
      .catch((error) => {
        console.log(error);
      });      

    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated) {
    router.push('/dashboard');
  }
  if (!isAuthenticated) {
    return (
      <Layout>
        <Nav></Nav>
        <SignIn></SignIn>
      </Layout>

    );
  }
};

export default SignInPage;
