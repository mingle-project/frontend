// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "", // 사용자 아이디
    pw: "", // 사용자 비밀번호
    isLoggedIn: false, // 로그인 상태
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id; // 입력된 아이디를 상태에 저장
      state.pw = action.payload.pw; // 입력된 비밀번호를 상태에 저장
      state.isLoggedIn = true; // 로그인 상태를 true로 설정
    },
    logout: (state) => {
      state.id = ""; // 사용자 아이디 초기화
      state.pw = ""; // 사용자 비밀번호 초기화
      state.isLoggedIn = false; // 로그인 상태를 false로 설정
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
