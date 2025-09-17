import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCount } from "../../model/slices/cartSlice";

function ProductCard({ id, image_src, name, unit = "шт" }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.catalogReducer.cartSlice.items.find((item) => item.id === id)
  );

  const [localCount, setLocalCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleIncrease = () => {
    setLocalCount(prev => prev + 1);
    setAddedToCart(false);
  };

  const handleDecrease = () => {
    if (localCount > 1) {
      setLocalCount(prev => prev - 1);
      setAddedToCart(false);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setLocalCount(value);
      setAddedToCart(false);
    }
  };

const handleAddToCart = () => {
  if (cartItem) {
    // Обновляем существующий товар до значения из input
    dispatch(setCount({ id, count: localCount }));
  } else {
    // Добавляем новый товар с количеством из input
    dispatch(addToCart({ id, name, image_src, unit, count: localCount }));
  }
  setAddedToCart(true);
};

  return (
    <div className="card-item">
      <Link to={`/catalog/${id}`}>
        <div className="card-img">
          <div className="img-block">
            <img src={image_src} alt={name} />
          </div>
        </div>
        <div className="card-info">{name}</div>
      </Link>

      {/* Счётчик */}
      <div className="quantity">
        <button type="button" onClick={handleDecrease}>-</button>
        <input
          type="number"
          min="1"
          value={localCount}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleIncrease}>+</button>
      </div>

      {/* Кнопка "В корзину" */}
      <button
        type="button"
        className={`add-to-cart ${addedToCart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
      >
        {addedToCart ? "В корзине ✔" : "В корзину"}
      </button>
    </div>
  );
}

export default ProductCard;
