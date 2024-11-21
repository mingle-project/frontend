// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage를 사용하기 위해 storage를 import
import userReducer from "./userSlice"; // userSlice import

// persistConfig 설정
const persistConfig = {
  key: "root", // key는 'root'로 설정
  storage: storage, // localStorage에 저장
};

// userSlice reducer에 persistReducer를 적용
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Store 생성
const store = configureStore({
  reducer: {
    user: persistedUserReducer, // persistedUserReducer를 store에 설정
  },
});

// Persistor 생성
const persistor = persistStore(store);

export { store, persistor };
