import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="d-flex flex-column w-100 h-100 navbar-navigation">
      <nav className="nav nav-pills gap-4 justify-content-center border-bottom border-2 p-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link shadow-sm bg-white  nav-bar"
              : "nav-link nav-bar-active"
          }
          to="home"
        >
          Trang chủ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link shadow-sm bg-white  nav-bar"
              : "nav-link  nav-bar-active"
          }
          to="introduce"
        >
          Giới thiệu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link shadow-sm bg-white  nav-bar"
              : "nav-link   nav-bar-active"
          }
          to="procedure"
        >
          Quy trình
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link shadow-sm bg-white  nav-bar"
              : "nav-link   nav-bar-active"
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
