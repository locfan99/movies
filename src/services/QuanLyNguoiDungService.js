import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (thongTin) => {
    return this.post(`QuanLyNguoiDung/DangNhap`,thongTin);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
