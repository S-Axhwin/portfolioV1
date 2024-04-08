import React from "react";
import "./ProTemp.css";

const ProTemp = ({ name, gitlink, demolink, img }) => {
  return (
    <>
      <div
        className="details-container color-container"
        style={{ width: "fit-content" }}
      >
        <div className="article-container">
          <img src={img} alt="Project 1" className="project-img" />
        </div>
        <h2 className="experience-sub-title project-title">{name}</h2>
        <div className="btn-container">
          <button id="project-btn-1" className="btn btn-color-2 project-btn">
            <a
              href={gitlink}
              target="__blank"
              style={{ color: "black", textDecoration: "none" }}
            >
              Github Repo
            </a>
          </button>
          <button id="project-btn-1" className="btn btn-color-2 project-btn">
            <a
              href={demolink}
              style={{ textDecoration: "none" }}
              target="__blank"
            >
              Demo Link
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProTemp;
