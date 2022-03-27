import { quanLyRapService } from "../../services/QuanLyRapService";
import { takeLatest, put, call } from "redux-saga/effects";
import { CUM_RAP, CUM_RAP_API, LAY_THONG_TIN_HT_RAP, LAY_THONG_TIN_HT_RAP_API } from "../types/LayThongTinHeThongRapType";
function* LayThongTinHeThongRap(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyRapService.layThongTinHeThongRap()
    );
    yield put({
      type: LAY_THONG_TIN_HT_RAP,
      ttRap: data.content
    });
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiLayThongTinHeThongRap() {
  yield takeLatest(LAY_THONG_TIN_HT_RAP_API, LayThongTinHeThongRap);
}
/////lay ds cum rap
function* LayThongTinCumRapTheoHeThong(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyRapService.layThongTinCumRapTheoHeThong(action.maRap)
    );
    yield put({
      type: CUM_RAP,
      cumRap: data.content
    });
    yield call(LayThongTinHeThongRap)
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiLayThongTinCumRapTheoHeThong() {
  yield takeLatest(CUM_RAP_API, LayThongTinCumRapTheoHeThong);
}