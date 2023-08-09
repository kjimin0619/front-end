import React from "react";
import { useParams, useLocation } from "react-router-dom";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(title, state);

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px", marginRight: "10px" }}
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        ></img>
        <div>
          <div style={{ fontSize: "32px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
