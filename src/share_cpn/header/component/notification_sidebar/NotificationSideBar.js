import React, { useState } from "react";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
//import { items2 } from "./menu_test";
import "./NotificationSidebar.scss"; // Style riêng cho NotificationSidebar
import "../../../../styles/textstyle.scss";

export const items2 = [
  {
    key: "1",
    label: (
      <span className="menu-item-text">
        Thông báo dài sẽ bị cắt nếu quá dài dài dài dài dài adfi adfiafd ídf
      </span>
    ),
  },
];

function NotificationSidebar({ isOpen, toggleSidebar }) {
  return (
    <div className="notification-container">
      {/* Nút chuông */}
      <div className="notification-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBell} style={{ fontSize: "18px" }} />
      </div>

      {/* Sidebar dùng div */}
      <div className={`notification-sidebar ${isOpen ? "collapsed" : ""}`}>
        <h3 className="title">Thông báo</h3>
        <div className="divider-line"></div> {/* Đường kẻ dưới tiêu đề */}
        <Menu
          mode="vertical"
          //defaultSelectedKeys={["1"]}
          //defaultOpenKeys={["sub1"]}
          style={{ width: "100%", height: "100%", borderRight: 0 }}
          items={items2}
        />
        //<div style={{ height: "20px" }}></div>
      </div>
    </div>
  );
}

export default NotificationSidebar;
