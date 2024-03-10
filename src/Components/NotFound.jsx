import React from 'react';
import './styles/NotFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='notFound'>
      <h1 className='notFound-title'>Упс!</h1>
      <h2 className='notFound-subtitle'>
        Кажется, такой страницы не существует...
      </h2>
      <p className='notFound-action'>
        Попробуйте вернуться{' '}
        <Link className='notFound-link' to={'/react-krammerpizza'}>
          на главную
        </Link>
      </p>
    </div>
  );
};
