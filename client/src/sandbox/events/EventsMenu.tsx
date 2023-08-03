import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const EventsMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <NavItem
            label="onclick-js"
            to={SANDBOX_ROUTES.ONCLICK_JS}
            color="black"
          />
          <NavItem label="onclick-ts" to={SANDBOX_ROUTES.ONCLICK_TS} color="black" />
          <NavItem label="raising-event-js" to={SANDBOX_ROUTES.RAISING_EVENTS_JS} color="black" />
          <NavItem label="raising-event-ts" to={SANDBOX_ROUTES.RAISING_EVENTS_TS} color="black" />
          <NavItem label="custom name" to={SANDBOX_ROUTES.CUSTOM_NAME} color="black" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
}

export default EventsMenu