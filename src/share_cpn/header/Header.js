import "./Header.scss";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo-container">
          <img src="images/name_app.png" alt="" />
        </div>
        <div className="content-container">
          <div className="manager">Quản lý</div>
          <a href="/orders" className="order">
            Đơn hàng
          </a>
          <div className="report">Báo cáo</div>
          <div className="service">Dịch vụ khách hàng</div>
        </div>
        <div className="account-container">
          <a href="/login" className="login-button">
            Đăng nhập
          </a>
          <div className="signup-button">
            <button className="small-button">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
