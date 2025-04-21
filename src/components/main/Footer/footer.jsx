import React from "react";
import "./footer.scss";
import logo from "../../../assets/images/logo-footer.png";
import img_footer from "../../../assets/images/img-footer.png";
import { Link, useNavigate } from "react-router-dom";
function Footer() {
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

  return (
    <div className="footer_block">
      <img src={img_footer} alt="" />
      <div className="footer_item">
        <img src={logo} alt="" />

        <div className="main_footer">
          <Link to={"/catalog"}>Каталог</Link>

          <Link onClick={() => handleButtonClick("/", "section1")} to={"/"}>
            Преимущества
          </Link>
          <Link onClick={() => handleButtonClick("/", "section2")} to={"/"}>
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
