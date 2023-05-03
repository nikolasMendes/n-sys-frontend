import { Routes, Route } from "react-router-dom";
import { AuthContextComponent } from "./context/authContext";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
