import {Outlet} from "react-router-dom";
import Banner from "./Banner/Banner";
import CastCarousel from "./CastCarousel/CastCarousel";
import Photos from "./Photos/Photos";
import Map from "./Map/Map";


const Main = () => {
    return (
      <main >
      <Banner />
      <CastCarousel/>
      <Photos />
      <Map/>
      <Outlet />
  </main>
      
    );
  }

export default Main;