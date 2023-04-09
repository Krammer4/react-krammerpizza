import React, {useState, useContext, useEffect} from 'react'
import './App.css';
import { Header } from './Components/Header';
import { Pizza } from './Components/Pizza';
import { Main } from './Components/Main';
import {Routes, Route, Link} from 'react-router-dom'
import { Snacks } from './Components/Snacks';
import { Combo } from './Components/Combo';
import { Desserts } from './Components/Desserts';
import { Drinks } from './Components/Drinks';
import { Other } from './Components/Other';
import { Discounts } from './Components/Discounts';
import { Contacts } from './Components/Contacts';
import { About } from './Components/About';

// Pizza images import
import donbacon from './Img/pizza1.jpg'
import pepeMuchrooms from './Img/pizza2.jpg'
import curry from './Img/pizza3.jpg'
import home from './Img/pizza4.jpg'
import sesons from './Img/pizza5.jpg'
import carbonara from './Img/pizza6.jpg'
import village from './Img/pizza7.jpg'
import mix from './Img/pizza8.jpg'
import hamcucumbers from './Img/pizza9.jpg'
import burger from './Img/pizza10.jpg'
import arriva from './Img/pizza11.jpg'
import dodo from './Img/pizza12.jpg'
import peperoni from './Img/pizza13.jpg'
import pesto from './Img/pizza14.jpg'
import ranch from './Img/pizza15.jpg'
import chickenBbq from './Img/pizza16.jpg'

// Snacks images import
import hamCheese from './Img/snack1.jpg'
import bbq from './Img/snack2.jpg'
import supermeat from './Img/snack3.jpg'
import curryDod from './Img/snack4.jpg'
import dodster from './Img/snack6.jpg'
import hotDod from './Img/snack5.jpg'
import miniDod from './Img/snack7.jpg'
import baconHam from './Img/snack8.jpg'
import chickenPieces from './Img/snack9.jpg'
import lanchbox from './Img/snack10.jpg'
import starter from './Img/snack11.jpg'
import mushroomStarter from './Img/snack12.jpg'
import greek from './Img/snack13.jpg'
import cezar from './Img/snack14.jpg'
import potato from './Img/snack15.jpg'
import cheeseSticks from './Img/snack16.jpg'

// Import of icons
import emptyCart from './Img/emptycart.jpg'
import cross from './Img/cross.png'

import { AnimatePresence, motion } from 'framer-motion';


export const Context = React.createContext()

