import React from "react";
import "./Hello.scss";

const Hello = () => {
  return (
    <div className="Hello">
      <div className="Hello__body">
        <h1 className="Hello_title Title">Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a className="Hello_btn btn" href="">Sign up</a>
      </div>
    </div>
  );
};

export default Hello;
