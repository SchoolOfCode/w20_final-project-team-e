import React from 'react';

// Library Components
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Icons
import KettleIcon from '../../images/kettle-icon.png';
import TvIcon from '../../images/tv-icon.png';
import WashingIcon from '../../images/washer-icon.png';
import HouseIcon from '../../images/house-icon.png';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',
    maxWidth: '1200px',
    border: 'solid #074445',
    borderRadius: '15px',
    margin: '50px auto 0 auto',
  },
  componentBody: {
    width: '100%',
  },
  transportIcon: {
    width: '125px',
    height: '125px',
  },
  comparisonIcon: {
    width: '75px',
    height: '75px',
    margin: '0 auto 0 auto'
  },
  primaryItem: {
    width: '25%',
  },
  secondaryItem: {
    width: '20%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:focus': { 
        outline: 'none' ,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  primaryData: {
    fontWeight: 'bold',
    fontSize: '4rem',
  },
  secondaryData: {
    fontWeight: 'bold',
    fontSize: '2.2rem',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '50px',
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonPositioning: {
    marginTop: '15px',
  },
  informationLink: {
    marginTop: '30px',
  }
}));


export default function ResultsCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [buttonDescription, setButtonDescription] = React.useState("More");
    const distance = props.distance;
    const carbon = props.carbon;
    const trees = props.trees;
    const icon = props.icon;
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
        if(expanded === true){
            setButtonDescription(("More"));
        } else {
            setButtonDescription(("Less"));
        }
    };

    const convertCarbonToKettles = (carbon) => {
        return Math.ceil(carbon / 0.015);
    };

    const convertCarbonToTv = (carbon) => {
        return Math.ceil(carbon / 0.0906);
    };

    const convertCarbonToWasher = (carbon) => {
        return Math.ceil(carbon / 0.2727);
    };

    const convertCarbonToPower = (carbon) => {
        return Math.ceil(carbon / 0.29372);
    };

    const doSomething = () => {
        alert(`Information about our calculations.`)
    };


  return (
    <div className={classes.root}>
        <Card>
            <Box 
            className={classes.componentBody}
            display="flex"
            flexDirection="row"
            flexWrap="nowrap" 
            justifyContent="center"
            alignItems="center"
            p={2}
            >
                <Box>
                    <CardMedia
                    className={classes.transportIcon}
                    image={icon}
                    />
                </Box>
                <Box className={classes.primaryItem}>
                    <CardContent>
                        <Typography>
                            <span className={classes.primaryData}>{distance}</span>KM
                        </Typography>
                        <Typography color='textSecondary'>
                            is the distance of this journey
                        </Typography>
                    </CardContent>
                </Box>
                <Box className={classes.primaryItem}>
                    <CardContent>
                        <Typography>
                            <span className={classes.primaryData}>{carbon}</span>KG
                        </Typography>
                        <Typography color='textSecondary'>
                            of Carbon Emissions could be produced
                        </Typography>
                    </CardContent>
                </Box>
                <Box className={classes.primaryItem}>
                    <CardContent>
                        <Typography>
                            <span className={classes.primaryData}>{trees}</span>TREE(s)
                        </Typography>
                        <Typography color='textSecondary'>
                            would be required to offset this amount of Carbon
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent className={classes.buttonPositioning}>
                        <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                        <Typography>
                            {buttonDescription}
                        </Typography>
                    </CardContent>
                </Box>
            </Box>

            {/* Below is the hidden/expandable part of the component */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography className={classes.subheading}>
                    <span className={classes.bold}>{carbon}kg of Carbon</span> is equivalent to:
                </Typography>
                <Box
                className={classes.componentBody}
                display="flex"
                flexDirection="row"
                flexWrap="nowrap" 
                justifyContent="center"
                alignItems="center"
                p={1} 
                m={1}
                >
                    <Box className={classes.secondaryItem}>
                        <CardContent>
                                <CardMedia
                                className={classes.comparisonIcon}
                                image={KettleIcon}
                                />
                                <Typography>
                                    <span className={classes.secondaryData}>{convertCarbonToKettles(carbon)}</span>
                                </Typography>
                                <Typography color='textSecondary'>
                                    Kettles Boiled
                                </Typography>
                        </CardContent>
                    </Box>
                    <Box className={classes.secondaryItem}>
                        <CardContent>
                                <CardMedia
                                className={classes.comparisonIcon}
                                image={TvIcon}
                                />
                                <Typography>
                                    <span className={classes.secondaryData}>{convertCarbonToTv(carbon)}</span>
                                </Typography>
                                <Typography color='textSecondary'>
                                    Hours of TV
                                </Typography>
                        </CardContent>
                    </Box>
                    <Box className={classes.secondaryItem}>
                        <CardContent>
                                <CardMedia
                                className={classes.comparisonIcon}
                                image={WashingIcon}
                                />
                                <Typography>
                                    <span className={classes.secondaryData}>{convertCarbonToWasher(carbon)}</span>
                                </Typography>
                                <Typography color='textSecondary'>
                                    Washing Loads
                                </Typography>
                        </CardContent>
                    </Box>
                    <Box className={classes.secondaryItem}>
                        <CardContent>
                                <CardMedia
                                className={classes.comparisonIcon}
                                image={HouseIcon}
                                />
                                <Typography>
                                    <span className={classes.secondaryData}>{convertCarbonToPower(carbon)}</span>
                                </Typography>
                                <Typography color='textSecondary'>
                                    Hours of Power
                                </Typography>
                        </CardContent>
                    </Box>
                </Box>
                <Typography className={classes.informationLink}>
                    <Link href='#' onClick={() => doSomething()}>
                        How did we calculate this information?
                    </Link>
                </Typography>
            </Collapse>
            <CardActions disableSpacing />
        </Card>
    </div>
  );
};