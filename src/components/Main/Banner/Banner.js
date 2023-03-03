import "./Banner.css";
import "../../../App.css";
import witcherBanner from "../../../assets/images/Banner.png";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="banner">
        <img src={witcherBanner} alt="Сериал Ведьмак" />
      </div>
      <div className="banner_text_group_wrapper">
        <div className="banner_text_group">
          <h1>Сериал Ведьмак</h1>
          <p>
            Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
            идет навстречу своей судьбе в неспокойном мире, где люди часто
            оказываются куда коварнее чудовищ.
          </p>
          <div>
            <button className="button_default_red">Смотреть сериал</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
