import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const CustomHookMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
            <NavItem
            label="custom name"
            to={SANDBOX_ROUTES.CUSTOM_NAME_EX2}
            color="black"
          /> 
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default CustomHookMenu