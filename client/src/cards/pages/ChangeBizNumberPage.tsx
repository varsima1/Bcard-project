import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import FormDialogBizNumber from "./FormDialogBizNumber";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function ChangeBizNumberDialog() {
  const { user } = useUser();
  const { cardId } = useParams();
  const { value, handleGetCard } = useCards();
  const { card } = value;

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (!user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <div>
      <Container>
        <PageHeader
          title="Change business number"
          subtitle="Here you can change business numbers of cards"
        />

        <Grid container spacing={2} pb={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={card?.image.url} alt="key" className="responsive-image" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display="flex-box"
            alignItems={"center"}
            justify-content={"center"}
            alignContent={"center"}
            flexWrap={"wrap"}
          >
            <Box display={"block"}>
              <Typography
                variant="h2"
                color="darkgoldenrod"
                fontFamily={"fantasy"}
                mt={2}
                textAlign={"center"}
                fontSize={"7vw"}
              >
                {card?.title}
              </Typography>
            </Box>
            <Box display={"block"}>
              <Typography
                variant="h5"
                color="initial"
                fontFamily={"fantasy"}
                mb={1}
                textAlign={"center"}
                fontSize={"5vw"}
              >
                {card?.subtitle}
              </Typography>
            </Box>
            <Box display={"block"}>
              <Typography
                variant="h5"
                color="blue"
                fontFamily={"fantasy"}
                mb={1}
                textAlign={"center"}
                fontSize={"3vw"}
              >
                {card?.email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box display={"block"} margin={"auto"}>
          <FormDialogBizNumber />
        </Box>
      </Container>
    </div>
  );
}
