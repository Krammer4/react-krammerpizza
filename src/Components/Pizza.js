import React, { useState, useContext } from "react";
import { Context } from "../App";
import { PizzaMenu } from "./PizzaMenu";
import { motion, AnimatePresence } from "framer-motion";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { filters } from "../consts";
import "./styles/Pizza.css";

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

  const [filterValue, setFilterValue] = useState("Фильтр");
  const [anchorFilterEl, setAnchorFilterEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorFilterEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorFilterEl(null);
  };

  const openFilter = Boolean(anchorFilterEl);
  const idFilter = openFilter ? "simple-popover" : undefined;

  const [sortValue, setSortValue] = useState("Сортировка");

  const [anchorSortEl, setAnchorSortEl] = useState(null);

  const handleSortClick = (event) => {
    setAnchorSortEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorSortEl(null);
  };

  const openSort = Boolean(anchorSortEl);
  const idSort = openSort ? "simple-popover" : undefined;

  const sortPizzas = (sortVal) => {
    let sortedPizzas;
    if (sortVal) {
      sortedPizzas = pizzasToShow.sort((a, b) => a.startPrice - b.startPrice);
    } else {
      sortedPizzas = pizzasToShow.sort((a, b) => b.startPrice - a.startPrice);
    }
    setPizzasToShow(sortedPizzas);
  };

  return (
    <div className="pizzas">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Закажите пиццу с доставкой на дом в Беларуси</title>
        <meta
          name="description"
          content="Вкусная пицца с доставкой на дом! Пицца с разными начинками и на тонком тесте. Доставка пиццы по вашему городу за 30 минут!"
        />
      </Helmet>
      <h1 className="pizzas-main-title">Пицца</h1>
      <div className="pizzas-sortFilter-row">
        <div>
          <button className="filter-open-button" onClick={handleFilterClick}>
            {filterValue}
          </button>
          <Popover
            id={idFilter}
            open={openFilter}
            anchorEl={anchorFilterEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div className="filterButtonsRow">
                <button
                  onClick={() => {
                    setFilterValue("Фильтр");
                    filterPizzas("");
                    handleFilterClose();
                  }}
                  className="filterButton"
                >
                  Все
                </button>
                {Object.values(filters).map((el) => {
                  return (
                    <button
                      onClick={() => {
                        setFilterValue(el);
                        filterPizzas(el);
                        handleFilterClose();
                      }}
                      className="filterButton"
                    >
                      {el}
                    </button>
                  );
                })}
              </div>
            </Typography>
          </Popover>
        </div>

        <div>
          <button
            style={{ marginLeft: "20px" }}
            className="filter-open-button"
            onClick={handleSortClick}
          >
            {sortValue}
          </button>
          <Popover
            id={idSort}
            open={openSort}
            anchorEl={anchorSortEl}
            onClose={handleSortClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div className="filterButtonsRow">
                <button
                  onClick={() => {
                    setSortValue("По возрастанию цены");
                    sortPizzas(true);
                    handleSortClose();
                  }}
                  className="filterButton"
                >
                  По возрастанию цены
                </button>
                <button
                  onClick={() => {
                    setSortValue("По убыванию цены");
                    sortPizzas(false);
                    handleSortClose();
                  }}
                  className="filterButton"
                >
                  По убыванию цены
                </button>
              </div>
            </Typography>
          </Popover>
        </div>
      </div>

      <div className="pizzas-row">
        {pizzasToShow.map((item, index) => {
          return (
            <>
              <div className="pizza-card">
                <div className="pizza-content">
                  <img
                    className="pizza-img"
                    src={item.src}
                    alt="pizza"
                    title="pizza image"
                  />
                  <p className="pizza-title">{item.title}</p>
                  <p className="pizza-ingredients">{item.ingredients}</p>
                  <div className="pizza-price-row">
                    <p className="pizza-fromPrice">
                      от: {item.startPrice} руб.
                    </p>
                    <button
                      onClick={() => openPizzaMenu(index)}
                      className="pizza-chose-button"
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
