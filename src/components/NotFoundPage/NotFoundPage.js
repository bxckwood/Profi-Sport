import React from "react";
import "./NotFoundPage.css";

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
            <button className="NotFoundPage-inner-button">На главную</button>
            <button className="NotFoundPage-inner-button">В каталог</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
