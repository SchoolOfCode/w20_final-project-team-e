import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const[buttonDescription, setbuttonDescription] = React.useState("See more");
  
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
            <div>
                <CardMedia
                    className={classes.transportIcon}
                    image={PlaneIcon}
                    title="Paella dish"
                />
            </div>
            <div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    This is a really fun, easy component to work with.
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.column}>
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
            </div>
            <CardActions disableSpacing />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    Just kidding. I hate it.
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
    </div>
  );
}