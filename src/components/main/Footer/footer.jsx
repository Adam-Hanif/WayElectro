import React from "react";
import "./footer.scss";
import logo from "../../../assets/images/logo-footer.png";
import img_footer from "../../../assets/images/img-footer.png";
import { Link } from "react-router-dom";
function Footer({ scrollToTarget, scrollToContact }) {
  const ScrolClick = () => {
    scrollToTarget();
  };
  const ScrollContact = () => {
    scrollToContact();
  };
  return (
    <div className="footer_block">
      <img src={img_footer} alt="" />
      <div className="footer_item">
        <img src={logo} alt="" />

        <div className="main_footer">
          <Link to={"/catalog"}>Каталог</Link>

          <Link onClick={ScrolClick} to={"/"}>
            Преимущества
          </Link>
          <Link onClick={ScrollContact} to={"/"}>
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
