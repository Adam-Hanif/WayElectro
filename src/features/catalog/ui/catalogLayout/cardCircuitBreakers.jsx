import React from "react";

function cardCircuitBreakers({ id, image_src, name }) {


  return (
    <div>
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
          <div className="card-info">{name}</div>
        </div>
      </>
    </div>
  );
}

export default cardCircuitBreakers;
