import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mainPageImage">
      <div className="mainPage">
        <h1>
          <i
            className="fa-solid fa-globe"
            style={{ marginRight: "5px", color: "green" }}
          ></i>
          <span style={{ color: "green" }}>Country -</span>
          <span style={{ color: "red" }}> Search</span>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ marginLeft: "5px", color: "red" }}
          ></i>
        </h1>
        <h4>
          This is application to know the information of the country you want to
          know
        </h4>
        <button
          onClick={() => {
            navigate("/country");
          }}
          className="portalButton"
        >
          Get Started Here{" "}
          <i class="fa-solid fa-arrow-right" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
