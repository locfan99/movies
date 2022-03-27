import { useHistory } from "react-router-dom";
import history from "../App";
import React, { Fragment, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { TOKEN, USER_LOGIN } from "../util/contants";
const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Thông tin",
    path: "/thongtin",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];
export default function Header(props) {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  let useHis = useHistory();
  const renderLogin = () => {
    if (!localStorage.getItem(USER_LOGIN)) {
      return (
        <Link to="/login">
          <p style={{ color: "white", marginBottom: 0, fontSize: 22 }}>
            Đăng Nhập
          </p>
        </Link>
      );
    }
    return (
      <Fragment>
        {" "}
        <button
          onClick={() => {
            useHis.push("/admin/films");
          }}
          className="profile"
        >
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            useHis.push("/home");
            window.location.reload();
          }}
          className="dangXuat"
        >
          Đăng xuất
        </button>
      </Fragment>
    );
  };
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/02/19/40/moon-1303512_960_720.png"
              alt="https://cdn.pixabay.com/photo/2016/04/02/19/40/moon-1303512_960_720.png"
            />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__center">
            {mainNav.map((item, index) => (
              <div
                key={index}
                className="header__menu__item header__menu__center__item "
              >
                <Link className="hoverlink" to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="header__menu__item header__menu__right">
          {renderLogin()}
        </div>
      </div>
    </div>
  );
}
