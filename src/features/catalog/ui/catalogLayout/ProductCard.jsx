import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseCount,
  decreaseCount,
  setCount,
} from "../../model/slices/cartSlice";

function ProductCard({ id, image_src, name, unit = "шт", price }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.catalogReducer.cartSlice.items
  );

  const existingItem = cartItems.find((item) => item.id === id);
  const initialCount = existingItem ? existingItem.count : 0;

  const [count, setLocalCount] = useState(initialCount);
  const [isBuying, setIsBuying] = useState(initialCount > 0);

  const handleBuyClick = (e) => {
    e.preventDefault();
    if (!isBuying) {
      setIsBuying(true);
      setLocalCount(1);
      dispatch(addToCart({ id, name, image_src, unit }));
    }
  };

  const handleIncrease = () => {
    setLocalCount((prev) => prev + 1);
    dispatch(increaseCount(id));
  };

  const handleDecrease = () => {
    if (count > 1) {
      setLocalCount((prev) => prev - 1);
      dispatch(decreaseCount(id));
    } else {
      setLocalCount(0);
      setIsBuying(false);
      dispatch(decreaseCount(id)); // удалит товар из корзины
    }
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;

    setLocalCount(value);
    setIsBuying(value > 0);

    dispatch(setCount({ id, count: value }));
  };

  return (
    <div className="card-item">
      <Link to={`/catalog/${id}`}>
        <div className="card-img">
          <img src={image_src} alt={name} />
        </div>
        <div className="card-info">{name}</div>
      </Link>

      {!isBuying ? (
        <div className="btn_item">
          <button className="btn_produktCard btn_details">Подробности</button>
          <button className="btn_produktCard" onClick={handleBuyClick}>
            Купить
          </button>
        </div>
      ) : (
        <div className="counter">
          <button onClick={handleDecrease}>-</button>
          <input
            type="number"
            min="0"
            value={count}
            onChange={handleInputChange}
          />
          <span>{unit}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
