import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "../layout/MainLayout";

const Main = lazy(() => import("../pages/Main"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
