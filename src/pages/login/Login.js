
import BlankHeader from "../../share_cpn/blank_header/BlankHeader";
import "./Login.scss";
function LoginPage() {
  return (
    <div className="login-page">
      <BlankHeader />
      {/* Thêm class background-image để áp dụng CSS */}
      <img
        src="images/background_image.png"
        alt=""
        className="background-image"
      />
      <div className="login-container">
        <h2 className="login-title">Đăng nhập</h2>

        <div className="form-group">
          <div className="username-input">
            <label htmlFor="phonenumber">Số điện thoại</label>
            <input
              type="text"
              id="phonenumber"
              name="phoneNumber"
              className="input-field"
            />
          </div>

          <div className="password-input">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="text"
              id="password"
              name="password"
              className="input-field"
            />
          </div>
        </div>

        <button className="login-button-big">Đăng nhập</button>

        <a href="/forgot-password" className="forgot-password-link">
          Quên mật khẩu?
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
