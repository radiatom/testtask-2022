import React from "react";
import "./Working.scss";
import avatar from "./../../img/photo-cover.svg";

const Working = () => {
  return (
    <div className="Working">
      <h2 className="Working__title Title">Working with GET request</h2>
      <div className="Working__row">
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>2Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>3Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>4Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>5Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src={avatar} alt="avatar" />
            <h3>6Salvador Stewart Flynn Thomas Salva Salve...</h3>
            <p>
              Leading specialist of the department of cent...
              frontend_develop@gmail.com <br /> +38 (098) 278 44 24
            </p>
          </div>
        </div>
      </div>
      <a className="Working__btn btn" href="">Show more</a>
    </div>
  );
};

export default Working;
