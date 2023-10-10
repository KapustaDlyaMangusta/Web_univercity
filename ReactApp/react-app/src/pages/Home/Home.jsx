import React from 'react';

import Header from "./components/Header/Header";
import LastNews from "./components/News/LastNews";
import Footer from './components/Footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col gap-28">
      <Header/>

      <LastNews/>

      <Footer/>
    </div>
  );
};

export default Home;