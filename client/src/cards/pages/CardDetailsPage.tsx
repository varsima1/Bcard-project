import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeFirstLetterCapital } from "../../forms/utils/algoMethods";
import ControlledAccordions from "../../components/Accordion";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { value, handleGetCard } = useCards();
  const { card, error, isLoading } = value;

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !card) return <p>No card to display...</p>;

  if (!isLoading && card)
    return (
      <Container>
        <PageHeader
          title="Business Details"
          subtitle="Here you can see details of the business"
        />
        <div>
          <Grid container spacing={2} pb={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src={card.image.url}
                alt="key"
                className="responsive-image"
              />
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
                  mt={6}
                  textAlign={"center"}
                  fontSize={"7vw"}
                >
                  {makeFirstLetterCapital(card.title)}
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
                  {makeFirstLetterCapital(card.subtitle)}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <h2>Short Review</h2>
              <Typography variant="body1">
                {makeFirstLetterCapital(card.description)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: "auto" }}>
              <ControlledAccordions />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  return null;
};

export default CardDetailsPage;
