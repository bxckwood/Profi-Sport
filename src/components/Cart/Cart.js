import React from "react";
import "./Cart.css";
import biceps from "./img/biceps.png";
import cross from "./img/cross.svg";
import { useDispatch, useSelector} from "react-redux"

const Cart = () => {
  const cartElems = useSelector((state) => state.cart.cartElems);

  const dispatch = useDispatch()

  const addItemToCartInCart = (elem) => {
    dispatch({type: "ADD_ITEM", payload: elem})
  }

  const removeItemFromCart = (elem) => {
      dispatch({type: "REMOVE_ITEM", payload: elem.id})
  }

  return (
    <div className="cart">
      <div className="cart-inner">
        { cartElems.length > 0 ? 
        <>
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
                    <div>{elem.name}</div>
                  </th>
                  <th className="third-column">{elem.price / 1000}К РУБ.</th>
                  <th className="fourth-column">
                    <div>
                      <button onClick={() => removeItemFromCart(elem)}>-</button>
                      <h1>1</h1>
                      <button onClick={() => addItemToCartInCart(elem)}>+</button>
                    </div>
                  </th>
                  <th className="fifth-column">
                    <div>{elem.price / 1000}К РУБ.</div>
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
              <div className="quantity-column">{cartElems.length}</div>
              <div className="cost-column">
                {cartElems.reduce(
                  (acc, currentValue) => acc + currentValue.price,
                  0
                ) / 1000}
                К РУБ.
              </div>
            </div>
          </div>
          <div className="mobile-items">
            {cartElems.map((elem, index) => (
              <div key={index} className="item">
                <div className="item__photo">
                  <img src={biceps} alt="" />
                </div>
                <div className="item__right-group">
                  <div className="item__right-group-top">
                    <h1>{elem.name}</h1>
                    <img src={cross} alt="" />
                  </div>
                  <div className="item__right-group-bottom">
                    <div>
                      <button>-</button>
                      <h1>1</h1>
                      <button>+</button>
                    </div>
                    <h1 className="price"> {elem.price / 1000} К РУБ.</h1>
                  </div>
                </div>
              </div>
            ))}
            <div className="mobile-columns">
              <div className="result-column">ИТОГО:</div>
              <div className="quantity-column">{cartElems.length}</div>
              <div className="cost-column">
                {cartElems.reduce(
                  (acc, currentValue) => acc + currentValue.price,
                  0
                ) / 1000}
                К РУБ.
              </div>
            </div>
            <div className="clear-column2">
              <button className="clear-column-button">Очистить</button>
            </div>
          </div>
        </div></>
      : <h1 className="empty-cart">Корзина пуста !</h1> }
      </div>
    </div>
  );
};

export default Cart;
