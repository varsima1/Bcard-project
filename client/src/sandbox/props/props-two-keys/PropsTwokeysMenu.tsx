import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";
import { Outlet } from "react-router-dom";

const PropsTwokeysMenu = () => {
  return (
    <>
    <AppBar position="sticky" color="transparent">
        <Toolbar>
           <NavItem
            label="child-props-two keys"
            to={SANDBOX_ROUTES.CHILD_PROPS_TWO_KEYS}
            color="black"
          />
          <NavItem
            label="father-props-two keys"
            to={SANDBOX_ROUTES.FATHER_PROPS_TWO_KEYS}
            color="black"
          />
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default PropsTwokeysMenu