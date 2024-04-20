import React, { useState } from 'react';
import news1 from '../Img/slider1.jpg'
import news2 from '../Img/slider2.jpg'
import news3 from '../Img/slider3.jpg'


const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Новая точка',
      description: 'Новая точка KrammerPizza в Минске!',
      imageUrl: news1
    },
    {
      id: 2,
      title: 'Бешенные скидки!',
      description: 'Скидки до 50% до конца апреля!',
      imageUrl: news2
    },
    {
        id: 3,
        title: 'Вечеринка',
        description: 'Скидка 10% при заказе столика от 5 человек и более!',
        imageUrl: news3
      },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Скорость анимации
    slidesToShow: 3, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество пролистываемых слайдов за один раз
    autoplay: true, // Автоматическое переключение слайдов
    autoplaySpeed: 2000, // Интервал автоматического переключения в миллисекундах (3 секунды)
    arrows: true, // Отображение стрелок для ручного переключения
    prevArrow: <button className="gallery-button gallery-button-prev">&lt;</button>, // Кнопка "Назад"
    nextArrow: <button className="gallery-button gallery-button-next">&gt;</button>, // Кнопка "Вперед"
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

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