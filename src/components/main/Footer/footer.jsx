import React from "react";
import "./footer.scss";
import logo from "../../../assets/images/logo-footer.png";
import img_footer from "../../../assets/images/img-footer.png";
import { Link } from "react-router-dom";
function Footer() {
  // Общая функция для перехода и прокрутки

  const handleButtonClick = (__, sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Небольшая задержка для гарантии загрузки страницы
  };

  return (
    <div className="footer_block">
      <img src={img_footer} alt="" />
      <div className="footer_item">
        <img src={logo} alt="" />

        <div className="main_footer">
          <Link
            onClick={() => handleButtonClick("__", "catalog")}
            to={"/catalog"}
          >
            Каталог
          </Link>

          <Link onClick={() => handleButtonClick("__", "section1")} to={"/"}>
            Преимущества
          </Link>
          <Link onClick={() => handleButtonClick("__", "section2")} to={"/"}>
            Наши контакты
          </Link>
        </div>
      </div>
      <div className="footer_text">
        <span>
          2024 ВайЭлектро Все <br /> права защищены
        </span>
        <span>ООО “ВАЙЭЛЕКТРО”</span>
      </div>
    </div>
  );
}

export default Footer;
