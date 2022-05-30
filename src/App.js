import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import EmailConfirmation from "./pages/EmailConfirmation";
import Password from "./pages/password";
import Dashbord from "./pages/dashbaord";
import RequiredAuth from "./context/requiredAauth";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/confirmation" element={<EmailConfirmation />} />
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashbord />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
