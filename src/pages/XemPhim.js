import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { USER_LOGIN } from "../util/contants";
import { Redirect } from "react-router-dom";

const XemPhim = (props) => {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  if (!localStorage.getItem(USER_LOGIN)) {
    alert('Vui lòng đăng nhập để tiếp tục')
    return <Redirect to="/login" />;
  }

  return (
    <ReactPlayer
      width="100%"
      height="100vh"
      playing={true}
      url={filmDetail.trailer}
    />
  );
};
export default XemPhim;
