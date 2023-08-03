import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const LyfeCycleMenu = () => {
  return (
    <>
    <AppBar position="sticky" color="secondary">
        <Toolbar>
            <NavItem
            label="lyfe-cycle-ex2"
            to={SANDBOX_ROUTES.LYFECYCLE_EX2}
            color="black"
          />
         <NavItem label="lyfe-cycle-ex" to={SANDBOX_ROUTES.LYFECYCLE_EX} color="black" />
         
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default LyfeCycleMenu