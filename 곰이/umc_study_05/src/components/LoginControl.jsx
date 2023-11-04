import React, { Component } from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
    background-color: white;
    border-radius: 10px;
`;

const Message = styled.p`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.p`
  width: 180px;
  display: flex;
`;

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false 
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
            <LoginWrapper>
                <LoginButton onClick={this.handleLogoutClick}>로그아웃</LoginButton>
                <Message>환영합니다!</Message>
            </LoginWrapper>
        ) : (
            <LoginWrapper>
                <LoginButton onClick={this.handleLoginClick}>로그인</LoginButton>
                <Message>로그인 해주세요!</Message>
            </LoginWrapper>
        )}
      </div>
    );
  }
}

export default LoginControl;
