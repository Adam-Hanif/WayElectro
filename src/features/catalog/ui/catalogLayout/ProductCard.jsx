import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setCount,
  removeFromCart,
} from "../../model/slices/cartSlice";

function ProductCard({ id, image_src, name, unit = "шт" }) {
  const dispatch = useDispatch();

  // Проверяем, есть ли этот товар в корзине
  const cartItem = useSelector((state) =>
    state.catalogReducer.cartSlice.items.find((i) => i.id === id)
  );
  const inCart = !!cartItem; // true — если товар уже добавлен

  // Локальное состояние количества
  const [localCount, setLocalCount] = useState(1);

  // Если товар уже в корзине — подставляем его количество
  useEffect(() => {
    if (cartItem?.count > 0) setLocalCount(cartItem.count);
  }, [cartItem?.count]);

  // Увеличить количество (+1)
  const handleIncrease = () => setLocalCount((p) => p + 1);

  // Уменьшить количество (минимум 1)
  const handleDecrease = () => setLocalCount((p) => (p > 1 ? p - 1 : 1));

  // Изменение вручную в инпуте
  const handleInputChange = (e) => {
    const v = parseInt(e.target.value, 10);
    if (!isNaN(v) && v >= 1) setLocalCount(v);
  };

  // Главная кнопка — добавляет или удаляет товар
  const handleMainButton = () => {
    if (inCart) {
      // Если товар уже в корзине — удалить
      dispatch(removeFromCart(id));
      setLocalCount(1); // сбрасываем количество
    } else {
      // Если товара нет — добавить
      dispatch(addToCart({ id, name, image_src, unit, count: localCount }));
    }
  };

  return (
    <div className="card-item">
      {/* Ссылка на страницу товара */}
      <Link to={`/catalog/${id}`} className="card-link">
        <div className="card-img">
          <img
            src={image_src}
            alt={name}
            loading="lazy"
            decoding="async"
            // Подставляем заглушку, если изображения нет
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        </div>
        <div className="card-info">{name}</div>
      </Link>

      {/* Счётчик количества */}
      <div className="quantity">
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <input
          type="number"
          min="1"
          value={localCount}
          onChange={handleInputChange}
          // При потере фокуса обновляем количество в корзине
          onBlur={() => {
            if (inCart) dispatch(setCount({ id, count: localCount }));
          }}
        />
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>

      {/* Кнопка добавления или удаления */}
      <button
        type="button"
        className={`add-to-cart ${inCart ? "in-cart" : ""}`}
        onClick={handleMainButton}
      >
        {inCart ? "В корзине ✔" : "В корзину"}
      </button>
    </div>
  );
}

export default ProductCard;
