import React from "react";
import "./Register.scss";
import BlankHeader from "../../share_cpn/blank_header/BlankHeader";
import ButtonSquare from "../../share_cpn/button_square/ButtonSquare";
import "../../styles/background.scss";

function RegisterPage() {
  return (
    <div className="register-page">
      <BlankHeader />
      {/* Thêm class background-image để áp dụng CSS */}
      <img
        src="images/background_image.png"
        alt=""
        className="background-image"
      />
      <div className="partner-section">
        <h2>Đồng hành cùng Freshy</h2>
        <p>Chào mừng bạn đến với Freshy.</p>
        <p>Bạn muốn đồng hành cùng Freshy với vai trò:</p>
        <div className="partner-roles">
          <ButtonSquare icon="test_square_button.png" label="Đại lý" />
          <ButtonSquare icon="test_square_button.png" label="Nhà bếp" />
          <ButtonSquare icon="test_square_button.png" label="Giao hàng" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
