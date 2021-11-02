import './Map.css';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import point from "../../images/Point.png"

const MarkerComponent = ({  }) => (
<div className='map_marker' >
  <img src={point}/>
  </div>
  )

export default function Map() {
  const cords = {
    center: {
      lat: 55.75,
      lng: 37.62
    },
    zoom: 12
  };
  const mapOptions = {
    fullscreenControl: false,
    disableDefaultUI: true
  };
    return (
        <div className='map_container'>
        <div className='map_wrapper'>
            <div>
            <h2>Магазины мерча ведьмака</h2>
            </div>

      <div style={{ height: '100vh', width: '100%'}} className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBEZ9qt_0ETlsFSgED9v7oeBrO0OIzEgdI" }}
          defaultCenter={cords.center}
          defaultZoom={cords.zoom}
          options={mapOptions}>

              <MarkerComponent 
               lat={55.75022}
               lng={37.62566}
               style={{ filter: 'none'}}       
                />
                <MarkerComponent 
                 lat={55.78146}
                  lng={37.52152}
                />
                <MarkerComponent 
               lat={55.75275}
               lng={37.55019}
                  />

        </GoogleMapReact>
    </div>
            </div>
            </div>
    );
}