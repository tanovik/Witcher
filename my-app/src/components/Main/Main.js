import "./Main.css";
import React from "react";
import Banner from "./../Banner/Banner";
import Cast from "./../Cast/Cast";
import Photos from "../Photos/Photos";
import Map from "../Map/Map";

export default function Main() {
  return (
    <React.Fragment className="main_wrapper">
      <main>
        <Banner />
        <Cast
          amountPerWindow={4}
          itemWidth={282}
          gapWidth={24}
          shiftSize={150}
        />
        <Photos />
        <Map />
      </main>
    </React.Fragment>
  );
}
