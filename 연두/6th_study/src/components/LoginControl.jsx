import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Li = styled.li`
  float: left;
  list-style: none;
`;
const NavSpecialStyle = styled(NavLink)`
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 18px;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: black;
    border-radius: 2em;
    padding: 4px 18px;
    background-color: white;
  }
  &.active {
    color: black;
    border-radius: 2em;
    padding: 4px 15px;
    background-color: white;
  }
`;
const LoginMessage = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 0 10px;
  line-height: 24px;
`;

function LoginControl() {
  const [LoggedIn, setLoggedIn] = useState("no");
  const LoggedInControlHandler = () => {
    return setLoggedIn("yes");
  };
  const LoggedOutControlHandler = () => {
    return setLoggedIn("no");
  };

  return (
    <>
      {LoggedIn === "no" ? (
        <>
          <Li>
            <NavSpecialStyle to="/Login" onClick={LoggedInControlHandler}>
              로그인
            </NavSpecialStyle>
          </Li>
          <LoginMessage>로그인해 주세요!</LoginMessage>;
        </>
      ) : (
        <>
          <Li>
            <NavSpecialStyle to="/" onClick={LoggedOutControlHandler}>
              로그아웃
            </NavSpecialStyle>
          </Li>
          <LoginMessage>환영합니다!</LoginMessage>;
        </>
      )}
    </>
  );
}

// function WelcomeUser(props) {
//   return <LoginMessage>환영합니다!</LoginMessage>;
// }
// function PleaseLogin(props) {
//   return <LoginMessage>로그인해 주세요!</LoginMessage>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <WelcomeUser />;
//   }
//   return <PleaseLogin />;
// }
// function LoginButton(props) {
//   return <NavSpecialStyle onClick={props.onClick}>로그인</NavSpecialStyle>;
// }
// function LogoutButton(props) {
//   return <NavSpecialStyle onClick={props.onClick}>로그아웃</NavSpecialStyle>;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }
//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }
//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <>
//         <Li>
//           {isLoggedIn ? (
//             <LogoutButton onClick={this.handleLogoutClick} />
//           ) : (
//             <LoginButton onClick={this.handleLoginClick} />
//           )}
//         </Li>
//         <Greeting isLoggedIn={isLoggedIn} />
//       </>
//     );
//   }
// }

export default LoginControl;
