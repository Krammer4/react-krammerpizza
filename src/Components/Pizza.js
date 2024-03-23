import React, { useState, useContext } from 'react';
import { Context } from '../App';
import { PizzaMenu } from './PizzaMenu';
import { motion, AnimatePresence } from 'framer-motion';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { filters } from '../consts';
import './styles/Pizza.css';

export const Pizza = () => {
  const {
    yourRegPhone,
    pizzas,
    setPizzas,
    isSigned,
    setIsSigned,
    signPls,
    setSignPls,
    myAdress,
    setMyAdress,
    cartList,
    setCartList,
  } = useContext(Context);

  const [pizzasToShow, setPizzasToShow] = useState(pizzas);
  const [pizzaMenuShow, setPizzaMenuShow] = useState(false);
  const [pizzaMenuId, setPizzaMenuId] = useState(0);

  const openPizzaMenu = (index) => {
    setPizzaMenuShow(true);
    setPizzaMenuId(index);
  };

  const filterPizzas = (value) => {
    if (!value) {
      setPizzasToShow(pizzas);
    } else {
      console.log(value);
      const filteredPizzas = pizzas.filter((pizza) =>
        pizza.filter.includes(value)
      );
      setPizzasToShow(filteredPizzas);
    }
  };

  const [filterValue, setFilterValue] = useState('Фильтр');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='pizzas'>
      <h1 className='pizzas-main-title'>Пицца</h1>
      <div>
        <button className='filter-open-button' onClick={handleClick}>
          {filterValue}
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>
            <div className='filterButtonsRow'>
              <button
                onClick={() => {
                  setFilterValue('Фильтр');
                  filterPizzas('');
                  handleClose();
                }}
                className='filterButton'
              >
                Все
              </button>
              {Object.values(filters).map((el) => {
                return (
                  <button
                    onClick={() => {
                      setFilterValue(el);
                      filterPizzas(el);
                      handleClose();
                    }}
                    className='filterButton'
                  >
                    {el}
                  </button>
                );
              })}
            </div>
          </Typography>
        </Popover>
      </div>

      <div className='pizzas-row'>
        {pizzasToShow.map((item, index) => {
          return (
            <>
              <div className='pizza-card'>
                <div className='pizza-content'>
                  <img className='pizza-img' src={item.src} />
                  <p className='pizza-title'>{item.title}</p>
                  <p className='pizza-ingredients'>{item.ingredients}</p>
                  <div className='pizza-price-row'>
                    <p className='pizza-fromPrice'>
                      от: {item.startPrice} руб.
                    </p>
                    <button
                      onClick={() => openPizzaMenu(index)}
                      className='pizza-chose-button'
                    >
                      Выбрать
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <AnimatePresence>
        {pizzaMenuShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PizzaMenu
              pizzaMenuShow={pizzaMenuShow}
              setPizzaMenuShow={setPizzaMenuShow}
              pizzaMenuId={pizzaMenuId}
              pizzas={pizzas}
              isSigned={isSigned}
              setIsSigned={setIsSigned}
              signPls={signPls}
              setSignPls={setSignPls}
              myAdress={myAdress}
              setMyAdress={setMyAdress}
              cartList={cartList}
              setCartList={setCartList}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
