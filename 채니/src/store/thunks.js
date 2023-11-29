// src/store/thunks.js
import axios from "axios";
import { loginSuccess } from "./actions";

const API_URL = "http://localhost:8000";

export const loginUser = (user) => async (dispatch) => {
  try {
    const credentials = {
      id: user.id,
      pw: user.pw,
    };

    // 사용자 정보를 서버에 POST로 보내기
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    console.log(response);

    if (response.status === 200) {
      const { AccessToken } = response.data.result;
      const { userId } = response.data.result;

      console.log(AccessToken);
      // 로그인 성공 액션 디스패치
      dispatch(loginSuccess(AccessToken));
      localStorage.setItem("token", AccessToken);
      localStorage.setItem("id", userId);
      getUserInfo();
    } else {
      console.error("로그인 실패: 올바르지 않은 응답 형식");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

export const getUserInfo = (AccessToken) => async () => {
  try {
    // 토큰을 사용하여 서버에 GET 요청 보내기
    const response = await axios.get(`${API_URL}/user/payload`, {
      headers: {
        Authorization: `Bearer` + AccessToken,
      },
    });
    console.log(response);
    if (response.status === 200) {
      const { id } = response.data.id;

      // 획득한 userId를 저장

      localStorage.setItem("id", id);
    } else {
      console.error(
        "토큰으로 사용자 정보 가져오기 실패: 올바르지 않은 응답 형식"
      );
    }
  } catch (error) {
    console.error("토큰으로 사용자 정보 가져오기 실패:", error);
  }
};
