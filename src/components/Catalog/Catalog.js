import React, { useState } from "react";
import "./Catalog.css";
import simulators from "../simulator.json";
import simulatorphoto from "./img/simulatorphoto.png";
import arrow from "./img/arrow.svg";
import { Link } from "react-router-dom"

const Catalog = () => {
  const filters = [
    "Все",
    "DHZ EVOST-Series",
    "DHZ EVOST Light-Series",
    "DHZ 900-Series",
    "DHZ MINI APPLE-Series",
    "DHZ Y900-Series",
    "DHZ STYLE -Series",
    "DHZ STYLE PRO-Series",
    "DHZ FUSION PRO-Series",
    "DHZ FUSION-Series",
    "Силовые рамы",
    "DHZ PRESTIGE-Series",
    "DHZ EVOST Strong-Series",
    "DHZ HAMMER-Series",
  ];

  const sort = ["По цене"];

  const [activeFilter, setActiveFilter] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [activeModalFilter, setActiveModalFilter] = useState(false);

  const filter1 = (items) =>
    items.filter((elem) => elem.filters.includes(activeFilter));

  return (
    <div className="catalog">
      <div className="catalog-inner">
        <h1 className="catalog-inner__title">Каталог</h1>
        <div className="block">
          <div className="catalog-inner__filters">
            <h1 className="catalog-inner__filters-title">Фильтры</h1>
            {filters.map((elem, index) => (
              <p
                onClick={() => setActiveFilter(index)}
                className={
                  index === activeFilter
                    ? "catalog-inner__filter active"
                    : "catalog-inner__filter"
                }
                key={index}
              >
                {elem}
              </p>
            ))}
          </div>
          <div
            className={
              activeModalFilter
                ? "catalog-inner__filters__Mobile true"
                : "catalog-inner__filters__Mobile"
            }
          >
            <h1
              onClick={() => setActiveModalFilter(!activeModalFilter)}
              className="catalog-inner__filters-title"
            >
              <h1>Фильтры</h1>
              <img src={arrow} alt="" />
            </h1>
            {filters.map((elem, index) => (
              <p
                onClick={() => setActiveFilter(index)}
                className={
                  index === activeFilter
                    ? "catalog-inner__filter active"
                    : "catalog-inner__filter"
                }
                key={index}
              >
                {elem}
              </p>
            ))}
          </div>
          <div className="catalog-inner__sort-and-elements">
            <div onClick={() => {}} className="catalog-inner__sort">
              <h1>Сортировка</h1>
              <button>
                {sort.map((elem, index) => (
                  <h2 onClick={() => setActiveSort(index)} key={index}>
                    {elem}
                    <img src={arrow} alt="" />
                  </h2>
                ))}
              </button>
            </div>
            <div className="catalog-inner__elements">
              <div className="catalog-inner__items">
                {filter1(simulators).map((elem, index) => (
                  <Link to={`${elem.id}`} key={index} className="catalog-inner__item">
                    
                    <img src={simulatorphoto} alt="" />
                    <div className="catalog-inner__item-name">
                      <h1 className="catalog-inner__item-name-text">
                        {elem.name}
                      </h1>
                    </div>
                    <p>Цена: {elem.price} руб.</p>
                    <div className="catalog-inner__item-available-and-but">
                      <h1 className="catalog-inner__item-available">
                        В наличии:
                        <span
                          className={
                            elem.available
                              ? "catalog-inner__item-available-color orange"
                              : "catalog-inner__item-available-color gray"
                          }
                        >
                          {elem.available ? "ЕСТЬ" : "НЕТ"}
                        </span>
                      </h1>
                      {elem.available ? (
                        <button>КУПИТЬ</button>
                      ) : (
                        <button disabled>КУПИТЬ</button>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
