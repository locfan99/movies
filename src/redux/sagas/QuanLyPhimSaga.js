import { takeLatest, put, call } from "redux-saga/effects";
import { history } from "../../App";
import { quanLyPhimServices } from "../../services/QuanLyPhimServices";
import { TOKEN, USER_LOGIN } from "../../util/contants";
import {
  LAY_THONG_TIN_PHIM,
  LAY_THONG_TIN_PHIM_API,
} from "../types/LayThongTinHeThongRapType";
import {
  CAP_NHAT_API,
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_BANNER_API,
  LAY_DANH_SACH_PHIM,
  LAY_DANH_SACH_PHIM_API,
  THEM_PHIM_API,
} from "../types/QuanLyPhimTypes";

function* LayDanhSachBanner(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.layDanhSachBanner()
    );
    yield put({
      type: LAY_DANH_SACH_BANNER,
      bannerPhim: data.content,
    });
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiLayDanhSachBanner() {
  yield takeLatest(LAY_DANH_SACH_BANNER_API, LayDanhSachBanner);
}
////// laydanhsachphim
function* LayDanhSachPhim(action) {
  console.log(action);
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.layDanhSachPhim(action.tenPhim)
    );
    yield put({
      type: LAY_DANH_SACH_PHIM,
      dsPhim: data.content,
    });
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiLayDanhSachPhim() {
  yield takeLatest(LAY_DANH_SACH_PHIM_API, LayDanhSachPhim);
}
/////lay thong tin phim
function* LayThongTinPhim(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.layThongTinPhim(action.id)
    );
    yield put({
      type: LAY_THONG_TIN_PHIM,
      filmDetail: data.content,
    });
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiLayThongTinPhim() {
  yield takeLatest(LAY_THONG_TIN_PHIM_API, LayThongTinPhim);
}
////them phim
function* ThemPhimUploadHinh(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.themPhimUploadHinh(action.formData)
    );
    alert("Thêm phim thành công");
    history.push("/admin/films");
  } catch (errors) {
    console.log(errors.response?.data);
  }
}
export function* theoDoiThemPhim() {
  yield takeLatest(THEM_PHIM_API, ThemPhimUploadHinh);
}
///cap nhat phim

function* CapNhatPhimUpload(action) {
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.capNhatPhimUpload(action.formData)
    );
    alert("Cập nhật phim thành công");
    yield call(LayDanhSachPhim);
    history.push("/admin/films");
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiCapNhatPhimUpload() {
  yield takeLatest(CAP_NHAT_API, CapNhatPhimUpload);
}
//////////xoa phim
function* XoaPhim(action) {
  console.log(localStorage.getItem(TOKEN));
  try {
    const { data, status } = yield call(() =>
      quanLyPhimServices.xoaPhim(action.maPhim)
    );
    alert("Xoa phim thanh cong");
    yield call(LayDanhSachPhim);
  } catch (err) {
    console.log(err.reponse.data);
  }
}
export function* theoDoiXoaPhim() {
  yield takeLatest("XOA_PHIM", XoaPhim);
}
