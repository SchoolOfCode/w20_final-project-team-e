import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  referenceInfoBody: {
    margin: "40px auto 0 auto",
  },
}));

export default function ReferenceModal() {
  const classes = useStyles();

  return (
    <div className={classes.referenceInfoBody}>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.question}>
                How did we calculate the distance for each mode of transport?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                We've calculated the distance based on the route that each mode
                of transport will most likely take from the start and finish
                destinations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.question}>
                How did we calculate the Carbon emissions for each mode of
                transport?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                First, we calculate the distance for each mode of transport.
                Then, calculate the carbon based on: 1. Average number of
                passengers for each mode of transport. Cars are 1.6 people would
                you believe... 2. For bikes, the carbon emissions are calculated
                on the carbon necessary to fuel the cyclist to power the pedals.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.question}>
                What do the trees mean?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                Being carbon neutral is all about balance. We also calculate how
                many trees would need to be planted to offset the carbon
                emissions produced for a particular journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.question}>
                How were the electricity equivalencies calculated?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                We calculated the energy needed to power each appliance,
                converted that into kgs of carbon and then matched it to the
                carbon emissions of your journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
}
