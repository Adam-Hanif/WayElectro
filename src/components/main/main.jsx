import React from "react";
import "./main.scss";
import "slick-carousel/slick/slick.css";
import "./Slick Slider/slick-theme.scss";
import logo from "../../assets/images/logo_main.png";
import basket from "../../assets/images/basket.svg";
import burgerMenu from "../../assets/images/burger.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Main({ burgerActive, setBurgerActive, scrollToTarget }) {
  const navigate = useNavigate();

  // Общая функция для перехода и прокрутки
  const handleButtonClick = (page, sectionId) => {
    navigate(page);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Небольшая задержка для гарантии загрузки страницы
  };

  const handleClick = () => {
    setBurgerActive(!burgerActive);
  };

  const location = useLocation();

  return (
    <div>
      <div className="container">
        <div className="main">
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>

          <div className="main_li">
            <li>
              <Link to={"/catalog"}>Каталог</Link>
            </li>
            <li>
              <Link onClick={() => handleButtonClick("/", "section1")} to={"/"}>
                Преимущества
              </Link>
            </li>
            <li>
              <Link onClick={() => handleButtonClick("/", "section2")} to={"/"}>
                Наши контакты
              </Link>
            </li>
          </div>
          {location.pathname === "/basket" ? (
            ""
          ) : (
            <Link to={"/basket"}>
              <img src={basket} alt="" className="basket" />
            </Link>
          )}

          <img
            onClick={handleClick}
            src={burgerMenu}
            className="icon_burgerMenu"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
