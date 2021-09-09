import React from 'react';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaneIcon from '../../images/plane-icon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',
    maxWidth: '1200px',
    borderStyle: 'solid',
    margin: '50px auto 0 auto',
  },
  componentBody: {
    width: '100%',
  },
  transportIcon: {
    width: '125px',
    height: '125px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  primaryData: {
    fontWeight: 'bold',
    fontSize: '3.5rem',
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
      marginTop: '35px',
  },
}));


export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [buttonDescription, setbuttonDescription] = React.useState("More");
  
    const handleExpandClick = () => {
        setExpanded(!expanded);
        if(expanded === true){
            setbuttonDescription(("More"));
        } else{
            setbuttonDescription(("Less"));
        }
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
                    image={PlaneIcon}
                    />
                </Box>
                <Box>
                    <CardContent>
                        <Typography paragraph>
                            <span className={classes.primaryData}>10</span>KM
                        </Typography>
                        <Typography paragraph color='textSecondary'>
                            is the distance of this journey                        
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Typography paragraph>
                            <span className={classes.primaryData}>10</span>KG
                        </Typography>
                        <Typography paragraph color='textSecondary'>
                            of Carbon Emissions could be produced
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Typography paragraph>
                            <span className={classes.primaryData}>10</span>TREE(s)
                        </Typography>
                        <Typography paragraph color='textSecondary'>
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
                        <Typography paragraph>
                            {buttonDescription}
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography className={classes.subheading} paragraph>
                    <span className={classes.bold}>10kg of Carbon</span> is equivalent to:
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
                    <Box>
                        <CardContent>
                            <Typography paragraph>
                                <span className={classes.secondaryData}>10</span>
                            </Typography>
                            <Typography paragraph color='textSecondary'>
                                Kettles Boiled
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography paragraph>
                                <span className={classes.secondaryData}>10</span>
                            </Typography>
                            <Typography paragraph color='textSecondary'>
                                Hours of TV
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography paragraph>
                                <span className={classes.secondaryData}>10</span>
                            </Typography>
                            <Typography paragraph color='textSecondary'>
                                Washing Loads
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box>
                        <CardContent>
                            <Typography paragraph>
                                <span className={classes.secondaryData}>10</span>
                            </Typography>
                            <Typography paragraph color='textSecondary'>
                                Hours of Power
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
            </Collapse>
            <CardActions disableSpacing />
        </Card>
    </div>
  );
}