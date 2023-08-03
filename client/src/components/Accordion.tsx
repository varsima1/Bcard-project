import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useCards from "../cards/hooks/useCards";
import { useParams } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const { cardId } = useParams();
  const { value, handleGetCard } = useCards();
  const { card } = value;

  useEffect(() => {
    if (cardId) handleGetCard(cardId);
  }, []);

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            <LocalPhoneIcon sx={{ fontSize: "25px" }} color="primary" /> Call
            us:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{card?.phone}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0 }}>
            <MailIcon sx={{ fontSize: "25px" }} color="primary" /> Send email:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{card?.email}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <BusinessIcon sx={{ fontSize: "25px" }} color="primary" /> Visit us:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {`${card?.address.city}, ${card?.address.street} ${card?.address.houseNumber}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <ProductionQuantityLimitsIcon
              sx={{ fontSize: "25px" }}
              color="primary"
            />{" "}
            Product No:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{card?.bizNumber}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
