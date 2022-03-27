import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { takeLatest, put, call,takeEvery } from "redux-saga/effects";
import {history} from '../../App'
import { DANG_NHAP, DANG_NHAP_API } from "../types/QuanLyNguoiDungType";

function* DangNhap(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyNguoiDungService.dangNhap(action.thongTin)
    );
    if (status === 200) {
      yield put({
        type: DANG_NHAP,
        nguoiDung: data.content,
      });
      history.goBack();

    }
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiDangNhap() {
  yield takeEvery(DANG_NHAP_API, DangNhap);
}