function App() {


  const [sign, setSign] = useState(false)
  const [phone, setPhone] = useState('+375')
  const [yourRegPhone, setYourRegPhone] = useState('')

  // Интерактив выбора города (стейты)=======
  const [town, setTown] = useState([{title:"Барановичи",id:0, rate: 5}, {title:"Белоозерск",id:1, rate:4.75}, {title:"Берёза",id:2, rate:4.45}, {title:"Борисов",id:3, rate:3.85}, {title:"Браслав",id:4, rate:3.45}, {title:"Брест",id:5, rate:4.85}, {title:"Витебск",id:6, rate:4.45}, {title:"Гродно",id:7, rate:4.85}, {title:"Дзержинск",id:8, rate:3.45}, {title:"Жодино",id:9, rate:3.35}, {title:"Лида",id:10, rate:4.45}, {title:"Минск",id:11, rate:5}, {title:"Могилёв",id:12, rate:4.35}, {title:"Новогрудок",id:13, rate:4.60}, {title:"Пинск",id:14, rate:4.85}, {title:"Полоцк",id:15, rate:3.65}, {title:"Рогачёв",id:16, rate:4.75}, {title:"Слоним",id:17, rate:4.35}, {title:"Слуцк",id:18, rate:4.15}])
  const [yourTown, setYourTown] = useState(0);


  // State for Array of all pizzas are available to order
  const [pizzas, setPizzas] = useState([
    {title: 'Дон Симон', src: donbacon, startPrice: 20.90, minPrice: 20.90, medPrice: 28.40, maxPrice: 32.40, energy:'282 ккал', weight: '620 г', protein:'10 г', fat:'13.3 г', carbo: '28.6 г',  ingredients: 'Томатный соус, цыпленок филе, пикантная пепперони, красный лук, моцарелла, бекон'},
    {title: 'Пепперони с грибами', src:pepeMuchrooms, startPrice: 11.90, minPrice: 11.90, medPrice: 19.90, maxPrice: 25.90, energy:'285.6 ккал', weight: '375 г', protein:'10.3 г', fat:'11.4 г', carbo: '33.5 г',  ingredients: 'Пикантная пепперони, моцарелла, шампиньоны, соус альфредо'},
    {title: 'Цыпленок карри', src:curry, startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'204.7 ккал', weight: '925 г', protein:'9.3 г', fat:'5.9 г', carbo: '27.3 г',  ingredients: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, томатный соус'},
    {title: 'Домашняя', src:home, startPrice: 13.90, minPrice: 13.90, medPrice: 22.90, maxPrice: 27.90, energy:'184.7 ккал', weight: '870 г', protein:'6.7 г', fat:'5 г', carbo: '27.1 г',  ingredients: 'Пикантная пепперони, ветчина, маринованные огурчики, томаты, моцарелла, томатный соус'},
    {title: 'Четыре сезона', src:sesons,  startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'222.4 ккал', weight: '900 г', protein:'9.6 г', fat:'7.9 г', carbo: '26.8 г',  ingredients: 'Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики брынзы, моцарелла, ветчина, шампиньоны'},
    {title: 'Карбонара', src:carbonara,  startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'289.7 ккал', weight: '410 г', protein:'9.4 г', fat:'14.3 г', carbo: '28.7 г',  ingredients: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы'},
    {title: 'Деревенская', src:village,  startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'215.7 ккал', weight: '555 г', protein:'8.1 г', fat:'7.7 г', carbo: '27 г',  ingredients: 'Картофель из печи, маринованные огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус'},
    {title: 'Додо Микс', src:mix,  startPrice: 22.90, minPrice: 22.90, medPrice: 30.40, maxPrice: 33.90, energy:'275.8 ккал', weight: '430 г', protein:'10.4 г', fat:'13 г', carbo: '27.3 г',  ingredients: 'Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы'},
    {title: 'Ветчина и огурчики', src:hamcucumbers,  startPrice: 8.90, minPrice: 8.90, medPrice: 15.90, maxPrice: 21.90, energy:'249.9 ккал', weight: '340 г', protein:'8.3 г', fat:'8.9 г', carbo: '32.5 г',  ingredients: 'Соус ранч, моцарелла, ветчина, маринованные огурчики, красный лук'},
    {title: 'Бургер-пицца', src:burger,  startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'249.9 ккал', weight: '340 г', protein:'8.3 г', fat:'8.9 г', carbo: '32.5 г',  ingredients: 'Томатный соус, моцарелла, ветчина, красный лук, томаты, маринованные огурчики, соус бургер, чеснок'},
    {title: 'Аррива!', src:arriva,  startPrice: 17.90, minPrice: 17.90, medPrice: 25.90, maxPrice: 29.90, energy:'250 ккал', weight: '405 г', protein:'9.5 г', fat:'9.3 г', carbo: '30.4 г',  ingredients: 'Цыпленок, чоризо, соус бургер, томаты, сладкий перец, лук красный, чеснок, моцарелла, соус ранч'},
    {title: 'Додо', src:dodo,  startPrice: 22.90, minPrice: 22.90, medPrice: 30.40, maxPrice: 33.90, energy:'247 ккал', weight: '740 г', protein:'8.8 г', fat:'11.6 г', carbo: '25.1 г',  ingredients: 'Бекон, митболы из говядины, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус'},
    {title: 'Пепперони', src:peperoni,  startPrice: 13.90, minPrice: 13.90, medPrice: 22.90, maxPrice: 27.90, energy:'267.2 ккал', weight: '760 г', protein:'10.6 г', fat:'10.4 г', carbo: '30.9 г',  ingredients: 'Томатный соус, пикантная пепперони, моцарелла'},
    {title: 'Песто', src:pesto,  startPrice: 20.90, minPrice: 20.90, medPrice: 28.40, maxPrice: 32.40, energy:'250.8 ккал', weight: '850 г', protein:'10.7 г', fat:'10 г', carbo: '27.8 г',  ingredients: 'Соус песто, соус альфредо, цыплёнок, кубики брынзы, томаты, моцарелла'},
    {title: 'Цыпленок ранч', src:ranch,  startPrice: 20.90, minPrice: 20.90, medPrice: 28.40, maxPrice: 32.40, energy:'250.6 ккал', weight: '690 г', protein:'10 г', fat:'10.8 г', carbo: '26.6 г',  ingredients: 'Цыпленок, томаты, чеснок сухой, моцарелла, соус ранч, ветчина'},
    {title: 'Цыпленок барбекю', src:chickenBbq,  startPrice: 20.90, minPrice: 20.90, medPrice: 28.40, maxPrice: 32.40, energy:'253.1 ккал', weight: '710 г', protein:'9.8 г', fat:'10.4 г', carbo: '28.4 г',  ingredients: 'Соус барбекю, томатный соус, цыпленок, красный лук, моцарелла, бекон'},



  ])

  // State for Arr of all snacks 
  const [snacks, setSnacks] = useState([
    {title: 'Дэнвич ветчина и сыр', src: hamCheese, startPrice: 9.90, minPrice: 9.90,  energy:'267.2 ккал', weight: '210 г', protein:'10.8 г', fat:'11.2 г', carbo: '28.9 г',  ingredients: 'Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами и соусом ранч'},
    {title: 'Дэнвич чоризо барбекю', src: bbq, startPrice: 9.90, minPrice: 9.90,  energy:'262.5 ккал', weight: '210 г', protein:'9.8 г', fat:'10.3 г', carbo: '30.9 г',  ingredients: 'Насыщенный вкус колбасок чоризо и пепперони с соусами бургер и барбекю, свежими томатами, моцареллой в чиабатте'},
    {title: 'Супермясной Додстер', src: supermeat, startPrice: 7.90, minPrice: 7.90,  energy:'288.2 ккал', weight: '160 г', protein:'15.1 г', fat:'13.7 г', carbo: '24 г',  ingredients: 'Горячая закуска с цыпленком, моцареллой, митболами, острыми колбасками чоризо и соусом бургер в тонкой пшеничной лепешке'},
    {title: 'Додстер Карри', src: curryDod, startPrice: 6.90, minPrice: 6.90,  energy:'225.5 ккал', weight: '180 г', protein:'11.8 г', fat:'8.9 г', carbo: '23 г',  ingredients: 'Горячая закуска с цыпленком, ананасом, сладким перцем, моцареллой и пряным соусом карри в тонкой пшеничной лепешке'},
    {title: 'Додстер', src: dodster, startPrice: 6.90, minPrice: 6.90,  energy:'224.8 ккал', weight: '200 г', protein:'12.5 г', fat:'10.7 г', carbo: '18 г',  ingredients: 'Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке'},
    {title: 'Острый додстер 🌶️🌶️', src: hotDod, startPrice: 6.90, minPrice: 6.90,  energy:'190.2 ккал', weight: '210 г', protein:'13.4 г', fat:'6.2 г', carbo: '19 г',  ingredients: 'Горячая закуска с цыпленком, перцем халапеньо, маринованные огурчики, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке'},
    {title: 'Мини-Додстер', src: miniDod, startPrice: 3.90, minPrice: 3.90,  energy:'276.5 ккал', weight: '130 г', protein:'10.6 г', fat:'11.5 г', carbo: '30.8 г',  ingredients: 'Горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке'},
    {title: 'Додстер Бекон-Ветчина', src: baconHam, startPrice: 3.90, minPrice: 3.90,  energy:'337 ккал', weight: '130 г', protein:'8.9 г', fat:'18.4 г', carbo: '31.6 г',  ingredients: 'Горячая закуска с ветчиной, беконом, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке'},
    {title: 'Куриные кусочки 👶', src: chickenPieces, startPrice: 15.40, minPrice: 15.40,  energy:'239.7 ккал', weight: '290 г', protein:'17.9 г', fat:'12.4 г', carbo: '12.5 г',  ingredients: 'Кусочки куриного филе в хрустящей панировке'},
    {title: 'Ланчбокс с куриными кусочками', src: lanchbox, startPrice: 11.90, minPrice: 11.90,  energy:'248.8 ккал', weight: '200 г', protein:'13.5 г', fat:'11 г', carbo: '22.2 г',  ingredients: 'Горячий сытный обед из нежных куриных кусочков, картофеля из печи и сырного соуса'},
    {title: 'Сырный Стартер', src: starter, startPrice: 7.40, minPrice: 7.40,  energy:'339.2 ккал', weight: '160 г', protein:'13.4 г', fat:'20.9 г', carbo: '21.8 г',  ingredients: 'Горячая закуска с очень сырной начинкой. Моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке'},
    {title: 'Грибной Стартер', src: mushroomStarter, startPrice: 7.40, minPrice: 7.40,  energy:'277.2 ккал', weight: '160 г', protein:'11.3 г', fat:'15.3 г', carbo: '21.6 г',  ingredients: 'Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке'},
    {title: 'Греческий салат с соусом бальзамик 🌱', src: greek, startPrice: 8.40, minPrice: 8.40,  energy:'64.2 ккал', weight: '160 г', protein:'2.2 г', fat:'4.7 г', carbo: '2.8 г',  ingredients: 'Салат айсберг, томаты черри, маслины, свежий огурец, кубики брынзы, соус бальзамик'},
    {title: 'Салат Цезарь', src: cezar, startPrice: 9.90, minPrice: 9.90,  energy:'88.5 ккал', weight: '190 г', protein:'6.9 г', fat:'4.1 г', carbo: '5.4 г',  ingredients: 'Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы'},
    {title: 'Картофель из печи 🌱👶', src: potato, startPrice: 6.90, minPrice: 6.90,  energy:'219.6 ккал', weight: '160 г', protein:'3.8 г', fat:'6.8 г', carbo: '34.5 г',  ingredients: 'Запеченная в печи картошечка. Привычный вкус и мало масла'},
    {title: 'Сырные палочки с чесноком', src: cheeseSticks, startPrice: 8.90, minPrice: 8.90,  energy:'288.9 ккал', weight: '400 г', protein:'9 г', fat:'8.7 г', carbo: '41.7 г',  ingredients: 'Сытный перекус для компании. На пышном тесте — только сыр и чеснок. И соус ранч/чесночный в комплекте — с ним вкуснее!'},

  ])

  // State for cart opening
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSigned, setIsSigned] = useState(false)


  
  const [signPls, setSignPls] = useState(false)


  const [myAdress, setMyAdress] = useState([])

  // Массив корзины товаров====
  const [cartList, setCartList] = useState([])

  // Попап с заказом
  const [order, setOrder] = useState(false)

  // Стейты для инпутов выбора адреса ===

  const [newStreet, setNewStreet] = useState('')
  const [newHome, setNewHome] = useState('')
  const [newFlat, setNewFlat] = useState('')

  const sendNewAdressData = () =>{
    if (newStreet!=='' && newHome!=='' && newFlat!==''){
      setMyAdress({
        street: newStreet,
        home: newHome,
        flat: newFlat
      })
    }
  }
  
  // Stage of payment functional =========================
  const [payOpen, setPayOpen] = useState(false)

  const goToPayment = () =>{
    setPayOpen(true)
    setOrder(false)
  }

  // State for payment type 
  const [paymentType, setPaymentType] = useState([{title: 'Оплата наличными', id:0}, {title: 'По карте', id:1}])
  const [payId, setPayId] = useState(0)

  const setPaymentTypeOnClick = (index) =>{
    setPayId(index)
  }

  // State for change or non-change cash purchase
  const [change, setChange] = useState([{title:'Сдача', id:0}, {title: 'Без сдачи', id:1}])
  const [changeType, setChangeType] = useState(0)

  const setChangeTypeOnClick = (index) =>{
    setChangeType(index)
  }

  // Value that shows from what banknote should we prepare a change
  const [banknote, setBanknote] = useState('')

  // State for is order urgent or not
  const [urgent, setUrgent] = useState([{title:'Срочно', id:0}, {title:'Ко времени', id:1}])
  const [urgentId, setUrgentId] = useState(0)

  const setChangeUrgentOnClick = (index) =>{
    setUrgentId(index)
  }
  // State for input with information about what time shoult we prepare order for
  const [orderTime, setOrderTime] = useState('')
  // Function for paying cash
  const payCash = () =>{
    setSuccess(true)
    setIsCartOpen(false)
    setBanknote('')
    setOrderTime('')
    setPayOpen(false)

    // Imitation of server request

    console.log('Заказ прошел успешно!')
    console.log('Корзина заказа:', JSON.stringify(cartList))
    console.log('Улица:', myAdress.street)
    console.log('Дом:', myAdress.home)
    console.log('Квартира:', myAdress.flat)
    myAdress.entrance!=='' && console.log('Подъезд:', myAdress.entrance)
    myAdress.floor!=='' && console.log('Этаж:', myAdress.floor)
    banknote!==''&& console.log('Готовить сдачу с:', banknote, 'руб')

    const forHours = new Date()
    const forMinutes = new Date()


    orderTime!=='' ? console.log('Сделать заказ к:', orderTime) : console.log('Сделать заказ как можно скорее!')
    




    cartList.map((item, index)=>{
      finalSumm= finalSumm+ item.price
    })
    console.log('Сумма заказа:', Math.ceil((finalSumm)*100)/100)
  }

  useEffect(()=>{
    const cartStorageData = JSON.parse(localStorage.getItem('cart'))
    if(cartStorageData){
      setCartList(cartStorageData)
    }

  },[])

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartList))
  },[cartList])

  
  // States for inputs with card information
  const [cardNumber, setCardNumber] = useState('')
  const [cardFirstDate, setCardFirstDate] = useState('')
  const [cardSecDate, setCardSecDate] = useState('')
  const [cardCvv, setCardCvv] = useState('')

  // Active state for paycard button
  const [payButton, setPayButton] = useState(false)

  // State for toggling of success purchase modal 
  const [success, setSuccess] = useState(false)

  // Function for card payment
  const payCard = () =>{
    if(cardNumber.length==16 && cardFirstDate.length==2 && cardSecDate.length==2 && cardCvv.length==3){
      setPayOpen(false)
      setIsCartOpen(false)
      setCardNumber('')
      setCardFirstDate('')
      setCardSecDate('')
      setCardCvv('')
      setSuccess(true)
      setPayId(0)
     

      console.log('Заказ прошел успешно!')
      console.log('Корзина заказа:', JSON.stringify(cartList))
      console.log('Улица:', myAdress.street)
      console.log('Дом:', myAdress.home)
      console.log('Квартира:', myAdress.flat)
      myAdress.entrance!=='' && console.log('Подъезд:', myAdress.entrance)
      myAdress.floor!=='' && console.log('Этаж:', myAdress.floor)
      banknote!==''&& console.log('Готовить сдачу с:', banknote, 'руб')
      
      const joinNumber= cardNumber.split('')
      
      console.log('Номер карты:', `${joinNumber[0]}${joinNumber[1]}${joinNumber[2]}${joinNumber[3]}-${joinNumber[4]}${joinNumber[5]}${joinNumber[6]}${joinNumber[7]}-${joinNumber[8]}${joinNumber[9]}${joinNumber[10]}${joinNumber[11]}-${joinNumber[12]}${joinNumber[13]}${joinNumber[14]}${joinNumber[15]}`)
      console.log('Дата карты:', `${cardFirstDate}/${cardSecDate}`)
      console.log(`CVV: ${cardCvv}`)

      cartList.map((item, index)=>{
        finalSumm= finalSumm+ item.price
      })

      console.log('Сумма заказа:', Math.ceil((finalSumm)*100)/100)
    }
  }

  // Creating a variable for counting of final sum
  let finalSumm = 0
  
  // Function that ends whole purchase cycle and clearify cart list
  const finishPurchase = () =>{
    setIsCartOpen(false)
    setCartList([])
    setSuccess(false)
  }

  return (
    <div className="App">
     <div className="app-container">
    <Header yourTown={yourTown} setYourTown ={setYourTown} town={town} setTown={setTown} sign={sign} setSign={setSign} phone={phone} setPhone={setPhone} yourRegPhone={yourRegPhone} setYourRegPhone={setYourRegPhone} isSigned={isSigned} setIsSigned={setIsSigned}/>
     
     <ul className="navbar">
        <div className="navbar-row">
         <div className="navbar-group">
            <Link className="navbar-link" to="/react-krammerpizza">Главная</Link>
            <Link className="navbar-link" to="/pizza">Пицца</Link>
            <Link className="navbar-link" to="/combo">Комбо</Link>
            <Link className="navbar-link" to="/snacks">Закуски</Link>
            <Link className="navbar-link" to="/desserts">Дессерты</Link>
            <Link className="navbar-link" to="/drinks">Напитки</Link>
            <Link className="navbar-link" to="/other">Другие товары</Link>
            <Link className="navbar-link" to="/discounts">Акции</Link>
            <Link className="navbar-link" to="/contacts">Контакты</Link>
            <Link className="navbar-link" to="/about">О нас</Link>
         </div>
         <p onClick={()=>{
          setIsCartOpen(true)
          console.log(cartList)}} className="navbar-cart">Корзина</p>
        </div >
     </ul>

     {isCartOpen && (
     <div class="cart">
     <div class="cart-body">
     <div class="cart-content">
    
     {cartList.length==0 ?
      (<div className="cart-empty">
        <img onClick={()=>{
          setIsCartOpen(false)
          }} className="cart-empry-cross" src={cross}/>
        <div className="cart-empty-block">
          <img className="cart-empty-img" src={emptyCart} />
          <h1 className="cart-empty-title">Ой, пусто!</h1>
          <p className="cart-empty-subtitle">Ваша корзина пуста, откройте «Меню»
          и выберите понравившийся товар.
          Мы доставим ваш заказ от 14,90 руб.</p>
          </div>
      </div>):
      (<div className="cartFull">
        <img onClick={()=>{
          setIsCartOpen(false)
          }} src={cross} className="cartFull-cross"/>
        <div className="cartFull-fullList">
          {cartList.map((item, index)=>(<div className="cartFull-itemCard-row">
            <img className="cartFull-img" src={item.src}/>
            <div className="cartFull-infoBlock">
              <p className="cartFull-title">{item.title}</p>
              <p className="cartFull-priceSize">{item.size} см. · <span className="cartFull-price">{item.price} руб.</span></p>
              </div>
            </div>))}
            <button onClick={()=>{
              setOrder(true)
              }} className="cartFull-makeOrder">Заказать</button>
        </div>
        <AnimatePresence>
          {order && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
              <div className="order">
              <div className="order-body">
              <div className="order-content">
              <img onClick={()=>{
                setOrder(false)
                }} className="order-cross" src={cross}/>
              <h1 className="order-mainTitle">Оформление заказа</h1>
              {myAdress.length!==0 ? (
                <div>
                  <h2 className="order-subtitle">Адресс:</h2>
                  <p className="order-myStreet">Город:  <span className="order-my">{town[yourTown].title}</span></p>
                  {myAdress.street !== '-' &&(<span>
                    
                    <p className="order-myStreet">Улица <span className="order-my">{myAdress.street}</span></p>
                    <p className="order-myHome">Дом <span className="order-my">{myAdress.home}</span ></p>
                    <p className="order-myFlat">Квартира <span className="order-my">{myAdress.flat}</span></p>
                  </span>)}
                  <button onClick={()=>goToPayment()} className="order-goToPay">Перейти к оплате</button>
                  <button onClick={()=>{
                    setMyAdress('')
                    setNewHome('')
                    setNewFlat('')
                    setNewStreet('')}} className="order-otherAdress">Выбрать другой адресс</button>
                  
                </div>
              ):
              (
                <div className="setAdress">
                  <h1 className="setAdress-mainTitle">Ваш адресс:</h1>
    
                  <input onChange={(e)=>setNewStreet(e.target.value)} value={newStreet} className="adressModal-full" placeholder="Укажите улицу*"/>
                  <div className="adressModal-input-row">
                    <input onChange={(e)=>setNewHome(e.target.value)} value={newHome} className="adressModal-half" placeholder="Дом*"/>
                    <input onChange={(e)=>setNewFlat(e.target.value)} value={newFlat} className="adressModal-half" placeholder="Квартиру*"/>
                    </div>
                  <button onClick={sendNewAdressData} className={(newStreet!=='' && newHome!=='' && newFlat!=='') ? "adressModal-button active" : "adressModal-button"} >Сохранить</button>
                  <button onClick={()=>{
                    setMyAdress({
                      street:'-',
                      entrance: '',
                      floor: '',
                    })
                  }} className="adressModal-takeMyself">Забрать самому</button>
    
    
                  
                </div>
              )}
              </div>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

            <AnimatePresence>
              {payOpen && (
                <motion.div
                initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
                >
                  <div className="payment">
                  <div className="payment-body">
                  <div className="payment-content">
                    <img onClick={()=>{
                      setPayOpen(false)
                      setPayId(0)
                      }} className="payment-cross" src={cross}/>
                  <h1 class="payment-mainTitle">Оплата</h1>
    
                  <div className="pizzaMenu-type-row">
                {paymentType.map((item, index)=>(<p onClick={()=>setPaymentTypeOnClick(index)} className={payId==index ? "pizzaMenu-type-item active" : "pizzaMenu-type-item"}>{item.title}</p>))}
                </div>
                <AnimatePresence>
                  {!payId ? (
                    
                      <div className="cash">
                        <div className="cash-card">
                        <div className="pizzaMenu-type-row">
                    {change.map((item, index)=>(<p onClick={()=>setChangeTypeOnClick(index)} className={changeType==index ? "pizzaMenu-type-item active" : "pizzaMenu-type-item"}>{item.title}</p>))}
                    </div>

                      <AnimatePresence>
                        {changeType ? (
                        null
                        ) : (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                          <div className="change"> 
                          <input value={banknote} onChange={(e)=>{setBanknote(e.target.value)}} className="change-fromWhat" type="number" placeholder="С какой купюры готовить сдачу?"/>
                          </div>
                        </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="pizzaMenu-type-row">
                    {urgent.map((item, index)=>(<p onClick={()=>setChangeUrgentOnClick(index)} className={urgentId==index ? "pizzaMenu-type-item active" : "pizzaMenu-type-item"}>{item.title}</p>))}
                    </div>
                    <AnimatePresence>
                      {urgentId ? 
                      <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      ><input value={orderTime} onChange={(e)=>{setOrderTime(e.target.value)}} className="change-fromWhat" type="number" placeholder="К какому времени доставить?"/></motion.div>
                      : null}
                    </AnimatePresence>

                    <button onClick={()=>payCash()} className="card-pay-active">Оплатить</button>

                          </div>
                      </div>
                    
                  ) : (
                    <motion.div
                    initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                      <div className="card">
                        <div className="card-card">
                          <input value={cardNumber} onChange={(e)=>{
                            setCardNumber(e.target.value)
                            }} className="card-number" type="number" placeholder='Номер карты'/>
                          <div className="card-info-row">
                            <input value={cardFirstDate} onChange={(e)=>{
                              setCardFirstDate(e.target.value)
                              }} className="card-firstDate" type="number" placeholder="От"/>
                            <input value={cardSecDate} onChange={(e)=>setCardSecDate(e.target.value)} className="card-secDate" type="number" placeholder="До"/>
                            <input value={cardCvv} onChange={(e)=>setCardCvv(e.target.value)} className="card-cvv" type="password" placeholder="Код"/>
                            </div>
                            <button onClick={()=>payCard()} className={(cardNumber.length==16 && cardFirstDate.length==2 && cardSecDate.length==2 && cardCvv.length==3) ? "card-pay-active" : "card-pay"}>Оплатить</button>
                          </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                  
                  </div>
                  </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>)
     }

     </div>
     </div>
     </div>
     )}

          <AnimatePresence>
            {success && (
                
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                  <div className="success">
                  <div className="success-body">
                  <div className="success-content">
                  <p className="success-mainTitle">Заказ прошёл успешно!</p>
                  <div className="success-cart-card">
                    {cartList.map((item, index)=>{
                      return (<div className="success-item-row">
                        <img className="success-image" src={item.src}/>
                        <p className="success-cart-item-title">{item.title}</p>
                        <p className="success-cart-item-price">{item.price} руб.</p>
                      </div>)
                    })}
                    {cartList.map((item, index)=>{
                      finalSumm= finalSumm+ item.price
                      // return <p>{finalSumm}</p>
                    })}
                    <p className="success-final-price"><span>Итого: </span> <span>{Math.ceil((finalSumm)*100)/100} руб.</span></p>
                    <button onClick={()=>finishPurchase()} className="success-goBack">На главную</button>
                    </div>
                  </div>
                  </div>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>


     <Context.Provider value={{
        yourRegPhone,
        pizzas,
        setPizzas,
        isCartOpen,
        setIsCartOpen,
        isSigned,
        setIsSigned,
        signPls,
        setSignPls,
        sign,
        setSign,
        myAdress,
        setMyAdress,
        cartList,
        setCartList,
        snacks,
        setSnacks
      }}>
    <Routes>
      
        <Route path="/react-krammerpizza" element={<Main/>}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/combo" element={<Combo/>}/>
        <Route path="/snacks" element={<Snacks/>}/>
        <Route path="/desserts" element={<Desserts/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/other" element={<Other/>}/>
        <Route path="/discounts" element={<Discounts/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/>
     
    </Routes>
    </Context.Provider >
    
     
     </div>
    </div>
  );
}

export default App;
