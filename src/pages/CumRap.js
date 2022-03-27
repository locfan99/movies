import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { CUM_RAP_API } from '../redux/types/LayThongTinHeThongRapType';

export default function CumRap(props) {
    const {item} = props
    const {cumRap} = useSelector(state=>state.LayThongTinHeThongRapReducer)
    const dispatch =useDispatch()
    console.log(cumRap);
    const renderHTrap = ()=>{
        return cumRap?.map((rap,index)=>{
            return <div key={index}>
                    <p>{rap.tenCumRap}</p>
                    <p>{rap.diaChi}</p>
                    <hr></hr>
            </div>
        })
    }
    useEffect(() => {
            dispatch({
                type:CUM_RAP_API,
                maRap:item.maHeThongRap
            })
    },[item.maHeThongRap]);
  return (
      <div>{renderHTrap()}</div>
     
  )
}
