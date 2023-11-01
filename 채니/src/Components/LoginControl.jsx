import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // 초기에 로그아웃 상태로 설정
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let greeting;

    if (isLoggedIn) {
      button = (
        <button
          onClick={this.handleLogoutClick}
          style={{ borderRadius: "30px" }}
        >
          로그아웃
        </button>
      );
      greeting = (
        <p style={{ color: "white", fontSize: "14px" }}>
          &nbsp;&nbsp;&nbsp; 환영합니다.
        </p>
      );
    } else {
      button = (
        <button
          onClick={this.handleLoginClick}
          style={{ borderRadius: "30px" }}
        >
          로그인
        </button>
      );
      greeting = (
        <p style={{ color: "white", fontSize: "14px" }}>
          {" "}
          &nbsp;&nbsp;&nbsp;로그인 해주세요!
        </p>
      );
    }

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {button}
        {greeting}
      </div>
    );
  }
}

export default LoginControl;
