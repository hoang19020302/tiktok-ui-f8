import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register/Register";
import LoginPage from "./pages/login/Login";
import HomePage from "./pages/hompage/HomePage";
import OrderListPage from "./pages/order/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/orders" element={<OrderListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
