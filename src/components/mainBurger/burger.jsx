import React from "react";
import "./burger.scss";
import logo from "../../assets/images/logo.png";

function MainBurger({ burgerActive, setBurgerActive }) {
  const handleClick = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <div className="burger_block container">
      <div className={burgerActive ? "burger-active" : "burger"}>
        <div className="burger-top">
          <div className="burger-logo">
            <img src={logo} alt="" />
            <button onClick={handleClick}> &#10006;</button>
          </div>
          <div className="burger_main">
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Преимущества</a>
            </li>
            <li>
              <a href="#">Наши контакты</a>
            </li>
          </div>
        </div>
        <div className="borger-bottom">
          <h3>Остались вопросы?</h3>
          <button>
            <a href="#">Связаться с нами</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBurger;
