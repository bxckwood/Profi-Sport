import React, { useState } from "react";
import "./ThirdSector.css";
import photo from "./img/photo.png";
import arrownext from "./img/arrownext.svg";
import arrowprev from "./img/arrowprev.svg";
import circleactive from "./img/circleactive.svg";
import circle from "./img/circle.svg";

const ThirdSector = (props) => {
  const [filterActive, setFilterActive] = useState(0);

  const filter = [
    { type: "фитнес-клубы" },
    { type: "тренажерные залы" },
    { type: "спортивные центры" },
  ];

  const slides = [
    {
      img: photo,
      text: "«X-FIT» — НОВЫЙ ФИТНЕС-КЛУБ, ОТКРЫВШИЙСЯ В ПУШКИНО",
      href: "",
    },
    {
      img: photo,
      text: "«X-FIT» — НОВЫЙ ФИТНЕС-КЛУБ, ОТКРЫВШИЙСЯ В ПУШКИНО",
      href: "",
    },
    {
      img: photo,
      text: "«X-FIT» — НОВЫЙ ФИТНЕС-КЛУБ, ОТКРЫВШИЙСЯ В ПУШКИНО",
      href: "",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
      activeSlide === 3 ? setActiveSlide(0) : setActiveSlide(activeSlide +1)
  }

  const prevSlide = () => {
    activeSlide === 0 ? setActiveSlide(3) : setActiveSlide(activeSlide - 1)
}

  return (
    <div className="third-sector">
      <div className="third-sector__inner">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <h1 className="third-sector__inner-title">
          Реализованные
          <br />
          проекты
        </h1>
        <div className="third-sector__inner-buttons">
          {filter.map((elem, index) => (
            <button
              key={index}
              onClick={() => setFilterActive(index)}
              className={
                filterActive === index
                  ? "third-sector__inner-button active"
                  : "third-sector__inner-button"
              }
            >
              {elem.type}
            </button>
          ))}
        </div>
        <div className="third-sector__inner__slider">
          <div className="third-sector__inner__slides">
            {slides.map((elem, index) => (
              <div key={index} className="third-sector__inner__slide">
                <img
                  className="third-sector__inner__slide-img"
                  src={elem.img}
                  alt=""
                />
                <div className="third-sector__inner__slide-img-HOVER"></div>
                <h1 className="third-sector__inner__slide-text">{elem.text}</h1>
                <a
                  href={elem.href}
                  className="third-sector__inner__slide-button-HOVER"
                >
                  Смотреть фото
                </a>
              </div>
            ))}
          </div>
          <div className="third-sector__inner__slider-buttons">
            <div className="third-sector__inner__slider-arrows">
              <img
                className="third-sector__inner__slider-arrow1"
                onClick={prevSlide}
                src={arrowprev}
                alt=""
              />
              <img
                className="third-sector__inner__slider-arrow2"
                onClick={nextSlide}
                src={arrownext}
                alt=""
              />
            </div>
            <div className="third-sector__inner__slider-circles">
              <img
                onClick={() => setActiveSlide(0)}
                className="third-sector__inner__slider-circle"
                src={activeSlide === 0 ? circleactive : circle}
                alt=""
              />
              <img
                onClick={() => setActiveSlide(1)}
                className="third-sector__inner__slider-circle"
                src={activeSlide === 1 ? circleactive : circle}
                alt=""
              />
              <img
                onClick={() => setActiveSlide(2)}
                className="third-sector__inner__slider-circle"
                src={activeSlide === 2 ? circleactive : circle}
                alt=""
              />
              <img
                onClick={() => setActiveSlide(3)}
                className="third-sector__inner__slider-circle"
                src={activeSlide === 3 ? circleactive : circle}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSector;
