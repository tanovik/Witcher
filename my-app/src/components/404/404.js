import "./404.css";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="notFound">
      <h1 className="notFound_title">404</h1>
      <p className="notFound_text">Страница не найдена</p>
      <button
        aria-label="Назад"
        className="notFound_goBack"
        onClick={handleGoBack}
      >
        Назад
      </button>
    </div>
  );
}
