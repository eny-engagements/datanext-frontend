import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Auth from "./Auth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<Auth />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
