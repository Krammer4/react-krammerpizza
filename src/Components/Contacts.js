import React from "react";
import { useForm } from "react-hook-form";
import { allTowns } from "../consts";
import star from "../Img/star.png";

import "./styles/Contacts.css";

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [reviews, setReviews] = React.useState([]);

  const onSubmit = (data) => {
    const dateTime = getCurrentDateTime();
    setReviews([...reviews, { ...data, dateTime }]);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    const month =
      now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    const date = `${day}.${month}.${now.getFullYear()}`;
    const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const time = `${hours}:${minutes}`;
    return `${date}, ${time}`;
  };

  const validatePhone = (value) => {
    return /^(\+375|80)(29|25|44|33)(\-)?[0-9]{3}(\-)?[0-9]{2}(\-)?[0-9]{2}$/.test(
      value
    );
  };

  return (
    <div className="contacts">
      <div>
        <h3 className="contacts-point">Телефон:</h3>
        <a className="contacts-content" href="tel:+375292196736">
          21-96-736
        </a>
      </div>

      <div>
        <h3 className="contacts-point">Email:</h3>
        <a className="contacts-content" href="mailto:bukatovgleb566@gmail.com">
          bukatovgleb566@gmail.com
        </a>
      </div>

      <div>
        <h3 className="contacts-point">Мы есть в {allTowns.length} городах:</h3>

        <div className="contacts-towns-row">
          {allTowns.map((town) => {
            return (
              <div key={town.id} className="contacts-townCard">
                <div className="contacts-townCard-content">
                  <p className="contacts-townCard-title">{town.title}</p>
                  <div className="contacts-starsRow">
                    <p className="contacts-townCard-stars">{town.rate}</p>
                    <img
                      className="contacts-townCard-star"
                      src={star}
                      alt="star"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="contacts-reviews">
        <div style={{ marginBottom: 20 }}>
          <h3 className="contacts-point">Отзывы:</h3>
          {reviews.length === 0 ? (
            <p style={{ fontSize: 20, opacity: 0.6 }}>Пока нет отзывов.</p>
          ) : (
            reviews.map((review, index) => (
              <div
                style={{
                  border: "1px solid #000",
                  fontSize: "18px",
                  paddingRight: 20,
                  paddingLeft: 20,
                  borderRadius: "14px",
                  marginTop: 20,
                }}
                key={index}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ fontWeight: 500 }}>{review.name}</p>
                  <p style={{ marginLeft: 16 }}>{review.phoneNumber}</p>
                </div>
                <p className="contacts-review-text">{review.text}</p>
                <p>{review.dateTime}</p>
              </div>
            ))
          )}
        </div>
        <h3 className="contacts-point">Написать отзыв</h3>
        <form
          className="contacts-review-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Ваше имя"
          />
          {errors.name && (
            <p className="error-message">
              Поле "Имя" обязательно для заполнения
            </p>
          )}
          <input
            {...register("phoneNumber", {
              required: true,
              validate: validatePhone,
            })}
            type="tel"
            placeholder="Ваш номер телефона (+375 xx-xxx-xx-xx)"
          />
          {errors.phoneNumber?.type === "required" && (
            <p className="error-message">
              Поле "Номер телефона" обязательно для заполнения
            </p>
          )}
          {errors.phoneNumber?.type === "validate" && (
            <p className="error-message">
              Пожалуйста, введите корректный номер телефона +375 (xx) xxx xx xx
            </p>
          )}
          <input
            {...register("text", { required: true })}
            placeholder="Ваш отзыв"
          ></input>
          {errors.text && (
            <p className="error-message">
              Поле "Отзыв" обязательно для заполнения
            </p>
          )}
          <button
            style={{
              backgroundColor: "#ff6900",
              paddingTop: "14px",
              paddingBottom: "14px",
            }}
            className="contacts-review-button"
            type="submit"
          >
            Отправить отзыв
          </button>
        </form>
      </div>
    </div>
  );
};
