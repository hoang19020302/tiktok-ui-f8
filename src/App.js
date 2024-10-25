import "./App.css"; // Import CSS cho ứng dụng
import LoginPage from "./pages/login/Login"; // Import LoginPage component

function App() {
  return (
    <div className="App">
      <LoginPage /> {/* Hiển thị LoginPage */}
      {/* Nếu bạn muốn hiển thị RegisterPage thay vì LoginPage, đổi dòng trên thành: */}
      {/* <RegisterPage /> */}
    </div>
  );
}

export default App;
