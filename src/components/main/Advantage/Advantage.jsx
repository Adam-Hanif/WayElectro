import React from "react";
import "./Advantage.scss";
import imgAdvantage from "../../../assets/images/img-advantage.png";
import qualityImg from "../../../assets/images/quality_img.png";
import { Link } from "react-router-dom";
function Advantage({ Advantages }) {
  return (
    <div ref={Advantages} className="block_advantag">
      <img className="icon_advantag" src={imgAdvantage} alt="" />
      <div className="item_advantage">
        <p>Почему выбирают нас</p>
        <span className="span_advantage">
          Сотрудничая с нами, вы получаете лучшие условия и гарантию поставки
        </span>
        <Link to={"/catalog"}>
          <button className="btm_advantage">
            <span>В каталог </span>
          </button>
        </Link>
      </div>
      <div className="advantage_card">
        <div className="card_guarantee">
          <p>
            Гарантия <br /> товара
          </p>
          <span>
            у магазина есть строгий контроль качества, чтобы гарантировать, что
            каждый товар соответствует стандартам и требованиям
          </span>
        </div>
        <div className="card_quality">
          <div className="quality_item">
            <p>
              Качество <br /> продукции
            </p>
            <span>
              продукция сертифицирована <br /> по ГОСТам и СниПам и имеет <br />
              паспорта качества
            </span>
          </div>
          <div className="quality_img">
            <Link
              download={"Розетки и выключатели.docx"}
              target="_blank"
              rel="noreferrer"
            >
              <span />
            </Link>

            <img src={qualityImg} alt="" />
          </div>
        </div>
        <div className="card_item">
          <div className="Fast_shipping">
            <p>Быстрая доставка</p>
            <span>
              работаем c производителями напрямую, <br /> минуя посредников,
              чтобы предложить вам
              <br /> высокое качество по приятной цене.
            </span>
          </div>
          <div className="fair_prices">
            <p>Честные цены</p>
            <span>
              работаем c производителями напрямую, <br /> минуя посредников,
              чтобы предложить вам
              <br /> высокое качество по приятной цене.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
