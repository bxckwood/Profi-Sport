import React from "react";
import "./Footer.css";
import insta from "./img/insta.svg";
import facebook from "./img/facebook.svg";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-inner__top">
          <a className="footer-inner__top-title" href="">
            Profi<span>Sport</span>
          </a>
          <h1 className="footer-inner__top-copy">© 2008—2021 PROFI SPORT</h1>
          <div className="footer-inner__top-media">
            <a href="">
              <img src={vk} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-inner__middle">
          <div className="footer-inner__middle-column">
            <h1 href="" className="footer-inner__middle-column-title">
              О компании
            </h1>
            <a href="" className="footer-inner__middle-column-subtitle">
              Наши заводы
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Новости
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Медиа
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Контакты
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Сертификаты
            </a>
          </div>
          <div className="footer-inner__middle-column">
            <h1 href="" className="footer-inner__middle-column-title">
              Сервис
            </h1>
            <a href="" className="footer-inner__middle-column-subtitle">
              Гарантийные <br />
              обязательства
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Заявка на сервис
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Доставка тренажеров
            </a>
          </div>
          <div className="footer-inner__middle-column">
            <h1 href="" className="footer-inner__middle-column-title">
              Наша продукция
            </h1>
            <a href="" className="footer-inner__middle-column-subtitle">
              Для тренажерного зала
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Для кроссфита
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Для тяжелой атлетики
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Для фитнеса
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Для спортзала
            </a>
          </div>
          <div className="footer-inner__middle-column">
            <h1 href="" className="footer-inner__middle-column-title">
              Покупателю
            </h1>
            <a href="" className="footer-inner__middle-column-subtitle">
              Регистрация
            </a>
            <a href="" className="footer-inner__middle-column-subtitle">
              Сотрудничество
            </a>
          </div>
          <div className="footer-inner__middle-column">
            <h1 href="" className="footer-inner__middle-column-title">
              Адрес
            </h1>
            <p className="kek1">
              999999, г. Москва, Красная Площадь, 1/1, строение 10
            </p>
            <a className="tel" href="tel: +7 (999)-999-99-99">
              тел.: +7 (999)-999-99-99
            </a>
            <a className="tel" href="tel: +7 (999)-999-99-99">
              тел.: +7 (999)-999-99-99
            </a>
            <p className="kek2">пн-пт: с 06:00 до 19:00 (МСК)</p>
            <p className="kek3">сб-вс: выходной</p>
          </div>
        </div>
        <div className="footer-inner__bottom">
          Xарактеристики, комплект поставки и внешний вид товара могут
          отличаться от указанных или могут быть изменены производителем без
          отражения в каталоге.<br/><br/> Приведенные на нашем сайте цены, характеристики,
          количество товаров, а так же информация об их наличии на складе носят
          ознакомительный характер и не являются публичной офертой, определенной
          пунктом 2 статьи 437 ГК РФ. Для получения информации о характеристиках
          товаров, их наличии и стоимости необходимо связаться с менеджерами
          нашей компании. Оплата производится только после подтверждения
          резерва.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
