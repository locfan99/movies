import { baseService } from "./baseService";

export class QuanLyPhimServices extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(`QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhim = (tenPhim='') => {
    if (tenPhim.trim() != "") {
      return this.get(
        `QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`
      );
    }
    return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01`);
  };
  layThongTinPhim = (id) => {
    return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  };
  themPhimUploadHinh = (formData) => {
    return this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData);
  };
  capNhatPhimUpload = (formData) => {
    return this.post(`QuanLyPhim/CapNhatPhimUpload`, formData);
  };
  xoaPhim = (maPhim) => {
    return this.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const quanLyPhimServices = new QuanLyPhimServices();
