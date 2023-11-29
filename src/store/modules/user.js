import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { getToken, setToken } from "@/utils";
const userStore = createSlice({
  name: "user",
  // 数据
  initialState: {
    token: getToken() || "",
  },
  // 同步修改方法
  reducers: {
    setUserInfo(state, action) {
      state.token = action.payload;
      // 存入本地
      setToken(state.token);
    },
  },
});

// 解构出actionCreater
const { setUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setUserInfo(res.data.token));
  };
};

export { fetchLogin };

export default userReducer;