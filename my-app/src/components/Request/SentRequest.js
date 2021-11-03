import "./Request.css";
import React from "react";

export default function SentRequest() {
  return (
    <div className="sent_request_wrapper">
      <h1>Заявка отправлена!</h1>
      <h4>
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </h4>
      <div>
        <a href={"/home"}>
          <button className="button"> Вернуться на главную </button>
        </a>
      </div>
    </div>
  );
}
