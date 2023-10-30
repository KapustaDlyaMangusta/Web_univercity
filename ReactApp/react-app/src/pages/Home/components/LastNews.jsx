import React, { useState } from 'react';
import LastNewsList from './LastNewsList';
import FilledButton from '../../../components/FilledButton';

const LastNews = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="flex flex-col gap-12 items-center">
      <h2 className="text-5xl font-bold">Last Morkva news</h2>

      <LastNewsList viewMore={ viewMore }/>

      { !viewMore && <FilledButton onClick={ () => setViewMore(true) }>View more</FilledButton> }
    </div>
  );
};

export default LastNews;