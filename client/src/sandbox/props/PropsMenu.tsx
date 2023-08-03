import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";



const PropsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
            <NavItem
            label="props-ts"
            to={SANDBOX_ROUTES.PROPS_TS}
            color="black"
          />
          <NavItem
            label="props-object menu"
            to={SANDBOX_ROUTES.PROPS_OBJECT_MENU}
            color="black"
          />
           <NavItem
            label="props-string menu"
            to={SANDBOX_ROUTES.PROPS_STRING_MENU}
            color="black"
          />
          <NavItem
            label="props-two keys menu"
            to={SANDBOX_ROUTES.PROPS_TWO_KEYS_MENU}
            color="black"
          />
         
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default PropsMenu