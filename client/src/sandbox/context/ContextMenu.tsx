import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";


const ContextMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
            <NavItem
            label="snack exapmle"
            to={SANDBOX_ROUTES.SNACK_EXAMPLE}
            color="black"
          /> 
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default ContextMenu