import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

const PropsStringMenu = () => {
  return (
    <>
    <AppBar position="sticky" color="transparent">
        <Toolbar>
            <NavItem
            label="child-props-string"
            to={SANDBOX_ROUTES.CHILD_PROPS_STRING}
            color="black"
          />
          <NavItem
            label="father-props-string"
            to={SANDBOX_ROUTES.FATHER_PROPS_STRING}
            color="black"
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default PropsStringMenu