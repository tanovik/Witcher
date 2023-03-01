import React from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./CastCarousel.css";
import image1 from "../../../assets/images/Slider/Rectangle54.png";
import image2 from "../../../assets/images/Slider/Rectangle55.png";
import image3 from "../../../assets/images/Slider/Rectangle56.png";
import image4 from "../../../assets/images/Slider/Rectangle57.png";
import image5 from "../../../assets/images/Slider/Rectangle58.png";


SwiperCore.use([EffectCoverflow, Pagination, Navigation, Mousewheel, Autoplay]);
const photoList = [
  {
    id: 1,
    source: image1,
    character: "Геральт",
    actor: "Генри Кавилл",
    description:
      "Характер у Геральта крайне тяжелый. Он очень дерзко и остр на слово, грубоват, через меру прямолинеен. Но вместе с этим Геральт отличается крайней сдержанностью, его предложения коротки.",
  },
  {
    id: 2,
    source: image2,
    character: "Лютик",
    actor: "Джои Бэти",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    id: 3,
    source: image3,
    character: "Йеннифэр",
    actor: "Аня Чалотра",
    description:
      "Йеннифер, Йенна или просто Йен (как ее называет Геральт) – маг высшего уровня, член Совета и роскошная женщина, которая сумела покорить сердце ведьмака.",
  },
  {
    id: 4,
    source: image4,
    character: "Цири",
    actor: "Фрейя Аллан",
    description:
      "Цирилла Фиона Элен Рианнон, более известная как Цири — один из центральных персонажей литературной саги и второй протагонист игры Ведьмак 3: Дикая Охота.",
  },
  {
    id: 5,
    source: image5,
    character: "Эмгыр вар Эмрейс",
    actor: "Барт Эдвардс",
    description:
      "Эмгыр вар Эмрейс-  самый большой сюжетный спойлер всей саги, поскольку он же является лордом Йожем из Эрленвальда - мужем принцессы Паветты и родным отцом Цири.",
  },
];
const CastCarousel = () => {
  return (
    <div className="swiper_wrapper">
      <h2 className="swiper_title">Актерский состав</h2>
      <Swiper
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        loop
        mousewheel
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel, Autoplay]}
      >
        {photoList.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={"slide_item"}>
                <img src={img.source} alt="" />
                <div className={"slide_text_wrapper"}>
                  <div className={"slide_title"}>
                    <h4>{img.character}</h4>
                    <h4>{img.actor}</h4>
                  </div>
                  <div className={"slide_description"}>
                    <p>{img.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default CastCarousel;
