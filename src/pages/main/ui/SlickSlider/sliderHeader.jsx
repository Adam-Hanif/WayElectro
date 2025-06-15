import React from "react";
import Slider from "react-slick";
import imgSlider from "../../../../assets/images/Group633072.png";
import photo from "../../../../assets/images/photo.png";
import { Link } from "react-router-dom";
export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="container_Slider">
      <Slider {...settings}>
        <div>
          <div className="header-info">
            <div className="block_imgSlider">
              <img src={imgSlider} alt="" className="imgSlider" />
            </div>

            <div className="item_slider">
              <h1>У нас самые труднодоступные бренды по выгодой цене</h1>
              <p>
                WAYELECTRO работает только с надежными и проверенными
                производителями, чтобы уверенно предлагать клиентам продукцию
                высокого уровня.
              </p>
              <Link to={"/catalog"}>
                <button className="btn_slider">
                  <span>Перейти в каталог </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="header-info">
            <div className="block_imgSlider">
              <img src={imgSlider} alt="" className="imgSlider" />
            </div>

            <div className="item_slider">
              <h1>У нас самые труднодоступные бренды по выгодой цене</h1>
              <p>
                WAYELECTRO работает только с надежными и проверенными
                производителями, чтобы уверенно предлагать клиентам продукцию
                высокого уровня.
              </p>

              <Link to={"/catalog"}>
                <button className="btn_slider">
                  <span>Перейти в каталог </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="header-info">
            <div className="block_imgSlider">
              <img src={photo} alt="" className="photo" />
            </div>

            <div className="item_slider">
              <h1>У нас быстрая доставка</h1>
              <p>
                WAYELECTRO работает только с надежными и проверенными
                производителями, чтобы уверенно предлагать клиентам продукцию
                высокого уровня.
              </p>
              <Link to={"/catalog"}>
                <button className="btn_slider">
                  <span>Перейти в каталог </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
