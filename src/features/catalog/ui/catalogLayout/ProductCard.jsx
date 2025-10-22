import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setCount,
  removeFromCart,
} from "../../model/slices/cartSlice";

function ProductCard({ id, image_src, name, unit = "шт" }) {
  const dispatch = useDispatch();

  // товар из корзины (если есть)
  const cartItem = useSelector((state) =>
    state.catalogReducer.cartSlice.items.find((i) => i.id === id)
  );
  const inCart = !!cartItem;

  // локальное количество
  const [localCount, setLocalCount] = useState(1);

  // синхронизация локального количества с корзиной
  useEffect(() => {
    if (cartItem?.count > 0) setLocalCount(cartItem.count);
  }, [cartItem?.count]);

  // есть ли несохранённые изменения количества
  const pendingUpdate = useMemo(() => {
    if (!inCart) return false;
    return (cartItem?.count ?? 0) !== localCount;
  }, [inCart, cartItem?.count, localCount]);

  // +/-
  const handleIncrease = () => setLocalCount((p) => p + 1);
  const handleDecrease = () => setLocalCount((p) => (p > 1 ? p - 1 : 1));

  // ввод вручную
  const handleInputChange = (e) => {
    const v = parseInt(e.target.value, 10);
    if (!isNaN(v) && v >= 1) setLocalCount(v);
  };

  // основная кнопка: добавить / обновить / удалить
  const handleMainButton = () => {
    if (!inCart) {
      // не в корзине → добавить
      dispatch(addToCart({ id, name, image_src, unit, count: localCount }));
      return;
    }

    if (pendingUpdate) {
      // в корзине и есть изменения → обновить количество
      dispatch(setCount({ id, count: localCount }));
      return;
    }

    // в корзине и изменений нет → удалить (по желанию)
    dispatch(removeFromCart(id));
    setLocalCount(1);
  };

  // текст и класс кнопки по состоянию
  const buttonText = !inCart
    ? "В корзину"
    : pendingUpdate
    ? "В корзину"
    : "В корзине ✔";
  const buttonClass = !inCart ? "" : pendingUpdate ? "update" : "in-cart";

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
          // onBlur больше не обязателен: обновление делаем по кнопке "Обновить"
        />
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>

      <button
        type="button"
        className={`add-to-cart ${buttonClass}`}
        onClick={handleMainButton}
        aria-pressed={inCart}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ProductCard;
