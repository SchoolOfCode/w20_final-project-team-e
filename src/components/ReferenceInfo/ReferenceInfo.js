import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    referenceInfoBody: {
        margin: '40px auto 0 auto',
    }
}));


export default function ReferenceModal(){
    
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
                            <Typography color='textSecondary'>
                                We've calculated the distance based on the journey that each mode of transport will most likely take from the start and finish destinations.
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
                                How did we calculate the Carbon emissions for each mode of transport?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color='textSecondary'>
                                Emission data being shown is per person, based on the average number of passengers for the respective mode of transport.
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
                                What does the number of trees represent and how was this calculated?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color='textSecondary'>
                                This is how many trees would need to be planted to offset the carbon emissions produced for that journey. 
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
                            <Typography color='textSecondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>     
        </div>
    )
}