import React from 'react';

const NewsItem = ({ imageSource, title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl pb-2 bg-orange-500 border-orange-500 hover:-translate-y-4 transition-all ease-in-out" style={ { maxWidth: '400px' } }>
      <div className="bg-white border-x-2 rounded-2xl" >
        <img src={ imageSource } alt="News" className="rounded-t-2xl w-full" style={ { height: '260px'}}/>

        <div style={ { height: '240px' } }>
          <h3 className="text-center text-xl font-bold py-4 px-6">{ title }</h3>

          <p className="text-center p-4">{ description }</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;