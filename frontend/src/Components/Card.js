import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
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
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import StarIcon from "@material-ui/icons/Star";
import CallMergeIcon from "@material-ui/icons/CallMerge";
import Chip from "@material-ui/core/Chip";
import ScheduleIcon from "@material-ui/icons/Schedule";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 0,
        borderRadius: 5,
        paddingTop: "2%",
    },
    colorPrimary: {
        backgroundColor: "#DFDFDF",
    },
    bar: {
        borderRadius: 5,
        backgroundColor: (props) => props.color,
        padding: "2%",
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 315,
        borderRadius: "7%",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
    progress: {
        width: "100%",
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    const normalise = (value) => value / 10;
    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon style={{ color: "#E0DFE4" }} />
                    </IconButton>
                }
                disableTypography={true}
                title="React"
                style={{
                    marginLeft: "30%",
                    fontSize: "3vh",
                    fontWeight: "bold",
                }}
            />
            <p
                style={{
                    fontSize: "2vh",
                    color: "#A7A4A3",
                    marginLeft: "25%",
                    marginTop: "-5%",
                }}
            >
                Creator name aayega
			</p>
            <div
                style={{
                    marginTop: "10%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <p
                    style={{
                        fontWeight: "bold",
                        color: "#000",
                        marginLeft: "5%",
                    }}
                >
                    Progress
				</p>
                <p
                    style={{
                        fontWeight: "bold",
                        color: "#000",
                        marginRight: "5%",
                    }}
                >
                    45%
				</p>
            </div>
            <BorderLinearProgress
                variant="determinate"
                value={normalise(500)}
                color="#03E565"
                style={{
                    backgroundColor: "#DFDFDF",
                    marginLeft: "5%",
                    marginRight: "5%",
                }}
            />
            {/* <CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun
					meal to cook together with your guests. Add 1 cup of frozen
					peas along with the mussels, if you like.
				</Typography>
			</CardContent> */}
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <StarIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <CallMergeIcon />
                </IconButton>
                <Chip
                    size="small"
                    avatar={<ScheduleIcon />}
                    label="X courses left"
                    style={{
                        marginLeft: "25%",
                    }}
                />
            </CardActions>
        </Card>
    );
}
