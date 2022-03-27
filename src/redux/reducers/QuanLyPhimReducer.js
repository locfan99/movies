import { LAY_THONG_TIN_PHIM } from "../types/LayThongTinHeThongRapType";
import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_PHIM,
} from "../types/QuanLyPhimTypes";

const initialState = {
  bannerPhim: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
  dsPhim: [
    {
      maPhim: 9427,
      tenPhim: "Trạng Tí Phiêu Lưu Ký 121",
      biDanh: "trang-ti-phieu-luu-ky-121",
      trailer: "https://youtu.be/sx1ROHCmY-4",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.jpg",
      moTa: "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-03-05T10:03:06",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  phimmoi:[],
  sapChieu:'',
  dangChieu:'',
  filmDetail:{},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_BANNER: {
      state.bannerPhim = action.bannerPhim;
      return { ...state };
    }
    case LAY_DANH_SACH_PHIM: {
      state.dsPhim = action.dsPhim;
      state.phimmoi = state.dsPhim
      return { ...state };
    }
    case "SET_PHIM_SAP_CHIEU": {
      state.sapChieu = action.sapChieu;
      state.dangChieu = false
      state.dsPhim = state.phimmoi.filter(item=>item.sapChieu === true)
      return { ...state };
    }
    case "SET_PHIM_DANG_CHIEU": {
      state.dangChieu = action.dangChieu;
      state.sapChieu = false
      state.dsPhim = state.phimmoi.filter(item=>item.dangChieu === true)
      return { ...state };
    }
    case LAY_THONG_TIN_PHIM :{
      state.filmDetail = action.filmDetail
      return {...state}
    }
    default:
      return { ...state };
  }
};
