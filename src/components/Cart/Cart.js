import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import biceps from "./img/biceps.png";
import cross from "./img/cross.svg";

const Cart = () => {
  const cartElems = useSelector((state) => state.cartElems);

  return (
    <div className="cart">
      <div className="cart-inner">
        <h1 className="cart-inner__title">Корзина</h1>
        <div className="cart-inner__items">
          <div>
            <table className="cart-table">
              <tr className="cart-rows">
                <th className="cart-inner__items__heading">
                  <div className="cart-inner__items__heading-div">ФОТО</div>
                </th>
                <th className="cart-inner__items__heading">
                  <div className="cart-inner__items__heading-div">
                    НАИМЕНОВАНИЕ
                  </div>
                </th>
                <th className="cart-inner__items__heading">ЦЕНА</th>
                <th className="cart-inner__items__heading">КОЛ-ВО</th>

                <th className="cart-inner__items__heading">
                  <div className="cart-inner__items__heading-div">СУММА</div>
                </th>
              </tr>
              {cartElems.map((elem, index) => (
                <tr className="cart-rows">
                  <th className="first-column">
                    <div className="first-column__div">
                      <img
                        className="first-column__div__photo"
                        src={biceps}
                        alt=""
                      />
                    </div>
                  </th>
                  <th className="second-column">
                    <div>
                      {elem.name}
                    </div>
                  </th>
                  <th className="third-column">{elem.price / 1000 }К РУБ.</th>
                  <th className="fourth-column">
                    <div>
                      <button>-</button>
                      <h1>1</h1>
                      <button>+</button>
                    </div>
                  </th>
                  <th className="fifth-column">
                    <div>{elem.price / 1000 }К РУБ.</div>
                  </th>
                  <th className="sixth-column">
                    <img src={cross} alt="" />
                  </th>
                </tr>
              ))}
            </table>
            <div className="columns">
              <div className="clear-column">
                <button className="clear-column-button">Очистить</button>
              </div>
              <div className="result-column">ИТОГО:</div>
              <div className="quantity-column">1</div>
              <div className="cost-column">{cartElems.reduce((acc, currentValue) => acc + currentValue.price, 0) / 1000}К РУБ.</div>
            </div>
          </div>
          <div className="mobile-items">
            <div className="item">
              <div className="item__photo">
                <img src={biceps} alt="" />
              </div>
              <div className="item__right-group">
                <div className="item__right-group-top">
                  <h1>
                    Гантель в виниловой оболочке PROFI-FIT 3 кг, форма
                    шестигранник, серый
                  </h1>
                  <img src={cross} alt="" />
                </div>
                <div className="item__right-group-bottom">
                  <div>
                    <button>-</button>
                    <h1>2</h1>
                    <button>+</button>
                  </div>
                  <h1 className="price"> 1580 РУБ.</h1>
                </div>
              </div>
            </div>
            <div className="mobile-columns">
              <div className="result-column">ИТОГО:</div>
              <div className="quantity-column">4</div>
              <div className="cost-column">4740К РУБ.</div>
            </div>
            <div className="clear-column2">
              <button className="clear-column-button">Очистить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
