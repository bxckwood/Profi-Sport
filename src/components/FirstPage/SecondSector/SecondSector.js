import React from "react";
import "./SecondSector.css";
import Triangle from "./img/triangle.svg";
import Trainer from "./img/training.png";
import BigTraining from "./img/BIGTRAINING.png";
import Arrow from "./img/arrow.svg";

const SecondSector = (props) => {
  const allItems = [
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
    { categoryName: "Кардиотренажеры для зала", img: Trainer, href: "" },
  ];

  return (
    <div className="second-sector">
      <div className="second-sector__inner">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <h1 className="second-sector__inner-title">
          Оборудование
          <br />
          для тренажерного зала
        </h1>
        <div className="second-sector__inner-items">
          {allItems.map((elem, index) => (
            <div key={index} className="second-sector__inner-item">
              <div className="second-sector__inner-hover">
                <h1>{elem.categoryName}</h1>
                <a href={elem.href}>
                  Подробнее
                  <img src={Arrow} alt="" />
                </a>
                <img src={BigTraining} alt="" />
              </div>
              <div className="second-sector__nothover-inner-item__title">
                <h1 className="second-sector__inner-item__title">
                  {elem.categoryName}
                </h1>
                <div className="second-sector__inner-item__LinkAndTrainer">
                  <a
                    className="second-sector__inner-item__Link"
                    href={elem.href}
                  >
                    Подробнее
                  </a>
                  <img
                    className="second-sector__inner-item__Trainer"
                    src={elem.img}
                    alt=""
                  />
                </div>
                <div className="second-sector__inner-item-orange">
                  <img src={Triangle} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSector;
