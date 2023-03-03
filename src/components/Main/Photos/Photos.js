import "./Photos.css";
import React, { useState } from "react";
import photo1 from "../../../assets/images/Photos/Photo1.png";
import photo2 from "../../../assets/images/Photos/Photo2.png";
import photo3 from "../../../assets/images/Photos/Photo3.png";
import photo4 from "../../../assets/images/Photos/Photo4.png";
import photo5 from "../../../assets/images/Photos/Photo5.png";
import { LineWave } from "react-loader-spinner";


export default function Photos() {
  const [isLoading, setIsLoading] = useState(false);
  const photoList = [
    { id: 1, img: photo1 },
    { id: 2, img: photo2 },
    { id: 3, img: photo3 },
    { id: 4, img: photo4 },
    { id: 5, img: photo5 },
  ];
  const onButtonClick = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div className="photos_wrapper">
      <h2> Кадры со съемок</h2>
      <div className="photos_items">
        {photoList.map((elem) => {
          return (
            <div key={elem.id} className="photos_item">
              <img src={elem.img} alt={"witcher"} />
            </div>
          );
        })}
      </div>
      {isLoading && (
        <LineWave
          height="150"
          color="rgba(236, 63, 63, 1)"
          ariaLabel="line-wave"
          wrapperClass="loader"
          visible={true}
        />
      )}
      <div>
        <button className="button_default_black" onClick={onButtonClick}>
          Показать еще
        </button>
      </div>
    </div>
  );
}
