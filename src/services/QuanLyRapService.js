import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  constructor() {
    super();
  }

  layThongTinHeThongRap = () => {
    return this.get(`QuanLyRap/LayThongTinHeThongRap`);
  };
  layThongTinCumRapTheoHeThong = (maRap) => {
    return this.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`
    );
  };
}

export const quanLyRapService = new QuanLyRapService();
