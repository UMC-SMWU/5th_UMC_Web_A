import React from "react";
import AdPage from "../Components/AdPage";
import { useLocation } from "react-router-dom";

const homeStyle = {
  margin: 0, // 간격을 없애기 위해 margin을 0으로 설정
};

function Home() {
  const location = useLocation();

  if (location.pathname !== "/nf") {
    return (
      <div style={homeStyle}>
        <AdPage />
      </div>
    );
  } else {
    return <div style={homeStyle}></div>;
  }
}

export default Home;
