import React from 'react';
import { About, FAQ, Footer, Header, Speakers, Travel } from '../../container';
import { Banner01, Banner02 } from '../../componesnts';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Speakers />
      <Banner01 />
      <Travel />
      <FAQ />
      <Banner02 />
      <Footer />
    </div>
  );
};

export default Home;
