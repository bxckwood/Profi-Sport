import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemPage.css";
import biceps from "./img/biceps.png";
import simulators from "../simulator.json";
import { useDispatch, useSelector} from "react-redux"


const ItemPage = () => {
  const simulator = simulators[useParams().id];

  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch({type: "ADD_ITEM", payload: simulator})
  }

  return (
    <div className="item-page">
      <div className="item-page__inner">
        <h1 className="inner__title">{simulator.name}</h1>
        <div className="inner__card">
          <div className="inner__card__left-group">
            <img src={biceps} alt="" />
          </div>
          <div className="inner__card__right-groupALL">
            <div className="inner__card__right-group">
              <h1 className="inner__card__right-group__title">
                Характеристики
              </h1>
              <table className="inner__card__right-group__table">
                <tr>
                  <td className="inner__card__right-group__table__left-column">
                    Цвет рамы
                  </td>
                  <td className="inner__card__right-group__table__right-column">
                    Черно-желтый (другие цвета-опционально)
                  </td>
                </tr>
                <tr>
                  <td className="inner__card__right-group__table__left-column">
                    Цвет обивки
                  </td>
                  <td className="inner__card__right-group__table__right-column">
                    Черный
                  </td>
                </tr>
                <tr>
                  <td className="inner__card__right-group__table__left-column">
                    Габариты
                  </td>
                  <td className="inner__card__right-group__table__right-column">
                    1500*1200*1715
                  </td>
                </tr>
                <tr>
                  <td className="inner__card__right-group__table__left-column">
                    Профиль
                  </td>
                  <td className="inner__card__right-group__table__right-column">
                    остальной профиль, толщина стенки 3 мм
                  </td>
                </tr>
                <tr>
                  <td className="inner__card__right-group__table__left-column">
                    Вес
                  </td>
                  <td className="inner__card__right-group__table__right-column">
                    164 кг
                  </td>
                </tr>
              </table>
            </div>
            <div className="inner__card__right-group__bottom">
              <p>{simulator.price} руб.</p>
              <h1>
                Наличие:{" "}
                {simulator.available ? (
                  <span className="available">на складе</span>
                ) : (
                  <span className="notavailable">отсуствует</span>
                )}
              </h1>
              {simulator.available ? (
                <Link to="/cart" onClick={addItemToCart}>ДОБАВИТЬ В КОРЗИНУ</Link>
              ) : (
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
