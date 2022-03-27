import styleS from "./RSlick.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { useDispatch,useSelector } from "react-redux";
import CardFilm from "./CardFilm";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  ${styleS["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  ${styleS["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const RSlick = (props) => {
  const dispatch = useDispatch();
  const {dangChieu,sapChieu} = useSelector(state=>state.QuanLyPhimReducer)
  const renderdsPhim = () => {
    return props.dsPhim.map((item, index) => {
      return (
        <div>
          <CardFilm key={index} item={item} />{" "}
        </div>
      );
    });
  };
  let activedc = dangChieu === true ? 'active_Film' : '' ;
  let activesc = sapChieu === true ? 'active_Film' : ''  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <button
          onClick={() => {
            dispatch({
              type: "SET_PHIM_DANG_CHIEU",
              dangChieu:true
            });
          }}
          className={`${styleS[activedc]} btn btn-danger`}
          style={{ marginRight: 30 }}
        >
          Phim đang chiếu
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "SET_PHIM_SAP_CHIEU",
              sapChieu:true
            });
          }}
          className={`${styleS[activesc]} btn btn-success`}
        >
          Phim sắp chiếu
        </button>
      </div>

      <Slider {...settings}>{renderdsPhim()}</Slider>
    </div>
  );
};

export default RSlick;
