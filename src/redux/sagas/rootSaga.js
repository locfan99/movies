import { all } from "redux-saga/effects";
import * as QuanLyPhimSaga from "./QuanLyPhimSaga";
import * as QuanLyRapSaga from "./QuanLyRapSaga";
import * as QuanLyNguoiDungSaga from "./QuanLyNguoiDungSaga";
export function* rootSaga() {
  yield all([
    QuanLyPhimSaga.theoDoiLayDanhSachBanner(),
    QuanLyPhimSaga.theoDoiLayDanhSachPhim(),
    QuanLyPhimSaga.theoDoiThemPhim(),
    QuanLyPhimSaga.theoDoiCapNhatPhimUpload(),
    QuanLyPhimSaga.theoDoiXoaPhim(),
    QuanLyPhimSaga.theoDoiLayThongTinPhim(),
    QuanLyRapSaga.theoDoiLayThongTinHeThongRap(),
    QuanLyRapSaga.theoDoiLayThongTinCumRapTheoHeThong(),
    QuanLyNguoiDungSaga.theoDoiDangNhap(),
  ]);
}
