// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { NickName } from "./styles/MemberInformationStyles";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "", // 사용자 아이디
    pw: "", // 사용자 비밀번호
    nickname: "",
    token: "", // 사용자 토큰 (로그인 후 저장)
    isLoggedIn: false, // 로그인 상태
    galaxy_id: "",
    question_id: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id; // 아이디 저장
      state.pw = action.payload.pw; // 비밀번호 저장
      state.nickname = action.payload.nickname;
      state.token = action.payload.token; // 토큰 저장
      state.isLoggedIn = true; // 로그인 상태 true
    },
    updateGroupingDetails: (state, action) => {
      state.galaxy_id = action.payload.galaxy_id;
    },
    main: (state, action) => {
      state.question_id = action.payload.question_id;
    },
    logout: (state) => {
      state.id = ""; // 아이디 초기화
      state.pw = ""; // 비밀번호 초기화
      state.nickname = "";
      state.token = ""; // 토큰 초기화
      state.isLoggedIn = false; // 로그인 상태 false
    },
  },
});

export const { login, logout, updateGroupingDetails, main } = userSlice.actions;

export default userSlice.reducer;
