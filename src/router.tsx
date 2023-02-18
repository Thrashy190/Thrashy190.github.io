import React, { FC } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const PortFolio = React.lazy(() => import("./views/Portfolio"));
const Links = React.lazy(() => import("./views/Links"));

const Router: FC = () => {
  const location = useLocation();
  const routing = useRoutes([
    { path: "/", element: <PortFolio /> },
    { path: "links", element: <Links /> },
  ]);

  if (!routing) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(routing, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;
