import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import { LoginPage } from "./Auth/LoginPage";
import { ResetPasswordPage } from "./Auth/ResetPasswordPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
