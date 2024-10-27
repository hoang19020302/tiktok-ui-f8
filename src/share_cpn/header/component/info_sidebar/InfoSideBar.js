import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import "./InfoSideBar.scss";
import Avatar from "../../../avatar/Avatar";
import HeaderSmall from "../../../header_small/HeaderSmall";
import "../../../../styles/textstyle.scss";

function InfoSidebar({ isOpen, toggleSidebar }) {
  const [isEditMode, setIsEditMode] = useState(false);

  // Hàm để chuyển sang chế độ chỉnh sửa
  const openEditMode = () => {
    setIsEditMode(true);
  };

  // Hàm để quay lại chế độ xem thông tin
  const closeEditMode = () => {
    setIsEditMode(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsEditMode(false);
    }
  }, [isOpen]);

  return (
    <div className="info-container">
      <div className="avatar-icon" onClick={toggleSidebar}>
        <Avatar
          src="/images/avatar.png"
          imgHeight="40px"
          imgWidth="40px"
          imgBorderRadius="20%"
        />
      </div>

      {/* Sidebar */}
      <div className={`info-sidebar ${isOpen ? "collapsed" : ""}`}>
        {!isEditMode ? (
          // Chế độ xem thông tin
          <>
            <div className="info-image">
              <Avatar
                src="/images/avatar.png"
                imgHeight="90px"
                imgWidth="90px"
                imgBorderRadius="20%"
              />
              <p className="info-name">Lê Huy Thái</p>
            </div>
            <div className="divider-line"></div>
            <Menu
              mode="vertical"
              style={{ width: "100%", height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1" onClick={openEditMode}>
                Thay đổi thông tin
              </Menu.Item>
              <a href="/">
                <Menu.Item key="2">Đăng xuất</Menu.Item>
              </a>
            </Menu>
          </>
        ) : (
          // Chế độ chỉnh sửa thông tin
          <>
            <HeaderSmall title="Chỉnh sửa thông tin" onBack={closeEditMode} />
            <div className="edit-content">
              <div className="info-form-group">
                <div className="info-fn-input">
                  <label htmlFor="first-name">Họ</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    className="input-field"
                  />
                </div>

                <div className="info-ln-input">
                  <label htmlFor="last-name">Tên</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="input-field"
                  />
                </div>

                <div className="info-email-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input-field"
                  />
                </div>

                <div className="infor-bd-input">
                  <label htmlFor="birthday">Ngày sinh</label>
                  <input
                    type="text"
                    id="birthday"
                    name="birthday"
                    className="input-field"
                  />
                </div>

                <div className="info-pn-input">
                  <label htmlFor="phonenumber">Số điện thoại</label>
                  <input
                    type="text"
                    id="phonenumber"
                    name="phoneNumber"
                    className="input-field"
                  />
                </div>
                <div style={{ height: "15px" }} />
                <button className="login-button-big" onClick={closeEditMode}>
                  Cập nhật thông tin
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoSidebar;
