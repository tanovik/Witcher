import "./Footer.css";
import PolicyModal from "./PolicyModal/PolicyModal";
import witcherLogo from "../../assets/images/image24.png";
import logo1 from "../../assets/images/VKLogo.png";
import logo2 from "../../assets/images/FBLogo.png";
import logo3 from "../../assets/images/InstLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div>
          <a href="/">
            <img
              src={witcherLogo}
              alt="Сериал Ведьмак"
              className="footer_icon_pic"
            />
          </a>
        </div>
        <PolicyModal />
        <div className="footer_links_container">
          <a href="https://vk.com/" target="_blank" rel="noreferrer">
            <img src={logo1} className="footer_link" alt={"vkontakte link"} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={logo2} className="footer_link" alt={"facebook link"} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={logo3} className="footer_link" alt={"instagram link"} />
          </a>
        </div>
      </div>
    </footer>
  );
}
