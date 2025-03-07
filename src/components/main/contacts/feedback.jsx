import React from "react";
import { Link } from "react-router-dom";
function Feedback() {
  return (
    <div>
      <div className="container">
        <div className="Feedback">
          <p>
            Остались <br /> вопросы?
          </p>
          <div className="Feedback_text">
            <span>
              Свяжитесь с нами, ответим на вопросы <br /> и бесплатно
              проконсультируем
            </span>

            <Link to={"https://wa.me/9284444949"}>
              <button className="Feedback_btn">Связаться с нами</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
