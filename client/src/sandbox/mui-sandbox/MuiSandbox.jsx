import React from "react";
// import MuiButton from "./data-display/MuiButton";
// import MuiDivider from "./MuiDivider";
// import TypographyComponent from "./TypographyComponent";
// import MuiBox from "../mui-sandbox/layout/MuiBox";
// import MuiContainer from "./layout/MuiContainer";
// import MuiStack from "./layout/MuiStack";
// import MuiGrid from "./layout/MuiGrid";
// import MuiAppBar from "./navigations/MuiAppBar";
// import MuiBottomNavigation from "./navigations/MuiBottomNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../routes/routesModel";

const MuiSandbox = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          {/* <NavItem label="Typography" to="typography" sx={{ color: "black" }} />
          <NavItem label="Divider" to="divider" sx={{ color: "black" }} /> */}
          <NavItem label="data-display" to={SANDBOX_ROUTES.DATA_MENU} color='black' />
          <NavItem label="layout" to={SANDBOX_ROUTES.LAYOUT_MENU} color='black' />
          <NavItem label="navigations" to={SANDBOX_ROUTES.NAVIGATION_MENU} color='black' />
        </Toolbar>
      </AppBar>
      {/* <TypographyComponent /> */}
      {/* <MuiDivider /> */}
      {/* <MuiButton /> */}
      {/* <MuiBox /> */}
      {/* <MuiContainer /> */}
      {/* <MuiStack /> */}
      {/* <MuiGrid /> */}
      {/* <MuiAppBar /> */}
      {/* <MuiBottomNavigation />/ */}

      <Outlet />
    </>
  );
};

export default MuiSandbox;
