import React from 'react';
import NewsItem from "./NewsItem";

const LastNewsList = () => {
  const news = [
    {
      imageSource: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?cs=srgb&dl=pexels-mali-maeder-143133.jpg&fm=jpg',
      title: 'Morkva Enterprice best year!',
      description: 'With a record-breaking performance in 2023, Morkva Enterprise has proven itself as the best carrot seller in the market, offering high-quality products and services to its loyal customers.'
    },
    {
      imageSource: 'https://www.allrecipes.com/thmb/nH0ibTts6V4xHLjBPEtQt4Lbsuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/18256-Buttery-Cooked-Carrots-DDMFS-2x1-416f927f836346b2886a5ac519f667f3.jpg',
      title: 'Morkva Enterprise harvests the largest carrot in the world!',
      description: 'Morkva Enterprise, a company that is known for its exceptional carrots, has harvested the largest carrot ever recorded. The carrot weighs over 10 kilograms and measures over 2 meters in length.'
    },
    {
      imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFzrQto_tBRIL54veqGt8-9OAQIg0nYdpkw&usqp=CAU',
      title: 'How Morkva Enterprise became the best carrot seller in 2023?',
      description: 'Morkva Enterprise, a company that has been selling carrots for over a decade, has reached its peak in 2023. The company has achieved this success by investing in quality, innovation, and customer service.'
    }
  ]

  return (
    <div className="flex flex-wrap gap-12">
      { news.map(newsItem => (
        <NewsItem imageSource={ newsItem.imageSource }
                  title={ newsItem.title }
                  description={ newsItem.description }/>
      )) }
    </div>
  );
};

export default LastNewsList;