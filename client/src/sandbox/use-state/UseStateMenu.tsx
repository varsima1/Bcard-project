import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";


const UseStateMenu = () => {
  return (
    <>
     <AppBar position="sticky" color="secondary">
        <Toolbar>
           <NavItem
            label="set-posts"
            to={SANDBOX_ROUTES.SET_POSTS}
            color="black"
          />
           <NavItem
            label="use-state with array of objects"
            to={SANDBOX_ROUTES.USE_STATE_ARRAY_OBJECTS}
            color="black"
          />
          <NavItem
            label="use-state with complex objects"
            to={SANDBOX_ROUTES.USE_STATE_COMPLEX_OBJECTS}
            color="black"
          />
          <NavItem
            label="use-state with functions"
            to={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTIONS}
            color="black"
          />
          <NavItem
            label="use-state with objects"
            to={SANDBOX_ROUTES.USE_STATE_WITH_OBJECTS}
            color="black"
          />
         
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default UseStateMenu