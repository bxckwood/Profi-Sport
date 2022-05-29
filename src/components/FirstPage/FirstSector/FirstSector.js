import React from "react";
import "./FirstSector.css";
import square from "./img/square.png";
import reasons from "./img/reasons.svg"
import Header from "../../Header/Header";

const FirstSector = (props) => {
  return (
    <div className="first-sector">
      <div className="first-sector__inner">
        <div className="first-sector__inner-top">
          <div className="square">
            <div className="square-line1"></div>
            <div className="square-line2"></div>
            <div className="square-line3"></div>
            <div className="square-line4"></div>
            <div className="square-line5"></div>
          </div>
          <div className="first-sector__inner-top__text">
            <h1 className="first-sector__inner-top__text-h1">
              Заголовок слайдера
              Заголовок слайдераЗаголовок слайдера
            </h1>
            <p className="first-sector__inner-top__text-p">
              Подзаголовок слайдера Подзаголовок слайдера Подзаголовок
              <br />
              слайдераПодзаголовок слайдера Подзаголовок слайдера Подзаголовок
              слайдераПодзаголовок слайдера Подзаголовок слайдера{" "}
            </p>
            <button className="first-sector__inner-top__text-button">
              Подробнее
            </button>
          </div>
        </div>
        <div className="first-sector__inner-bottom">
          <h1 className="first-sector__inner-bottom__text">Почему мы</h1>
          <div className="first-sector__inner-bottom__reasons">
              <div className="first-sector__inner-bottom__reason">
                  <img src={reasons} alt=""/>
                  <h1>Причина 1</h1>
              </div>
              <div className="first-sector__inner-bottom__reason">
                  <img src={reasons} alt=""/>
                  <h1>Причина 2</h1>
              </div>
              <div className="first-sector__inner-bottom__reason">
                  <img src={reasons} alt=""/>
                  <h1>Причина 3</h1>
              </div>
              <div className="first-sector__inner-bottom__reason">
                  <img src={reasons} alt=""/>
                  <h1>Причина 4</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSector;
