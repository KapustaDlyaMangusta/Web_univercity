import React from 'react';
import NewsItem from "./NewsItem";
import { news } from '../../../data/news-data';

const LastNewsList = ({ viewMore }) => {
  const newsToShow = viewMore ? news : news.slice(0, 3);

  return (
    <div className="flex flex-wrap gap-12">
      { newsToShow.map(newsItem => (
        <NewsItem key={ newsItem.id }
                  imageSource={ newsItem.imageSource }
                  title={ newsItem.title }
                  description={ newsItem.description }/>
      )) }
    </div>
  );
};

export default LastNewsList;