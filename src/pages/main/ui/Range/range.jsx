import React from "react";
import "./range.scss";
import rangeLigo from "@/shared/assets/images/txt.svg";
import ImgСable from "@/shared/assets/images/imgRange.png";
import ImgСable2 from "@/shared/assets/images/imgRange-2.png";
import ImgСable3 from "@/shared/assets/images/imgRange-3.png";
import { Link } from "react-router-dom";
function Range() {
  return (
    <div className="block-range">
      <div className="img-range">
        <img src={rangeLigo} alt="" />
      </div>
      <div className="ProductCatalog">
        <div className="Catalog-info">
          <h2>
            Каталог <br /> продукции
          </h2>
          <p>
            Каталог товаров регулярно дополняется. Если вы не нашли подходящий
            товар, свяжитесь с нами, мы найдем его для вас.
          </p>
          <Link to={"/catalog"}>
            <button className="btn_catalog">
              <span>В каталог </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="rangeCart">
        <div className="rangeCart_info">
          <h3>
            Кабель
            <span />
          </h3>
          <img src={ImgСable} alt="" />
        </div>
        <div className="rangeCart_info">
          <h3>
            Автоматика
            <span />
          </h3>
          <img className="ImgСable2 " src={ImgСable2} alt="" />
        </div>
        <div className="rangeCart_info">
          <h3>
            Аксессуары
            <span />
          </h3>
          <img className="ImgСable3" src={ImgСable3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Range;
