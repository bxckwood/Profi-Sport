import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Tel } from "./img/tel.svg";
import { ReactComponent as Key } from "./img/key.svg";
import { ReactComponent as Person } from "./img/person.svg";
import { ReactComponent as Search } from "./img/search.svg";
import BurgerMobile from "./mobileimg/burgermobile.svg";
import TelMobile from "./mobileimg/telmobile.svg";
import SearchMobile from "./mobileimg/searchmobile.svg";
import PersonMobile from "./mobileimg/personmobile.svg";

const Header = (props) => {
  const links = [
    { title: "О компании", address: "#company" },
    { title: "Каталог", address: "#catalog" },
    { title: "Проекты", address: "#projects" },
    { title: "Услуги", address: "#services" },
    { title: "Контакты", address: "#contact" },
  ];

  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-inner__name">
            <a href="" className="header-inner__name">
              Profi<span>Sport</span>
            </a>
          </div>
          <button className="header-inner__key">
            <Key className="header-inner__key-img" alt="" />
            <h1 className="header-inner__key-h1">Зал «под ключ» </h1>
          </button>
          <nav className="header-inner__links">
            {links.map((elem, index) => (
              <a key={index} className="header-inner__link" href={elem.address}>
                {elem.title}
              </a>
            ))}
          </nav>
          <div className="header-inner__call-all">
            <a className="header-inner__call" href="tel:+7 (999) 999-99-99">
              <div>
                <Tel className="header-inner__call-img" alt="" />
                <h1 className="header-inner__call-h1">+7 (999) 999-99-99</h1>
              </div>
            </a>
            <div className="header-inner__call-bot">
              Режим: с 9 до 22 ежедневно
            </div>
          </div>
          <div className="header-inner__search">
            <input
              className="header-inner__search-input"
              type="text"
              placeholder=""
            />
            <div className="header-inner__search-div-img">
              <Search className="header-inner__search-img" alt="" />
            </div>
          </div>
          <button className="header-inner_login">
            <Person className="header-inner__login-img" alt="" />
            <h1 className="header-inner__login-h1">Вход</h1>
          </button>
        </div>
      </header>
      <header
        className={burgerActive ? "headerMobile burgerMenu" : "headerMobile"}
      >
        <div className="headerMobile-inner">
          <div
            onClick={() => setBurgerActive(!burgerActive)}
            className="headerMobile-inner__burger"
          >
            <img src={BurgerMobile} alt="" />
          </div>
          <div className="header-inner__call-all">
            <div className="header-inner__call-top">Заказать звонок</div>
            <a className="header-inner__call" href="tel:+7 (999) 999-99-99">
              <div>
                <img
                  className="header-inner__call-img"
                  src={TelMobile}
                  alt=""
                />
                <h1 className="header-inner__call-h1">+7 (999) 999-99-99</h1>
              </div>
            </a>
            <div className="header-inner__call-bot">
              Режим: с 9 до 22 ежедневно
            </div>
          </div>
          <div className="headerMobile-inner__search-and-login">
            <img
              className="headerMobile-inner__search"
              alt=""
              src={SearchMobile}
            />
            <img
              className="headerMobile-inner__login"
              alt=""
              src={PersonMobile}
            />
          </div>
        </div>
        <div className={burgerActive ? "burgerMenuActive" : "burgerMenuActive"}>
          <h1 className="header-inner__name">
            Profi<span>Sport</span>
          </h1>
          <nav className="header-inner__links">
            {links.map((elem, index) => (
              <a key={index} className="header-inner__link" href={elem.address}>
                {elem.title}
              </a>
            ))}
          </nav>
          <button className="header-inner__key">
            <Key className="header-inner__key-img" alt="" />
            <h1 className="header-inner__key-h1">Зал «под ключ» </h1>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
