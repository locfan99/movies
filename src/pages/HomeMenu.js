import React, { useEffect } from "react";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LAY_THONG_TIN_HT_RAP_API } from "../redux/types/LayThongTinHeThongRapType";
import CumRap from "./CumRap";
const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const dispatch = useDispatch();
  const { ttRap } = useSelector((state) => state.LayThongTinHeThongRapReducer);
  useEffect(() => {
    dispatch({
      type: LAY_THONG_TIN_HT_RAP_API,
    });
  }, []);
  const renderRap = () => {
    return ttRap?.map((item, index) => {
      return ( 
        <TabPane key={index} tab={<img style={{ width: 50 }} src={item.logo} />}>
         <CumRap item={item}/>
        </TabPane>
      );
    });
  };
  return (
    <div style={{width:800,margin:'0 auto'}}>
      <Tabs tabPosition="left">{renderRap()}</Tabs>
    </div>
  );
}
