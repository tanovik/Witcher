import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./Map.css";
import point from "../../../assets/images/Point.png";
const placemarkImage = {
  iconLayout: "default#image",
  iconImageHref: point,
  iconImageSize: [50, 50],
};

export default function App() {
  const defaultState = {
    center: [55.751574, 37.62566],
    zoom: 12,
    controls: [],
  };
  return (
    <div className="map_wrapper">
      <h2>Магазины мерча ведьмака</h2>
      <div>
        <YMaps>
          <Map
            defaultState={defaultState}
            style={{ height: "540px", width: "100%" }}
          >
            <Placemark
              style={{ filter: "none" }}
              geometry={[55.75022, 37.62566]}
              options={placemarkImage}
            />
            <Placemark
              style={{ filter: "none" }}
              geometry={[55.75275, 37.55019]}
              options={placemarkImage}
            />
            <Placemark
              style={{ filter: "none" }}
              geometry={[55.78146, 37.52152]}
              options={placemarkImage}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
