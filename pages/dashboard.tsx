import React from 'react';
import { useRouter } from 'next/router';
import { DashboardNav, DashboardNavMobile, DashboardTab } from '../devlink';
import DashboardLayout from '../src/app/dashLayout';
import RequireAuth from "../components/authenticate";

const DashboardPage: React.FC = () => {
  const router = useRouter();

  return (
    <RequireAuth>
      {(userData) => (
        <DashboardLayout>
          <DashboardNav />
          <DashboardNavMobile />
          <DashboardTab user={userData} />
        </DashboardLayout>
      )}
    </RequireAuth>
  );
};

export default DashboardPage;
