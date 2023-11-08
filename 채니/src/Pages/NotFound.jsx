import React from "react";
import { Link } from "react-router-dom";

const PageStyle = {
  marginTop: "5%",
  display: "flex", // Fixed the typo here
  flexDirection: "column", // Fixed the typo here
  justifyContent: "left", // Fixed the typo here
  gap: "5px", // Changed "line-gap" to "gap"
};

const linkStyle = {
  color: "red",
};

function NotFound() {
  return (
    <div style={PageStyle}>
      <div>
        {" "}
        <h1> 해당 페이지를 찾지 못했습니다. </h1>
      </div>
      <div>
        {" "}
        <h3> 주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다. </h3>
      </div>
      <div>
        {" "}
        <Link to="/" style={linkStyle}>
          {" "}
          메인 페이지로 이동
        </Link>{" "}
      </div>
    </div>
  );
}

export default NotFound;
