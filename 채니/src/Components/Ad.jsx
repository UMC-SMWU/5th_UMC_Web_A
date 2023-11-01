import React from "react";
import { ReactComponent as Banner } from "../img/ad_imaging.svg";

const bannerStyle = {
  marginTop: "-44px", // margin-top을 42px로 설정
};

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // 초기에 광고를 표시
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd, // 토글
    }));
  };

  render() {
    return (
      <div>
        {this.state.showAd && <Banner style={bannerStyle} width="100%" />}
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default Ad;
