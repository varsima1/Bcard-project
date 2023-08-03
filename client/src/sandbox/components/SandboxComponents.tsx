import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Outlet } from "react-router-dom";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const SandboxComponents = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="babel" to={SANDBOX_ROUTES.BABEL} color="black" />
          <NavItem
            label="string-interpolation"
            to={SANDBOX_ROUTES.STRING_INTERPOLATION}
            color="black"
          />
          <NavItem label="loops" to={SANDBOX_ROUTES.LOOPS} color="black" />
          <NavItem label="conditional-rendering" to={SANDBOX_ROUTES.CONDITIONAL_RENDERING} color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxComponents;
