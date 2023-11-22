// src/store/thunks.js
import axios from "axios";
import { loginSuccess } from "./actions";

const API_URL = "http://localhost:8000";

export const loginUser = (user) => async (dispatch) => {
  try {
    // body.id : user.id, body.pw : user.pw
    const credentials = {
      id: user.id,
      pw: user.pw,
    };

    const response = await axios.post(`${API_URL}/user/login`, credentials);

    if (response.status === 200 && response.data.userInfo) {
      dispatch(loginSuccess(response.data.userInfo));
    } else {
      console.error("로그인 실패: 올바르지 않은 응답 형식");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};
