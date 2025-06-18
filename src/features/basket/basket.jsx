import React, { useState } from "react";
import "./basket.scss";
import imgBasket from "@/shared/assets/images/bsket-img.png";
import Main from "@/shared/ui/main/main";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import { sendOrderToTelegram } from "../../redux/slices/orderSlice";

function Basket() {
  const items = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  const { loading, error, success } = useSelector(
    (state) => state.orderReducer
  );
  console.log(items);

  const onClickRemove = (id) => {
    if (window.confirm("Вы действительно хотите удалить этот товар?")) {
      dispatch(removeItem(id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      customer: formData,
      products: items,
      totalPrice,
    };

    dispatch(sendOrderToTelegram(orderData));
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comments: "",
  });
  console.log(formData.phone);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <form onSubmit={handleSubmit} className="form">
            <p>Ваше имя*</p>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <p>Ваш телефон*</p>
            <input
              type="number"
              pattern="\d*"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              required
            />
            <p>Ваш адрес*</p>
            <input
              type="text"
              name="address"
              placeholder="Адрес"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <p>Ваш комментарий</p>
            <textarea
              className="form__field"
              type="text"
              name="comments"
              placeholder="Комментарий"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            <button
              className="btn btn--primary btn--inside uppercase"
              type="submit"
              disabled={loading}
            >
              {loading ? "Отправка..." : "Оформить заказ"}
            </button>
            {/* <button className="btn btn--primary btn--inside uppercase">
              Оформить предзаказ
            </button> */}
          </form>
          {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
          {success && (
            <p style={{ color: "green" }}>Заказ успешно отправлен!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
