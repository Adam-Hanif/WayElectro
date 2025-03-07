import "./contacts.scss";
import React from "react";
import iconContact from "../../../assets/images/icon-contact.png";
import { Link } from "react-router-dom";
import Feedback from "./feedback";
function Contact({ Advantages }) {
  return (
    <div ref={Advantages} className="block_contact">
      <img src={iconContact} alt="" />
      <h3>
        Связаться <br /> с нами
      </h3>
      <div className="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.060836424612!2d45.682535461758576!3d43.315789351030865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d3e9af96115b%3A0x5f51a51c51fd6b17!2z0JLQsNC5INCt0LvQtdC60YLRgNC-!5e0!3m2!1sru!2sru!4v1713691057067!5m2!1sru!2sru"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact_info">
          <span>Склад</span>
          <p>г. Грозный, ул. Айбики, 45</p>
          <span>Телефон</span>
          <p>8 (928) 444-49-49</p>
          <span>Расписание</span>
          <p>Пн - Вс 09:00-18:00</p>
          <div className="icon_Info">
            <a href="#">
              <img src="src\assets\images\instagram-icon.svg" alt="" />
            </a>
            <Link to={"https://vk.com/club227060370"}>
              <img src="src\assets\images\VK-icon.svg" alt="" />
            </Link>

            <Link to={"https://wa.me/9284444949"}>
              <img src="src\assets\images\WhatsApp-icon.svg" alt="" />
            </Link>
            <Link to={"https://t.me/wayelectro"}>
              <img src="src\assets\images\telegram-icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Feedback />
    </div>
  );
}

export default Contact;
