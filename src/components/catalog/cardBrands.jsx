import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";

function CardBrands({ id, image_src }) {
  return (
    <>
      <div className="card-item">
        <div className="card-img">
          <p>
            <span /> В наличии
          </p>
          <div className="img-block">
            <img src={image_src} alt="" />
          </div>
        </div>
        <div className="card-info"></div>
      </div>
    </>
  );
}

export default CardBrands;
