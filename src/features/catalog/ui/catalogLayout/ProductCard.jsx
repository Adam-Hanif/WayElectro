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
  const count = existingItem ? existingItem.count : 0;
  const isBuying = count > 0;

  const handleBuyClick = (e) => {
    e.preventDefault();
    if (!isBuying) {
      dispatch(addToCart({ id, name, image_src, unit }));
    }
  };

  const handleIncrease = () => {
    dispatch(increaseCount(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseCount(id));
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
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
          <div>Артикуль {}</div>
          <button className="btn_produktCard" onClick={handleBuyClick}>
            Купить
          </button>
        </div>
      ) : (
        <div className="btn_item">
          <div>Артикуль {}</div>
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
        </div>
      )}
    </div>
  );
}

export default ProductCard;
