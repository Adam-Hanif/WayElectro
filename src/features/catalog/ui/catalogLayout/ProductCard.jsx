import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCount } from "../../model/slices/cartSlice";

function ProductCard({ id, image_src, name, unit = "шт" }) {
  const dispatch = useDispatch();

  // достаём позицию из корзины по id
  const cartItem = useSelector((state) =>
    state.catalogReducer.cartSlice.items.find((i) => i.id === id)
  );
  const inCart = !!cartItem; // <-- источник правды для кнопки

  const [localCount, setLocalCount] = useState(1);

  // если товар уже есть в корзине — синхронизируем инпут с количеством из корзины
  useEffect(() => {
    if (cartItem?.count && cartItem.count > 0) {
      setLocalCount(cartItem.count);
    }
  }, [cartItem?.count]);

  const handleIncrease = () => setLocalCount((p) => p + 1);
  const handleDecrease = () => setLocalCount((p) => (p > 1 ? p - 1 : 1));
  const handleInputChange = (e) => {
    const v = parseInt(e.target.value, 10);
    if (!isNaN(v) && v >= 1) setLocalCount(v);
  };

  const handleAddToCart = () => {
    if (inCart) {
      dispatch(setCount({ id, count: localCount }));
    } else {
      dispatch(addToCart({ id, name, image_src, unit, count: localCount }));
    }
  };

  return (
    <div className="card-item">
      <Link to={`/catalog/${id}`} className="card-link">
        <div className="card-img">
          <img
            src={image_src}
            alt={name}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>
        <div className="card-info">{name}</div>
      </Link>

      <div className="quantity">
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <input
          type="number"
          min="1"
          value={localCount}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>

      <button
        type="button"
        className={`add-to-cart ${inCart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
      >
        {inCart ? "В корзине ✔" : "В корзину"}
      </button>
    </div>
  );
}

export default ProductCard;
