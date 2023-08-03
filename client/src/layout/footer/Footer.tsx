import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import PortraitIcon from "@mui/icons-material/Portrait";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const Footer = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { cardId } = useParams();
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            onClick={() => navigate(`${ROUTES.FAV_CARDS}/${cardId}`)}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
        )}
        {user && user.isBusiness && (
          <BottomNavigationAction
            onClick={() => navigate(ROUTES.MY_CARDS)}
            label="My Cards"
            icon={<PortraitIcon />}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
