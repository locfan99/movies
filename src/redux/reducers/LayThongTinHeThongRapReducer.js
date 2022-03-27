import { CUM_RAP, LAY_THONG_TIN_HT_RAP } from "../types/LayThongTinHeThongRapType"

const initialState = {
    ttRap:[],
    cumRap:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LAY_THONG_TIN_HT_RAP:{
        state.ttRap = action.ttRap
        return {...state}
    }
    case CUM_RAP:{
        state.cumRap = action.cumRap
        return {...state}
    }
  default:
    return {...state}
  }
}
