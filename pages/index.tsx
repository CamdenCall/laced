import React, { use } from 'react';
import { NavCover, Header, About, Pricing, Discord, Footer } from '../devlink'
import Layout from '../src/app/layout';



const LandingPage: React.FC = () => {
    return (
      <Layout>
        <NavCover />
        <Header/>
        <About/>
        <Pricing/>
        <Discord/>
        <Footer/>
      </Layout>

    );
};

export default LandingPage;
