import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

const DataMenu= () => {
  return (
    <>
   <AppBar position="sticky" color="transparent">
        <Toolbar>
          
          <NavItem label="mui-button" to={SANDBOX_ROUTES.MUI_BUTTON} color='black' />
          <NavItem label="mui-divider" to={SANDBOX_ROUTES.MUI_DIVIDER} color='black' />
          <NavItem label="mui-typography" to={SANDBOX_ROUTES.MUI_TYPOGRAPHY} color='black' />
        </Toolbar>
      </AppBar>
     

      <Outlet />
    </>
  )
}

export default DataMenu
