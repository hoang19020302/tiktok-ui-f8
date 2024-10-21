import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/hompage/HomePage";
import LoginPage from "./pages/login/Login";
import OrderPage from "./pages/order/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/orders" Component={OrderPage}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
