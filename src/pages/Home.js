import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu";

import { useDispatch, useSelector } from "react-redux";
import { LAY_DANH_SACH_PHIM_API } from "../redux/types/QuanLyPhimTypes";
import RSlick from "./RSlick";
import HomeCarousel from "../templates/HomeCarousel";

export default function Home(props) {
  const dispatch = useDispatch();
  const { dsPhim } = useSelector((state) => state.QuanLyPhimReducer);
  useEffect(() => {
    dispatch({
      type: LAY_DANH_SACH_PHIM_API,
    });
  }, []);
  return (
    <div>
      {" "}
      <HomeCarousel />
      <div className="container">
        <RSlick style={{ width: 1200 }} dsPhim={dsPhim} />
        <HomeMenu />
      </div>
    </div>
  );
}
