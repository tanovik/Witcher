import "./Request.css";
import { Link } from "react-router-dom";

export default function SentRequest() {
  return (
    <div className="sent_request_wrapper">
      <h1>Заявка отправлена!</h1>
      <h4>
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </h4>
      <div>
        <Link to={"/"}>
          <button className="button_default_red"> Вернуться на главную </button>
        </Link>
      </div>
    </div>
  );
}
