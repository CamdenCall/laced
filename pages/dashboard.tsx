import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DashboardNav, DashboardNavMobile, DashboardTab } from '../devlink';
import DashboardLayout from '../src/app/dashLayout';
import Axios from 'axios';

const DashboardPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userData, setData] = useState(null);
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
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false); // Handle error state
      }
    };

    checkAuth();
  }, []);

  // Handle redirect inside another useEffect
  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, router]);

  // Display loading state while checking authentication
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Don't render anything while redirecting
  if (!isAuthenticated) {
    return null;
  }

  return (
    <DashboardLayout>
      <DashboardNav />
      <DashboardNavMobile />
      <DashboardTab user={userData} />
    </DashboardLayout>
  );
};

export default DashboardPage;
