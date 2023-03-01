import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import "../../App.css";
import React from "react";
import witcherLogo from "../../assets/images/image24.png";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_icon">
          <Link to="/">
            <img
              src={witcherLogo}
              alt="Сериал Ведьмак"
              className="header_icon_pic"
            />
          </Link>
        </div>

        <div
          style={{
            visibility: location.pathname !== "/request" ? "visible" : "hidden",
          }}
        >
          <Link to="/request">
            <button className="button_default_black">
              Подключить подписку
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
