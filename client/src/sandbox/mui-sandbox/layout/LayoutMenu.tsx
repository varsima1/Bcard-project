import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../../layout/components/NavItem";
import { Outlet } from "react-router-dom";
import { SANDBOX_ROUTES } from "../../../routes/routesModel";

const LayoutMenu = () => {
  return (
    <>
     <AppBar position="sticky" color="transparent">
        <Toolbar>
          
          <NavItem label="mui-box" to={SANDBOX_ROUTES.MUI_BOX} color='black' />
          <NavItem label="mui-container" to={SANDBOX_ROUTES.MUI_CONTAINER} color='black' />
          <NavItem label="mui-grid" to={SANDBOX_ROUTES.MUI_GRID} color='black' />
          <NavItem label="mui-stack" to={SANDBOX_ROUTES.MUI_STACK} color='black' />
        </Toolbar>
      </AppBar>
     

      <Outlet />
    </>
  )
}

export default LayoutMenu