import './Cast.css';
import React, { useRef,useState } from "react";
import nextButton from "../../images/next1.png"
import prevButton from "../../images/next2.png"
import castImg1 from "../../images/Slider/Rectangle54.png"
import castImg2 from "../../images/Slider/Rectangle55.png"
import castImg3 from "../../images/Slider/Rectangle56.png"
import castImg4 from "../../images/Slider/Rectangle57.png"
import castImg5 from "../../images/Slider/Rectangle58.png"
import castImg6 from "../../images/Slider/Rectangle75.png"
import ProgressBar from "@ramonak/react-progress-bar";

const list= [
    { id: 1, img: castImg1, character:'Геральт', actor: 'Генри Кавилл', description: '' },
    { id: 2, img: castImg2 , character:'Лютик', actor: 'Джои Бэти', description: 'Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник' },
    { id: 3, img: castImg3 , character:'Йеннифэр', actor: 'Аня Чалотра', description: '' },
    { id: 4, img: castImg4 , character:'Цири', actor: 'Фрейя Аллан', description: '' },
    { id: 5, img: castImg5 , character:'Эмгыр вар Эмрейс', actor: 'Барт Эдвардс', description: '' },
    { id: 6, img: castImg6 , character:'Цири', actor: 'Фрейя Аллан', description: '' },
  ];

export default function Cast(props) {

    const {  amountPerWindow, itemWidth, gapWidth, shiftSize} = props;
  const slider = useRef(null);
  const [prev, setDisabledPrev] = useState(false)
  const [next, setDisabledNext] = useState(false)
  const [completed, setСompleted] = useState(80)
 
  let position = 0
  let newPosition = (list.length - amountPerWindow)*itemWidth+(list.length - amountPerWindow)*gapWidth

  const prevHandler = () => {

    const items = Array.from(slider.current?.childNodes)
    if (position === 0){
      setDisabledPrev(true)
     
    } else{
      
      position += shiftSize
      items.slice(0,items.length).forEach((el) => {
        el.style = `transform: translateX(${position}px)`;
       
      });
      }
  };
  
  
  const nextHandler = () => {
    const items = Array.from(slider.current?.childNodes)

    
    if (position ===-300){
      void(0)
   
    }else{
      
     setDisabledPrev(false)
      
      position -= shiftSize
      items.slice(0,items.length).forEach((el) => {
        el.style = `transform: translateX(${position}px)`;
       
      }
      );
    }}

   
    return (
        <div className='cast_wrapper'>
            <div className='cast_title_and_button_wrapper'>
            <h2>Актерский состав</h2>
            <div >

<button className='slider_button'
disabled={prev}
 onClick={prevHandler}
   >
    
    <img src={prevButton}  />
   </button>
   
   <button className='slider_button'
   disabled={next}
     onClick={nextHandler}>
    <img src={nextButton}/>

   </button>
  
</div>
</div>
<div className='progress_bar'>
<ProgressBar completed={80} maxCompleted={100} bgColor={'#EC3F3F'} isLabelVisible={false}  height={'2px'} width={'1200px'}/>
</div>

            <div >

      <div  ref={slider} className="slider">
        {list.map((elem, i) => {
      return (

        <div key={elem.id}>
<div className='slider_item'>
      <img src={elem.img}   />
    </div>
        </div>
       
        ) })}
       

    </div>
    </div>

            </div>
    );
}

