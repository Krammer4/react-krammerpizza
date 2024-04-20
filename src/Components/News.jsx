import React, { useState } from 'react';

const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Новость 1',
      description: 'Описание новости 1',
      imageUrl: 'https://example.com/image1.jpg'
    },
    {
      id: 2,
      title: 'Новость 2',
      description: 'Описание новости 2',
      imageUrl: 'https://example.com/image2.jpg'
    },
    // Добавьте нужное количество новостей
  ]);

  return (
    <div className="news-container">
      {news.map((item) => (
        <div className="news-item" key={item.id}>
          <img src={item.imageUrl} alt={item.title} className="news-image" />
          <div className="news-content">
            <h2 className="news-title">{item.title}</h2>
            <p className="news-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;