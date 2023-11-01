import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Header.style";
import LoginControl from "./LoginControl";

function Header() {
  return (
    <S.Header>
      <img
        style={{ width: "154px", marginLeft: "30%" }}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="로고"
      />{" "}
      ;
      <S.Navi>
        <S.Content>
          <S.Options>
            <Link to="/movie">영화</Link>
          </S.Options>
          <S.Options>
            <Link to="/tv">TV 프로그램</Link>
          </S.Options>
          <S.Options>
            <Link to="/celeb">인물</Link>
          </S.Options>

          <S.Options>
            <LoginControl />
          </S.Options>
        </S.Content>
      </S.Navi>
    </S.Header>
  );
}

export default Header;
