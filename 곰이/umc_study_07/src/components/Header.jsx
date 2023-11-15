import React from "react";
import { Link as L } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";

const Li = styled(L)`
`;

const Link = styled(L)`
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 154px;
  height: 20px;
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  color: black;
  display: flex;
  align-items: center;
`;


function Header() {
  return (
    <div className="header-container">
          <div className="header-wrap">
            <div className="header-left-wrap">
              <Li to="/">
                <Logo
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="TMDB"/>
              </Li>
              <Menu>
                <Link to="/movie">영화</Link>
                <Link to="/tv">TV 프로그램</Link>
                <Link to="/person">인물</Link>
                <LoginButton />
              </Menu>
            </div>
            
          </div>

    </div>
  );
}

export default Header;