import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import { useParams } from "react-router-dom";

const LeftNavBar = () => {
  const { user } = useUser();
  const { cardId } = useParams();

  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT} />

        {user && user.isBusiness && (
          <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        )}
        {user && (
          <NavItem label="Fav Cards" to={`${ROUTES.FAV_CARDS}/${cardId}`} />
        )}
        {user && user.isAdmin && (
          <NavItem label="Sandbox" to={ROUTES.SANDBOX} />
        )}
        {user && user.isAdmin && <NavItem label="crm" to={ROUTES.CRM} />}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
