import "./Footer.css";
import React from "react";
import Modal from "../Modal/Modal";
import witcherLogo from "../../images/image24.png";
import logo1 from "../../images/VKLogo.png";
import logo2 from "../../images/FBLogo.png";
import logo3 from "../../images/InstLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div>
          <a href="/">
            <img src={witcherLogo} alt="Ведьмак" />
          </a>
        </div>
        <Modal />
        <div className="footer_links_container">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
        </div>
      </div>
    </footer>
  );
}
