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
    width: '100px',
    height: '100px',
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
}));


export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const[buttonDescription, setbuttonDescription] = React.useState("More");
  
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
        <Card className={classes.componentBody}>
            <Box 
                display="flex"
                flexDirection="row"
                flexWrap="nowrap" 
                justifyContent="center"
                alignItems="center" 
                p={1} 
                m={1}
            >
                <Box>
                    <CardMedia
                        className={classes.transportIcon}
                        image={PlaneIcon}
                        title="Paella dish"
                    />
                </Box>
                <Box>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Distance travelled section.
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Carbon emission section.
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Trees planted section.
                        </Typography>
                    </CardContent>
                </Box>
                <Box>
                    <CardContent>
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
                        <Typography variant="body2" color="textSecondary" component="p">
                        {buttonDescription}
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
            <CardActions disableSpacing />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    The component has been <span>expanded.</span>
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </div>
  );
}