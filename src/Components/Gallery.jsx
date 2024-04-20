import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../Img/slider1.jpg' 
import slider2 from '../Img/slider2.jpg'
import slider3 from '../Img/slider3.jpg'
import slider4 from '../Img/slider4.jpg'
import slider5 from '../Img/slider5.jpg'


export const Gallery = () => {
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
    
      const images = [
        slider2,
        slider3,
        slider4,
        slider5
      ];
    
      return (
        <>
        <p className='contacts-point' style={{marginBottom: 20}}>Галлерея</p>
          <div className="gallery-container">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </>
      );
}
