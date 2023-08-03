import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

const PropsObjectMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
            <NavItem
            label="child-props-object"
            to={SANDBOX_ROUTES.CHILD_PROPS_OBJECT}
            color="black"
          />
          <NavItem
            label="father-props-object"
            to={SANDBOX_ROUTES.FATHER_PROPS_OBJECT}
            color="black"
          />
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default PropsObjectMenu