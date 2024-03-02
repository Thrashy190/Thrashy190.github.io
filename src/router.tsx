import React, { FC } from "react";
import { useRoutes, useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const PortFolio = React.lazy(() => import("./views/Portfolio"));
const Links = React.lazy(() => import("./views/Links"));

const Router: FC = () => {
  const location = useLocation();
  //   const routing = useRoutes([
  //     { path: "/", element: <Links /> },
  //     { path: "Home", element: <PortFolio /> },
  //   ]);

  //   if (!routing) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Links />} />
        <Route path="/home" element={<PortFolio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
