import React, { useEffect } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector,useDispatch } from "react-redux";
import { LAY_DANH_SACH_BANNER_API } from "../redux/types/QuanLyPhimTypes";
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
export default function HomeCarousel() {
  const { bannerPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch({ 
        type:LAY_DANH_SACH_BANNER_API
      })
  },[])
  const renderBanner = () => {
    return bannerPhim.map((item, index) => {
      return (
        <div key={index}>
          <img style={contentStyle} src={item.hinhAnh} />
        </div>
      );
    });
  };
  return <Carousel autoplay>{renderBanner()}</Carousel>;
}
