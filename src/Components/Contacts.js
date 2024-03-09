import React from 'react';
import { allTowns } from '../consts';
import star from '../Img/star.png';

import './styles/Contacts.css';

export const Contacts = () => {
  return (
    <div className='contacts'>
      <div>
        <h3 className='contacts-point'>Телефон:</h3>
        <a className='contacts-content' href='tel:+375292196736'>
          21-96-736
        </a>
      </div>

      <div>
        <h3 className='contacts-point'>Email:</h3>
        <a className='contacts-content' href='mailto:bukatovgleb566@gmail.com'>
          bukatovgleb566@gmail.com
        </a>
      </div>

      <div>
        <h3 className='contacts-point'>Мы есть в {allTowns.length} городах:</h3>

        <div className='contacts-towns-row'>
          {allTowns.map((town) => {
            return (
              <div key={town.id} className='contacts-townCard'>
                <div className='contacts-townCard-content'>
                  <p className='contacts-townCard-title'>{town.title}</p>
                  <div className='contacts-starsRow'>
                    <p className='contacts-townCard-stars'>{town.rate}</p>
                    <img className='contacts-townCard-star' src={star} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
