import React, {useContext, useState} from 'react'
import { Context } from '../App'
import { PizzaMenu } from './PizzaMenu'
import { AnimatePresence, motion } from 'framer-motion'
import { SnackMenu } from './Snackmenu'


export const Snacks = () => {

  const {snacks, setSnacks, cartList, setCartList, isSigned, setIsSigned, signPls, setSignPls, myAdress, setMyAdress} = useContext(Context)



  const [pizzaMenuShow, setPizzaMenuShow] = useState(false)
    const [pizzaMenuId, setPizzaMenuId] = useState(0)


    const openPizzaMenu = (index) =>{
        setPizzaMenuShow(true)
        setPizzaMenuId(index)
    }

  return (
    <div className="pizzas">
    <h1 className="pizzas-main-title">Закуски</h1>
    
    <div className="pizzas-row">
        {snacks.map((item, index)=>{
           return (
           <>
               <div className="pizza-card">
                    <div className="pizza-content">
                        <img className="pizza-img" src={item.src}/>
                        <p className="pizza-title">{item.title}</p>
                        <p className="pizza-ingredients">{item.ingredients}</p>
                        <div className="pizza-price-row">
                            <p className="pizza-fromPrice">от: {item.startPrice} руб.</p>
                            <button onClick={()=>openPizzaMenu(index)} className="pizza-chose-button">Выбрать</button>
                        </div>
                        </div >
                </div>
            
           </>
            )
        })}
       
    </div>
    <AnimatePresence>
        {pizzaMenuShow && <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
        ><SnackMenu pizzaMenuShow={pizzaMenuShow} setPizzaMenuShow={setPizzaMenuShow} pizzaMenuId={pizzaMenuId} snacks={snacks} isSigned={isSigned} setIsSigned={setIsSigned} signPls={signPls} setSignPls={setSignPls} myAdress={myAdress} setMyAdress={setMyAdress} cartList={cartList} setCartList={setCartList}/></motion.div>}
        </AnimatePresence>
    </div>
  )
}
