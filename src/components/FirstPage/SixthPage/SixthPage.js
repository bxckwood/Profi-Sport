import React from "react";
import "./SixthPage.css";
import hover from "./img/hover.png";
import photo from "./img/photo.png";
import triangle from "./img/triangle.svg";
import arrow from "./img/arrow.svg";

const SixPage = (props) => {
  const catalogy = [
    { name: "УЛИЧНОЕ ОБОРУДОВАНИЕ", href: "" },
    { name: "Оборудование для залов", href: "" },
    { name: "Спортивное оборудование", href: "" },
  ];

  return (
    <div className="sixth-page">
      <div className="sixth-page__inner">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <h1 className="sixth-page__inner-title">Каталоги</h1>
        <div className="sixth-page__inner-cards">
          <div className="sixth-page__inner-text-card">
            <h1>
              Предлагаем вам прямо <br />
              сейчас ознакомиться
              <br /> с нашими каталогами:
            </h1>
          </div>
          {catalogy.map((elem, index) => (
            <div key={index} className="sixth-page__inner-card">
              <div className="sixth-page__inner-card-HOVER">
                <img
                  className="sixth-page__inner-card-HOVER-img"
                  src={hover}
                  alt=""
                />
                <a href={elem.href}>
                  <h1>{elem.name}</h1>
                  <img className="arrow" src={arrow} alt="" />
                </a>
              </div>
              <div className="sixth-page__inner-card-inner">
              <h1>{elem.name}</h1>
              <img
                className="sixth-page__inner-card-photo"
                src={photo}
                alt=""
              />
              <img
                className="sixth-page__inner-card-triangle"
                src={triangle}
                alt=""
              />
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixPage;
