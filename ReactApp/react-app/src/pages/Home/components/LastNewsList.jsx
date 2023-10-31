import React from 'react';
import NewsItem from "./NewsItem";
import useRequestProcessing from '../../../hooks/useRequestProcessing';
import { fetchLatestNews, fetchNews } from '../../../api/news.api';
import HttpError from '../../../components/HttpError';

const LastNewsList = ({ viewMore }) => {
  const fetchFunc = viewMore ? fetchNews : fetchLatestNews;

  const { isLoading, error, isSuccess, result: news } = useRequestProcessing(fetchFunc, { initResultValue: []});

  if(isLoading){
    return (<p className='text-3xl font-bold transition'>Loading exiting news about Morkva Enterprise...</p>)
  }

  if(isSuccess !== undefined && !isSuccess){
    return <HttpError />
  }

  return (

    <div className="flex flex-wrap gap-12 transition">
      {
        news.map(newsItem => (
        <NewsItem key={ newsItem.id }
                  imageSource={ newsItem.imageSource }
                  title={ newsItem.title }
                  description={ newsItem.description }/>
      )) }
    </div>
  );
};

export default LastNewsList;