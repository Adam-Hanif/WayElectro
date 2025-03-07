import React from "react";
import "./basket.scss";
import imgBasket from "../../assets/images/bsket-img.png";
import Main from "../main/main";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
function Basket() {
  const items = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  const onClickRemove = (id) => {
    if (window.confirm("Вы действительно хотите удалить этот товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="basket">
      <Main />
      <div className="block_basket container">
        <div className="basket-top">
          <p>Формирование заказа</p>

          {items.map((item, id) => {
            return (
              <div>
                <div className="basket-item">
                  <img src={imgBasket} className="card-img" alt="" />
                  <div className="basket-text">
                    <p>{item.name}</p>
                    <span>{item.text}</span>
                  </div>
                  <div className="basketPrice">
                    <div className="quantity">
                      <button
                        onClick={() => {
                          if (item.count > 1) {
                            dispatch(minusItem(item.id));
                          }
                        }}
                        className="quantity_btn-minus"
                      >
                        &ndash;
                      </button>
                      <span className="quantity-namber">{item.count}</span>
                      <button
                        onClick={() => {
                          dispatch(
                            addItem({
                              id: item.id,
                            })
                          );
                        }}
                      >
                        +
                      </button>
                      <div className="quantity-price">
                        <p>{item.price}₽</p>
                        <span> {item.count} шт</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClickRemove(item.id);
                      }}
                      className="basketExit"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-price">
          <p>Итого:</p>
          <span>{totalPrice} ₽</span>
        </div>
        <div className="basket-pre-order">
          <form className="form">
            <p>Ваше имя*</p>
            <input
              type="text"
              className="form__field"
              placeholder="Представьтесь пожалуйста"
            />
            <p>Ваш телефон*</p>
            <input type="tel" className="form__field" placeholder="Ваш номер" />
            <p>Ваш комментарий</p>
            <textarea
              className="form__field"
              placeholder="Комментарий"
            ></textarea>
            <button className="btn btn--primary btn--inside uppercase">
              Оформить предзаказ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Basket;
