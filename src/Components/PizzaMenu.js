import React, {useState} from 'react'
import cross from '../Img/cross.png'
import info from '../Img/info.jpg'
import { motion, AnimatePresence } from "framer-motion"

export const PizzaMenu = ({ pizzaMenuId, pizzas, isSigned, setIsSigned, signPls, setSignPls, myAdress, setMyAdress, cartList, setCartList, pizzaMenuShow, setPizzaMenuShow}) => {
    

    const [size, setSize] = useState([{title: 'Маленькая', sm: '25', price:pizzas[pizzaMenuId].minPrice}, {title: 'Средняя', sm: '30',  price:pizzas[pizzaMenuId].medPrice}, {title: 'Большая', sm: '35',  price:pizzas[pizzaMenuId].maxPrice}])
    const [sizeId, setSizeId] = useState(0)

    const [type, setType] = useState([{title: 'Традиционное', id: 0}, {title: 'Тонкое', id: 0}])
    const [typeId, setTypeId] = useState(0)


    const [openedModal, setOpenedModal] = useState(true)
    const [adressModal, setAdressModal] = useState(false)
    

    const setSizeOnClick = (index) =>{
        setSizeId(index)
    }
    const setTypeOnClick = (index) =>{
        setTypeId(index)
    }

    const addToCart = (pizzaMenuId, sizeId) =>{
        console.log(openedModal)
        if(!isSigned){
            setSignPls(true)
        }
        else{
            setCartList([...cartList, 
                {
                src:pizzas[pizzaMenuId].src,
                title: pizzas[pizzaMenuId].title, 
                size: size[sizeId].sm, 
                price: size[sizeId].price
            }])
            
            setPizzaMenuShow(false)
        }
        
    }

    const closeModal = () =>{
        setOpenedModal(false)
    setSignPls(false)
    setIsSigned(true)
    }

    const openAdressModal = () =>{
    setOpenedModal(false)
    setAdressModal(true)
    setSignPls(false)
    }



    // Стейты для адреса =======
    const [street, setStreet] = useState('')
    const [home, setHome] = useState('')
    const [flat, setFlat] = useState('')
    const [entrance, setEntrance] = useState('')
    const [floor, setFloor] = useState('')
    // Валидаторы для полей адреса ======
    const [adressValidator, setAdressValidator] = useState(false)
    
    // Стейт класснейма для кнопки=====
    const [activeBut, setActivebut] = useState(false)

    

    // Функция отправки адресса "на сервер"=====
    const sendAdressData = () =>{
        setAdressValidator(false)
        if(street=='' || home=='' || flat==''){
            setAdressValidator(true)
        }
        else{
            setOpenedModal(false)
            setMyAdress({
                street: street,
                home: home,
                flat: flat,
                entrance: entrance,
                floor:floor
            })
            setAdressModal(false)
            setIsSigned(true)
            
        }
    }

    // Creating state responsible for opening of modal with energy value of pizza
    const [infoOpen, setInfoOpen] = useState(false)
    const toggleInfoModal = () =>{
        setInfoOpen((prev)=>!prev)
    }


  return (
    <div>
        <div className="pizzaMenu">
        <div className="pizzaMenu-body">
        <div className="pizzaMenu-content">
            <div className="pizzaMenu-icon-row">
                <img onClick={()=>setPizzaMenuShow(false)} className="pizzaMenu-cross" src={cross}/>
                <div className="pizzaMenu-info-block">
                    <img onClick={toggleInfoModal} className="pizzaMenu-info" src={info} />
                    
                    <AnimatePresence>
                        {infoOpen && (<motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        ><div class="info-body">
                        <div class="info-content">
                        <p class="info-title">Пищевая ценность на 100г</p>
                       
                        <div className="info-data-row">
                            <p className="info-data-title">Энерг. ценность</p>
                            <p className="info-data-data">{pizzas[pizzaMenuId].energy}</p>
                        </div>
                        <div className="info-data-row">
                            <p className="info-data-title">Белки</p>
                            <p className="info-data-data">{pizzas[pizzaMenuId].protein}</p>
                        </div>
                        <div className="info-data-row">
                            <p className="info-data-title">Жиры</p>
                            <p className="info-data-data">{pizzas[pizzaMenuId].fat}</p>
                        </div>
                        <div className="info-data-row">
                            <p className="info-data-title">Углеводы</p>
                            <p className="info-data-data">{pizzas[pizzaMenuId].carbo}</p>
                        </div>
                        <div className="info-data-row">
                            <p className="info-data-title">Вес</p>
                            <p className="info-data-data">{pizzas[pizzaMenuId].weight}</p>
                        </div>
                        <p className="info-data-subtitle">Может содержать аллергены: глютен, молоко и продукты его переработки (в том числе лактозу), а также некоторые другие аллергены</p>
    
                        </div>
                        </div></motion.div>)}
                    </AnimatePresence>
                    
                    
                    
                    
                    </div >
            </div >
        <div className="pizzaMenu-row">
            <img className="pizzaMenu-image" src={pizzas[pizzaMenuId].src}/>
            <div className="pizzaMenu-text">
                <p className="pizzaMenu-title">{pizzas[pizzaMenuId].title}</p>

                <p className="pizzaMenu-size">{size[sizeId].sm} см , {type[typeId].title.toLowerCase()} тесто</p>

                <p className="pizzaMenu-ingredients">{pizzas[pizzaMenuId].ingredients}</p>
            <div className="pizzaMenu-size-row">
                {size.map((item, index)=>(<p onClick={()=>setSizeOnClick(index)} className={sizeId==index ? "pizzaMenu-size-item active" : "pizzaMenu-size-item"}>{item.title}</p>))}
            </div>

            <div className="pizzaMenu-type-row">
            {type.map((item, index)=>(<p onClick={()=>setTypeOnClick(index)} className={typeId==index ? "pizzaMenu-type-item active" : "pizzaMenu-type-item"}>{item.title}</p>))}
            </div>

            <p onClick={()=>addToCart(pizzaMenuId, sizeId)} className="pizzaMenu-addToCart">Добавить в корзину за {size[sizeId].price} руб.</p>
            <AnimatePresence>
                {signPls && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                        <div class="setSign">
                        <div class="setSign-body">
                        <div class="setSign-content">
                        <img onClick={()=>{setSignPls(false)}} src={cross} class="setSign-cross"/>
                        <h1 class="setSign-title">Какой у вас адрес?</h1>
                        <p className="setSign-subtitle">Хотим убедиться, что вы в зоне доставки. Адрес сохраним для будущих заказов.</p>
                        <button onClick={openAdressModal} className="setSign-pointAdress">Указать адрес доставки</button>
                        <div><button onClick={()=>{
                            closeModal()
                            setMyAdress({
                                street: '-',
                                home: '-',
                                flat: '-',
                                entrance: '-',
                                floor:'-'})
                            }} className="setSign-takeFrom">Забрать из пиццерии</button></div>
                        {isSigned && <button onClick={closeModal} className="setSign-useProfile">Использовать аккаунт</button>}
                        </div>
                        </div>
                        </div>
                    </motion.div>
                    
                )}
            </AnimatePresence>
            {adressModal && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                        <div class="adressModal">
                        <div class="adressModal-body">
                        <div class="adressModal-content">
                        <img onClick={()=>setAdressModal(false)} src={cross} class="adressModal-cross"/>
                        <h1 className="adressModal-title">Новый адресс</h1>
    
    
                        <input onChange={(e)=>setStreet(e.target.value)} value={street} className="adressModal-full" type="text" placeholder="Укажите улицу*"/>
                        
                       <div className="adressModal-input-row"> 
                        <input onChange={(e)=>setHome(e.target.value)} value={home} className="adressModal-half" type="text" placeholder="Дом*"/>
                        <input onChange={(e)=>setFlat(e.target.value)} value={flat} className="adressModal-half" type="text" placeholder="Квартиру*"/>
                        </div>
                        <div className="adressModal-input-row"> 
                        <input onChange={(e)=>setEntrance(e.target.value)} value={entrance} className="adressModal-half" type="text" placeholder="Подъезд"/>
                        <input onChange={(e)=>setFloor(e.target.value)} value={floor} className="adressModal-half" type="text" placeholder="Этаж"/>
                        </div>
                       { adressValidator && <p className="adress-validator">Все поля должны быть заполнены!</p>}
                        <button onClick={sendAdressData} className={(street!=='' && home!=='' && flat!=='' ) ? "adressModal-button active" : "adressModal-button"}>Сохранить</button>
    
    
                        </div>
                        </div>
                        </div>
                    </motion.div>
                )}


            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
