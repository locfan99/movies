import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LAY_THONG_TIN_PHIM_API } from "../redux/types/LayThongTinHeThongRapType";
import moment from 'moment';
import { Link } from "react-router-dom";
export default function Detail(props) {
  const dispatch = useDispatch();
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);

  let { id } = props.match.params;
  useEffect(() => {
    dispatch({
      type: LAY_THONG_TIN_PHIM_API,
      id,
    });
  }, []);

  return (
    <div style={{backgroundImage:`url(${filmDetail.hinhAnh})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'canter'}} >
      <div className="box">
          <div className="anhMinhHoa">
              <img style={{width:300,height:350,marginRight:30}} src={filmDetail.hinhAnh} /> 
              <div>
                <p style={{fontSize:20,fontWeight:600}}>{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
                <p>{moment(filmDetail.ngayKhoiChieu).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <Link to={`/xemPhim/${id}`} >
                  <button className="btn btn-danger" style={{fontSize:23,color:'black',fontWeight:600}}>Xem phim</button>
                  </Link>
              </div>            
          </div>
          
      </div>
    </div>
  );
}
