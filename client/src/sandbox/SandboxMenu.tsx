import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../layout/components/NavItem";
import ROUTES, { SANDBOX_ROUTES } from "../routes/routesModel";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";

const SandboxMenu = () => {
  const { user } = useUser();

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <>
      <AppBar position="relative" color="transparent">
        <Toolbar>
          <NavItem
            label="component"
            to={SANDBOX_ROUTES.COMPONENT}
            color="black"
          />
          <NavItem label="events" to={SANDBOX_ROUTES.EVENTS} color="black" />
          <NavItem
            label="mui-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color="black"
          />
          <NavItem label="props" to={SANDBOX_ROUTES.PROPS_MENU} color="black" />
          <NavItem
            label="use-state"
            to={SANDBOX_ROUTES.USE_STATE_MENU}
            color="black"
          />
          <NavItem
            label="lyfe-cycle"
            to={SANDBOX_ROUTES.LYFE_CYCLE_MENU}
            color="black"
          />
          <NavItem
            label="customHook"
            to={SANDBOX_ROUTES.CUSTOM_MENU}
            color="black"
          />
          <NavItem
            label="context"
            to={SANDBOX_ROUTES.CONTEXT_MENU}
            color="black"
          />

          <NavItem label="forms" to={SANDBOX_ROUTES.FORM} color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxMenu;
