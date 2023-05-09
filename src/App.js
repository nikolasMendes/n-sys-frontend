import { Routes, Route } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Orders } from "./pages/Orders";
import { Payments } from "./pages/Payments";
import { Balance } from "./pages/Balance";
import { CreateOrder } from "./pages/CreateOrder";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/home" element={<ProtectedRoutes component={Home} />} />
          <Route
            path="/orders"
            element={<ProtectedRoutes component={Orders} />}
          />
          <Route
            path="/payments"
            element={<ProtectedRoutes component={Payments} />}
          />
          <Route
            path="/balance"
            element={<ProtectedRoutes component={Balance} />}
          />
          <Route
            path="/createOrder"
            element={<ProtectedRoutes component={CreateOrder} />}
          />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
