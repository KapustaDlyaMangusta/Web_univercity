import React from 'react';
import LastNewsList from './LastNewsList';
import FilledButton from '../../../components/FilledButton';

const LastNews = () => {
  return (
    <div className="flex flex-col gap-12 items-center">
      <h2 className="text-5xl font-bold">Last Morkva news</h2>

      <LastNewsList/>

      <FilledButton>View more</FilledButton>
    </div>
  );
};

export default LastNews;