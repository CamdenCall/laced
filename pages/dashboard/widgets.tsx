import React, { use } from 'react';
import { DashboardNav, DashboardNavMobile, DashboardTab, BiolinkTab, SettingsTab, WidgetsTab } from '../../devlink'
import DashboardLayout from '../../src/app/dashLayout';



const WidgetsPage: React.FC = () => {
    return (
      <DashboardLayout>
        <DashboardNav/>
        <DashboardNavMobile/>
        <WidgetsTab/>
      </DashboardLayout>
    );
};

export default WidgetsPage;
