import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

// import imgCard from "../../assets/images/imgRange.png";

function Card({ id, name, imageSrc }) {
  // const cartItem = useSelector((state) =>
  //   state.cartSlice.items.find((obj) => obj.id === id)
  // );

  // const dispatch = useDispatch();

  // const addedCount = cartItem ? cartItem.count : 0;

  return (
    <>
      <div className="card-item">
        <div className="card-img">
          <p>
            <span /> В наличии
          </p>
          <div className="img-block">
            <img src={imageSrc} alt="" />
          </div>
        </div>
        <div className="card-info">
          <p className="card-info_title">{name}</p>
          {/* <p className="card-info_name">{text}</p> 
            {/* <p className="card-info_price">{price}₽</p>
        </div>
        <div className="card-item_btn">
          {/* <button
            onClick={() => {
              window.location.href = `/catalogById/${id}`;
            }}
            className="card-btn-1"
          >
            Подробности
          </button> */}
          {/* <button
            className="card-btn-2"
            onClick={() =>
              dispatch(addItem({ id, name, price, text, imageUrl }))
            }
          >
            В корзину <span />
          </button> */}
          {/* {addedCount > 0 && <i className="card-btn-2_count">{addedCount}</i>} */}
        </div>
      </div>
    </>
  );
}

export default Card;
