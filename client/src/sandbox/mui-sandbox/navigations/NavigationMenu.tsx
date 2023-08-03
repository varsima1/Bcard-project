
import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

const NavigationMenu = () => {
  return (
    <>
     <AppBar position="sticky" color="transparent">
        <Toolbar>
          
          <NavItem label="mui-app-bar" to={SANDBOX_ROUTES.MUI_APP_BAR} color='black' />
          <NavItem label="mui-bottom-navigation" to={SANDBOX_ROUTES.MUI_BOTTOM_NAVIGATION} color='black' />
         
        </Toolbar>
      </AppBar>
     

      <Outlet />
    </>
  )
}

export default NavigationMenu