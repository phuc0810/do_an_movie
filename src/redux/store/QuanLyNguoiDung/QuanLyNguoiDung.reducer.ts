import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACCESSTOKEN, ThongTinDangNhap, USER_LOGIN } from "@types";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN) as string);
}

interface typeInitialState {
  thongTinDangNhap?: ThongTinDangNhap;
}

const initialState: typeInitialState = {
  thongTinDangNhap: user as ThongTinDangNhap,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungAction,
} = createSlice({
  name: "QuanLyNguoiDung",
  initialState,
  reducers: {
    setThongTinDangNhap: (state, action: PayloadAction<ThongTinDangNhap>) => {
      state.thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(state.thongTinDangNhap));
      localStorage.setItem(ACCESSTOKEN, state.thongTinDangNhap.accessToken);
    },
  },
});
