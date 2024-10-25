import "./BlankHeader.scss";

function BlankHeader() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="logo-container">
          <img src="images/name_app.png" alt="" />
        </div>
        <div className="account-container">
          <a href="/login" className="login-button">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlankHeader;
