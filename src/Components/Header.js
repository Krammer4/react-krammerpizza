import React, { useState, useEffect, useRef } from 'react';
import logo from '../Img/logo.jpg';
import star from '../Img/star.png';
import miniLogo from '../Img/mini-logo.jpg';
import cross from '../Img/cross.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = ({
  sign,
  setSign,
  phone,
  setPhone,
  yourRegPhone,
  setYourRegPhone,
  isSigned,
  setIsSigned,
  signPls,
  setSignPls,
  yourTown,
  setYourTown,
  town,
  setTown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [validNum, setValidNum] = useState(true);

  const numInput = useRef(null);
  const numButton = useRef(null);

  const sendNumber = () => {
    if (!phone.includes(+375)) {
      setValidNum(false);
      console.log('Где 375');
    } else if (phone.length === 12) {
      setYourRegPhone(phone);
      console.log('Регистрация на номер: ', phone);
      setSign(false);
      setPhone(+375);
      setValid(true);
      setValidNum(true);
      setIsSigned(true);
      setExit(true);
    } else {
      setValidNum(false);
    }
  };

  useEffect(() => {
    const yourTownData = localStorage.getItem('yourTown');
    if (yourTownData) {
      setYourTown(JSON.parse(yourTownData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('yourTown', JSON.stringify(yourTown));
  }, [yourTown]);

  // State for exit button appearing
  const [exit, setExit] = useState(false);

  return (
    <div className='header'>
      <div className='header-row'>
        <div className='header-sec-row'>
          <Link
            to='/react-krammerpizza'
            style={{
              fontFamily: 'Comfortaa',
              marginRight: '20px',
              fontWeight: 800,
            }}
          >
            KPizza
          </Link>
          <div className='header__delivety delivery'>
            <p className='delivery-text'>
              <span className='delivery-addition-text'>Доставка пиццы</span>{' '}
              <span
                onClick={() => setIsOpen(!isOpen)}
                className='delivery-city'
              >
                {town[yourTown].title}
              </span>
            </p>
            <div className='delivery-row'>
              <p className='delivery-info'>29 мин · {town[yourTown].rate} </p>{' '}
              <img src={star} className='delivery-star' />
            </div>
          </div>
          <div className='header__call call'>
            <a className='call-number' href='tel:+375292196736'>
              21-96-736
            </a>
            <p className='call-text'>Звонок по телефону</p>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className='popup'>
                  <div className='popup-body'>
                    <div className='popup-content'>
                      <div className='popup-row'>
                        <div className='popup-main-title'>
                          <img src={miniLogo} className='popup-logo' />
                          <p className='popup-title'>
                            902 пиццерии в 17 странах
                          </p>
                        </div>
                        <img
                          onClick={() => {
                            setIsOpen(!isOpen);
                            setValue('');
                          }}
                          className='popup-cross'
                          src={cross}
                        />
                      </div>
                      <input
                        className='popup-input'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type='text'
                        placeholder='Поиск'
                      />
                      <div className='popup-cities-row'>
                        {town
                          .filter((item) => {
                            if (
                              item.title
                                .toLowerCase()
                                .includes(value.toLowerCase())
                            ) {
                              return true;
                            }
                          })
                          .map((item) => {
                            console.log(item);
                            return (
                              <p
                                key={item.id}
                                onClick={() => {
                                  setYourTown(item.id);
                                  setIsOpen(false);
                                  setValue('');
                                }}
                                className='popup-city-item'
                              >
                                {item.title}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!exit && (
          <div
            onClick={() => {
              new Promise((resolve, reject) => {
                setSign(!sign);

                resolve();
              }).then(() => numInput.current.focus());
            }}
            className='header-sing'
          >
            Войти
          </div>
        )}
        {exit && (
          <p onClick={() => setExit(false)} className='header-sign-out'>
            Выйти
          </p>
        )}
      </div>
      <AnimatePresence>
        {sign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='sign'>
              <div className='sign-body'>
                <div className='sign-content'>
                  <div className='sign-row'>
                    <p className='sign-title'>Вход на сайт</p>
                    <img
                      onClick={() => {
                        setSign(false);
                        setValidNum(true);
                      }}
                      className='sign-cross'
                      src={cross}
                    />
                  </div>
                  <p className='sign-subtitle'>
                    Подарим подарок на день рождения, сохраним адрес доставки и
                    расскажем об акциях
                  </p>
                  <p className='sign-phone-text'>Номер телефона</p>
                  <input
                    ref={numInput}
                    className='sign-phone-number'
                    value={phone}
                    type='number'
                    onChange={(e) => {
                      setPhone(e.target.value);

                      if (phone.length === 11) {
                        setValid(true);
                      } else {
                        setValid(false);
                      }
                    }}
                    placeholder='+375 29 219-67-36'
                  />

                  {validNum ? null : (
                    <p className='sign-number-validation'>
                      Пожалуйста, введите верный номер телефона
                    </p>
                  )}

                  <button
                    ref={numButton}
                    onClick={sendNumber}
                    className={
                      valid ? 'sign-button-active' : 'sign-button-passive'
                    }
                  >
                    Выслать код
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
