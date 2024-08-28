import React, { use } from 'react';
import { Nav, SignUp } from '../devlink'
import Layout from '../src/app/layout';



const SignUpPage: React.FC = () => {
    return (
      <Layout>
        <Nav />
        <SignUp/>
      </Layout>

    );
};

export default SignUpPage;
