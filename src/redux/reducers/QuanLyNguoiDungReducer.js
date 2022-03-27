import { TOKEN, USER_LOGIN } from "../../util/contants";
import { DANG_NHAP } from "../types/QuanLyNguoiDungType";

let user = {};
if(localStorage.getItem(USER_LOGIN)){
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  userLogin:user
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      const {nguoiDung} = action;
      localStorage.setItem(USER_LOGIN,JSON.stringify(nguoiDung))
      localStorage.setItem(TOKEN,nguoiDung.accessToken);
      return { ...state,userLogin:nguoiDung };
    }

    default:
      return { ...state };
  }
};
