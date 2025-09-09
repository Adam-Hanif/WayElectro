import React from "react";
import { Link } from "react-router-dom";
import imgRight from "@/shared/assets/images/back.png";
import "./infoCatalog.scss";
function InfoCatalog() {
  return (
    <div>
      <div className="info_catalog">
        <div className="info_catalog-text">
          <button className="btn_back">
            <Link to={"/"}>
              <img src={imgRight} alt="" />
            </Link>
          </button>
          <p>
            Каталог <br /> продукции
          </p>
        </div>
        <div className="info_catalog-item">
          <div className="catalog_Feedback">
            <p>Остались вопросы?</p>
            <button>
              <span>Связаться с нами</span>
            </button>
          </div>
          <p className="info_catalog-textInfo">
            Позвоните нам, расскажем что лучше выбрать. Если нашли подходящий
            товар или нужна помощь
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCatalog;
