import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginControl from "./LoginControl";

const Ul = styled.ul`
  display: flex;
  margin: 14px;
  text-align: center;
  vertical-align: center;
`;
const Li = styled.li`
  float: left;
  list-style: none;
`;
const NavStyle = styled(NavLink)`
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 0px 13px;
  &:link {
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <header id="header">
      <Ul>
        <Li>
          <NavStyle to="/">
            <img
              style={{
                width: "154px",
                height: "20px",
              }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </NavStyle>
        </Li>
        <Li>
          <NavStyle to="/Movies">영화</NavStyle>
        </Li>
        <Li>
          <NavStyle to="/TV">TV 프로그램</NavStyle>
        </Li>
        <Li>
          <NavStyle to="/Celebrity">인물</NavStyle>
        </Li>
        <LoginControl />
      </Ul>
    </header>
  );
}
