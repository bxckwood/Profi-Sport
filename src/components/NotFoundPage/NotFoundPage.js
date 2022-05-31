import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom"

const NotFoundPage = (props) => {
  return (
    <>
      <div className="NotFoundPage">
        <div className="NotFoundPage-inner">
          <h1 className="NotFoundPage-inner-404">
            40
            <span>
              <h1>4</h1>
            </span>
          </h1>
          <h1 className="NotFoundPage-inner-text">
            Ошибка 404! Страница не найдена!
          </h1>
          <div className="NotFoundPage-inner-buttons">
            <Link to="/" className="NotFoundPage-inner-button">На главную</Link>
            <a href="" className="NotFoundPage-inner-button">В каталог</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
