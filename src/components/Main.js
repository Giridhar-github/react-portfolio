import React from "react";

const Main = () => {
  return (
    <>
      <div className="main-content">
        <div className="welcome-text">
          <div className="large-text">
            <h1>Hello</h1>
            <h3>Pogrammer</h3>
          </div>
          <p>lorem100sdadadasdsadasd</p>
        </div>
        <div className="welcome-image" >
            <img src={require("../assets/dog-1728494_1920.png")} alt="content" />
        </div>
      </div>
    </>
  );
};

export default Main;
