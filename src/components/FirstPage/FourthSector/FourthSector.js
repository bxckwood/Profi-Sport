import React from "react";
import "./FourthSector.css";
import photo from "./img/photo.png";
import hover from "./img/hover.png";
import arrow from "./img/arrow.svg";

const FourthSector = (props) => {
  const cards = [
    {
      img: photo,
      imghover: hover,
      href: "",
      text: "E-7035 ТЯГА СВЕРХУ. ВЕРТИКАЛЬНЫЙ БЛОК (PULLDOWN). СТЕК 110 КГ.",
    },
    {
      img: photo,
      imghover: hover,
      href: "",
      text: "E-7035 ТЯГА СВЕРХУ. ВЕРТИКАЛЬНЫЙ БЛОК (PULLDOWN). СТЕК 110 КГ.",
    },
    {
      img: photo,
      imghover: hover,
      href: "",
      text: "E-7035 ТЯГА СВЕРХУ. ВЕРТИКАЛЬНЫЙ БЛОК (PULLDOWN). СТЕК 110 КГ.",
    },
    {
      img: photo,
      imghover: hover,
      href: "",
      text: "905 Жим от груди (Chest Press)",
    },
  ];

  return (
    <div className="fourth-sector">
      <div className="fourth-sector__inner">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <h1 className="fourth-sector__inner-title">Новинки</h1>
        <div className="fourth-sector__inner-cards">
          {cards.map((elem, index) => (
            <div key={index} className="fourth-sector__inner-card">
              <div className="fourth-sector__inner-card-HOVER">
                <img src={elem.imghover} alt="" />
                <a href="">
                  {elem.text}
                  <img src={arrow} alt="" />
                </a>
              </div>
              <div className="padding">
                <div className="fourth-sector__inner-card-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="fourth-sector__inner-card-div-text">
                  <h1 className="fourth-sector__inner-card-text">
                    {elem.text}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthSector;
