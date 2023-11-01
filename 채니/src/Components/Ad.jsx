import React from "react";

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
        {this.state.showAd && <img src="ad_imaging.svg" alt="배너사진" />}
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default Ad;
