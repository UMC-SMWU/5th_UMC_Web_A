import React from "react";
import BannerImg from "../Img/Banner.svg";

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAdOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isAdOn: !prevState.isAdOn,
    }));
  }

  render() {
    const bannerStyle = {
      width: "100%",
    };

    return (
      <div>
        {this.state.isAdOn ? (
          <img
            src={BannerImg}
            alt='광고'
            style={bannerStyle}
          />
        ) : null}
        <button onClick={this.handleClick}>
          {this.state.isAdOn ? "광고 숨기기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default Ad;
