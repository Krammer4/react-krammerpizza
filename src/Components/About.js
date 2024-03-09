import React from 'react';
import aboutImg1 from '../Img/about1.jpg';
import aboutImg2 from '../Img/about2.jpg';
import aboutImg3 from '../Img/about3.jpg';

import './styles/About.css';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-row'>
          <img className='about-image' src={aboutImg1} />
          <p className='about-subtitle right'>
            Наша компания - это команда профессионалов, которая с радостью
            доставит вам самую вкусную и{' '}
            <Link className='about-orange-span' to={'/pizza'}>
              качественную пиццу
            </Link>{' '}
            прямо к вашему дому или офису. Мы работаем для того, чтобы каждый
            наш клиент получил истинное удовольствие от нашей продукции и
            обслуживания.
          </p>
        </div>

        <div className='about-row'>
          <p className='about-subtitle left'>
            Мы гордимся тем, что используем только свежие и натуральные
            ингредиенты для приготовления наших пицц. Наш шеф-повар тщательно
            подбирает каждый компонент, чтобы обеспечить вам неповторимый вкус и
            насыщенный аромат. Мы следим за качеством каждого шага в процессе
            приготовления и доставки, чтобы вы могли насладиться{' '}
            <Link className='about-orange-span' to={'/pizza'}>
              идеальной пиццей
            </Link>{' '}
            без каких-либо хлопот.
          </p>
          <img className='about-image' src={aboutImg2} />
        </div>

        <div className='about-row'>
          <img className='about-image' src={aboutImg3} />
          <p className='about-subtitle right'>
            Мы стремимся к тому, чтобы каждый клиент остался доволен нашим
            сервисом и продукцией. Наша цель - создать уютную и дружелюбную
            атмосферу, где каждый может насладиться{' '}
            <Link className='about-orange-span' to={'/pizza'}>
              вкусной пиццей
            </Link>{' '}
            в удобное для себя время. Мы ценим каждого клиента и готовы
            предложить лучший сервис и качество продукции для вашего
            удовольствия.
          </p>
        </div>
      </div>
    </div>
  );
};
