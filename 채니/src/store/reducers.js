// src/store/reducers.js

import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess } from "./actions";

const initialState = {
  user: null,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginSuccess, (state, action) => {
    state.user = action.payload;
  });
});

export default rootReducer;

// 첫번째로 builder-addCase 로 처리할 로직
//addCase 메서드의 매개변수 : 1번째: 처리할 액션객체 , 2번째: 콜백함수(해당 액션에 대한 처리 로직을 담고 있음)
//해당 콜백함수는 또, 두개의 매개변수를 받음(첫째: 현재상태(state)과 두번째: dispatch된 액션'객체')
