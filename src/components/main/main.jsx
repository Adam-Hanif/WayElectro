import React from "react";
import "./main.scss";
import "slick-carousel/slick/slick.css";
import "./Slick Slider/slick-theme.scss";
import logo from "../../assets/images/logo_main.png";
import basket from "../../assets/images/basket.svg";
import burgerMenu from "../../assets/images/burger.png";
import { Link, useLocation } from "react-router-dom";

function Main({
  burgerActive,
  setBurgerActive,
  scrollToTarget,
  scrollToContact,
}) {
  const handleClick = () => {
    setBurgerActive(!burgerActive);
  };

  const ScrolClick = () => {
    scrollToTarget();
  };
  const ScrollContact = () => {
    scrollToContact();
  };

  const location = useLocation();
  console.log(location);

  // const [scroll, setScroll] = React.useState("");

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
              <Link onClick={ScrolClick} to={"/"}>
                Преимущества
              </Link>
            </li>
            <li>
              <Link onClick={ScrollContact} to={"/"}>
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
