import './Photos.css';
import React from "react";
import photo1 from "../../images/Photos/Photo1.png"
import photo2 from "../../images/Photos/Photo2.png"
import photo3 from "../../images/Photos/Photo3.png"
import photo4 from "../../images/Photos/Photo4.png"
import photo5 from "../../images/Photos/Photo5.png"


export default function Photos() {
    const photoList= [
        { id: 1, img: photo1},
        { id: 2, img: photo2},
        { id: 3, img: photo3},
        { id: 4, img: photo4},
        { id: 5, img: photo5},
      ];

    return (
        <div className='photos'>
        <div className='photos_wrapper'>
            <div className='photos_title'>
            <h2>Кадры со съемок</h2>
            </div>
  
      <div  className='photos_items'>
      
        {photoList.map((elem, i) => {

      return (

        <div key={elem.id} className='photos_item'>
      <img src={elem.img}   />
        </div>
       
        ) })}
      
    </div>
    <div >
    <button >
         
         Показать еще
        </button>
    </div>

            </div>
            </div>
    );
}