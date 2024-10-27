import React, { useState } from "react";
import SearchBar from "../search_bar/SearchBar";
import "./Header.scss";
import NotificationSidebar from "./component/notification_sidebar/NotificationSideBar";
import InfoSidebar from "./component/info_sidebar/InfoSideBar";

function Header() {
  const [isInfoSidebarOpen, setIsInfoSidebarOpen] = useState(true);
  const [isNotiSidebarOpen, setIsNotiSidebarOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState("0px");

  const handleSearchChange = (event) => {
    console.log("Search input:", event.target.value);
  };

  const toggleNotiSidebar = () => {
    setIsNotiSidebarOpen(false);
    setIsInfoSidebarOpen(true);
  };

  const toggleInfoSidebar = () => {
    setIsInfoSidebarOpen(false);
    setIsNotiSidebarOpen(true);
  };

  const handleMouseEnter = (menuKey) => {
    setActiveSubmenu(menuKey);
    if (menuKey === "management") setSubmenuHeight("140px");
    else if (menuKey === "orders") setSubmenuHeight("180px");
    else setSubmenuHeight("0px");
  };

  const closeSideBar = () => {
    setIsNotiSidebarOpen(true);
    setIsInfoSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <div className="header-wrapper" onMouseLeave={handleMouseLeave}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/home-page">
            <img src="images/name_app.png" alt="Logo" />
          </a>
        </div>

        {/* Main Navigation */}
        <div className="content-container" onChange={closeSideBar}>
          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("management")}
          >
            Quản lý
            {activeSubmenu === "management" && (
              <div className="submenu">
                <div className="submenu-item text-item">Quản lý bếp</div>
                <div className="submenu-item text-item">Quản lý giao hàng</div>
                <div className="submenu-item text-item">Quản lý đại lý</div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("orders")}
          >
            Đơn hàng
            {activeSubmenu === "orders" && (
              <div className="submenu">
                <a
                  href="/orders"
                  onClick={closeSideBar}
                  style={{ textDecoration: "none" }}
                >
                  <div className="submenu-item text-item">Chờ xác nhận</div>
                </a>
                <div className="submenu-item text-item">Đang thực hiện</div>
                <div className="submenu-item text-item">Đã hoàn thành</div>
                <div className="submenu-item text-item">Đã hủy</div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("report")}
          >
            Báo cáo
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => handleMouseEnter("service")}
          >
            Dịch vụ khách hàng
          </div>
        </div>

        {/* Search and Sidebar Options */}
        <div className="option">
          <div className="search">
            <SearchBar placeholder="Tìm kiếm" onChange={handleSearchChange} />
          </div>
          <div style={{ width: "20px" }} />
          <div className="notification">
            <NotificationSidebar
              isOpen={isNotiSidebarOpen}
              toggleSidebar={toggleNotiSidebar}
            />
          </div>
          <div style={{ width: "20px" }} />
          <div className="user">
            <InfoSidebar
              isOpen={isInfoSidebarOpen}
              toggleSidebar={toggleInfoSidebar}
            />
          </div>
        </div>
      </div>

      {activeSubmenu && (
        <div
          className="submenu-background"
          style={{ height: submenuHeight }}
        ></div>
      )}
    </div>
  );
}

export default Header;
