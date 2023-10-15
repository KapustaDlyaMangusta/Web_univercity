import React from 'react';

import LastNews from "./components/LastNews";
import Banner from './components/Banner';

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <Banner/>

      <LastNews/>
    </div>
  );
};

export default Home;