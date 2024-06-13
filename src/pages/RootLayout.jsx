import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.scss";
import logo from "../assets/logo.png";

function RootLayout() {
  return (
    <div className="d-flex flex-column w-100 h-100 navbar-navigation position-relative">
      <nav className="nav nav-pills gap-4 justify-content-center  p-2 nav-bar-container">
        <a style={{ width: "50%", textDecoration: "none" }} href="./home">
          <div style={{ height: "3rem", textDecoration: "none" }}>
            {" "}
            <img
              src={logo}
              style={{
                height: "2rem",
                width: "2rem",
                marginTop: "-1rem",
                marginRight: "0.3rem",
              }}
            />
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "700",
              }}
              className="website-title-2"
            >
              PRIVATE MEDICAL CLINIC
            </span>
          </div>
        </a>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-bar" : "nav-link nav-bar-active"
          }
          to="home"
        >
          Trang chủ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-bar" : "nav-link  nav-bar-active"
          }
          to="introduce"
        >
          Giới thiệu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-bar" : "nav-link   nav-bar-active"
          }
          to="procedure"
        >
          Quy trình
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link  nav-bar" : "nav-link   nav-bar-active"
          }
          to="search"
        >
          Tra cứu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link  nav-bar" : "nav-link   nav-bar-active"
          }
          to="booking"
        >
          Đặt lịch
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link  nav-bar" : "nav-link   nav-bar-active"
          }
          to="contact"
        >
          Liên hệ
        </NavLink>
      </nav>
      <div className="row w-100 h-100 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
