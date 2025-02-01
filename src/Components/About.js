import React from "react";
import aboutImg1 from "../Img/about1.jpg";
import aboutImg2 from "../Img/about2.jpg";
import aboutImg3 from "../Img/about3.jpg";

import "./styles/About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          О пиццерии React Pizza – контакты и история доставки пиццы и закусок
        </title>
        <meta
          name="description"
          content="React Pizza – это история страсти к пицце и закускам. Узнайте больше о нашем меню, быстрой доставке и как мы создаем лучшие блюда.
"
        />
      </Helmet>
      <div className="about-container">
        <div className="about-row">
          <img className="about-image" src={aboutImg1} />
          <p className="about-subtitle right">
            Наша компания - это команда профессионалов, которая с радостью
            доставит вам самую вкусную и{" "}
            <Link className="about-orange-span" to={"/pizza"}>
              качественную пиццу
            </Link>{" "}
            прямо к вашему дому или офису. Мы работаем для того, чтобы каждый
            наш клиент получил истинное удовольствие от нашей продукции и
            обслуживания.
          </p>
        </div>

        <div className="about-row">
          <p className="about-subtitle left">
            Мы гордимся тем, что используем только свежие и натуральные
            ингредиенты для приготовления наших пицц. Наш шеф-повар тщательно
            подбирает каждый компонент, чтобы обеспечить вам неповторимый вкус и
            насыщенный аромат. Мы следим за качеством каждого шага в процессе
            приготовления и доставки, чтобы вы могли насладиться{" "}
            <Link className="about-orange-span" to={"/pizza"}>
              идеальной пиццей
            </Link>{" "}
            без каких-либо хлопот.
          </p>
          <img className="about-image" src={aboutImg2} />
        </div>

        <div className="about-row">
          <img className="about-image" src={aboutImg3} />
          <p className="about-subtitle right">
            Мы стремимся к тому, чтобы каждый клиент остался доволен нашим
            сервисом и продукцией. Наша цель - создать уютную и дружелюбную
            атмосферу, где каждый может насладиться{" "}
            <Link className="about-orange-span" to={"/pizza"}>
              вкусной пиццей
            </Link>{" "}
            в удобное для себя время. Мы ценим каждого клиента и готовы
            предложить лучший сервис и качество продукции для вашего
            удовольствия.
          </p>
        </div>

        <div className="about-pluses">
          <h2 className="about-plus-title">Наши конкурентные преимущества:</h2>
          <ul className="about-pluses-list">
            <li className="about-plus">Быстрая доставка</li>
            <li className="about-plus">Широкий выбор</li>
            <li className="about-plus">Качество ингредиентов</li>
            <li className="about-plus">Удобство заказа</li>
            <li className="about-plus">Персонализированный сервис</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
