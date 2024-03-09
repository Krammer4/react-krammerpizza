import React from 'react';

import './styles/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-column'>
            <h4 className='footer-column-title'>Krammer Pizza</h4>
            <Link to={'/react-krammerpizza'} className='footer-column-link'>
              Главная
            </Link>
            <Link to={'/about'} className='footer-column-link'>
              О нас
            </Link>
            <Link to={'/contacts'} className='footer-column-link'>
              Контакты
            </Link>
          </div>

          <div className='footer-column'>
            <h4 className='footer-column-title'>Меню</h4>
            <Link to={'/pizza'} className='footer-column-link'>
              Пицца
            </Link>
            <Link to={'/snacks'} className='footer-column-link'>
              Закуски
            </Link>
          </div>

          <div className='footer-column'>
            <h4 className='footer-column-title'>Команда</h4>
            <a className='footer-column-link'>Работа в пеццерии</a>
          </div>

          <div className='footer-column'>
            <h4 className='footer-column-title'>Партнерам</h4>
            <a className='footer-column-link'>Франшиза</a>
            <a className='footer-column-link'>Инвестиции</a>
            <a className='footer-column-link'>Поставщикам</a>
          </div>

          <div className='footer-column'>
            <h4 className='footer-column-title'>
              <a style={{ color: '#535353' }} href='tel:+375292196736'>
                2196736
              </a>
            </h4>
            <p style={{ marginTop: '-20px' }} className='footer-column-link'>
              звонок по телефону
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
