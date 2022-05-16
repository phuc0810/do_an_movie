import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDanhSachPhim } from "../../redux/actions/QuanLyPhimAction";
import {
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import { RootState, useDispatchThunk } from "../../redux/configStore";
import Slider from "../_Components/Swiper/Slider";
import HomeMenu from "./HomeMenu/HomeMenu";

type Props = {};

export default function Home(props: Props) {
  // goi ham`
  let dispatch = useDispatch();
  let dispatchThunk = useDispatchThunk();

  // state
  let { arrFilm, sapChieu, dangChieu } = useSelector(
    (state: RootState) => state.QuanLyPhimReducer
  );
  console.log(arrFilm);

  let activePhimSapChieu = sapChieu === true ? "activePhim" : "noneActive";
  let activePhimDangChieu = dangChieu === true ? "activePhim" : "noneActive";

  // call api lay du lieu

  useEffect(() => {
    dispatchThunk(getDanhSachPhim());
  }, []);

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-5 mx-auto">
          <button
            type="button"
            className={`${activePhimDangChieu} px-8 py-3 font-semibold rounded mr-2 mt-2 `}
            onClick={() => {
              let action = {
                type: PHIM_DANG_CHIEU,
              };
              dispatch(action);
            }}
          >
            Phim Đang Chiếu
          </button>
          <button
            id="btnSapchieu"
            type="button"
            className={`${activePhimSapChieu} px-8 py-3 font-semibold rounded mt-2`}
            onClick={(e) => {
              let action = {
                type: PHIM_SAP_CHIEU,
                e: e.target,
              };
              dispatch(action);
            }}
          >
            Phim Sắp Chiếu
          </button>
          <Slider arrFilm={arrFilm} />
        </div>
      </section>
      <div className="Menu ml-10">
        <HomeMenu />
      </div>
    </div>
  );
}
