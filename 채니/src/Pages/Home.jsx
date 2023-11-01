import React from "react";
import AdPage from "../Components/AdPage";

const homeStyle = {
  margin: 0, // 간격을 없애기 위해 margin을 0으로 설정
};

function Home() {
  return (
    <div style={homeStyle}>
      <AdPage />
    </div>
  );
}

export default Home;
