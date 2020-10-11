import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import Badge from "@material-ui/core/Badge";
import CallMergeIcon from "@material-ui/icons/CallMerge";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        className={classes.large}
                    />
                }
                title="Andrew Singh"
                subheader="Developer"
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    I am delighted to be in this platform. Fork and share knowledge as
                    much as you want.
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Badge badgeContent={4} color="error">
                    <FavoriteIcon />
                </Badge>

                <IconButton aria-label="open-new">
                    <a href="#">
                        <OpenInNewIcon />
                    </a>
                </IconButton>
                {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}

                <Badge badgeContent={20} color="error">
                    <CallMergeIcon />
                </Badge>
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <h2>Details:</h2>
          </Typography>
          <Typography paragraph>
            Contributions: <FilterVintageIcon />
            20
            <FilterVintageIcon />
          </Typography>
        </CardContent>
      </Collapse> */}
        </Card>
    );
}
