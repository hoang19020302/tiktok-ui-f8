import Header from "../../share_cpn/header/Header";
import "./Login.scss";
function LoginPage() {
  return (
    <div>
      <Header />
      <img src="images/background_image.png" alt="" />
      <div className="login-form">
        <div className="login-content">
          <div className="login-title">Đăng nhập</div>
          <div className="account-field">
            <div className="account-title">Tài khoản</div>
            <div className="account-input">
              <input className="input-text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
