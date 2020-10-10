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
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Chip from "@material-ui/core/Chip";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ScheduleIcon from "@material-ui/icons/Schedule";
import styles from "./CourseC.module.css";
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 270,
		// maxWidth: "20vw",
		margin: "2%",
		borderRadius: "7%",
	},
	root1: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(9),
		height: theme.spacing(9),
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

export default function RecipeReviewCard({ toggleModal }) {
	const classes = useStyles();
	const [bookmark, setBookmark] = React.useState(false);

	const bookmarked = () => {
		setBookmark(!bookmark);
	};

	return (
		<Card
			className={classes.root}
			onClick={() => toggleModal(true)}
			style={{ cursor: "pointer" }}
		>
			<CardHeader
				action={
					<IconButton aria-label="settings" onClick={bookmarked}>
						{bookmark ? (
							<BookmarkIcon style={{ color: "#E0DFE4" }} />
						) : (
							<BookmarkBorderIcon style={{ color: "#E0DFE4" }} />
						)}
					</IconButton>
				}
				disableTypography={true}
				title="Course_name"
				style={{
					marginLeft: "5%",
					fontSize: "3vh",
					fontWeight: "bold",
					color: "#505050",
				}}
			/>
			<p
				style={{
					fontSize: "1.75vh",
					color: "#A7A4A3",
					marginLeft: "10%",
					marginTop: "-5%",
				}}
			>
				Last Active
			</p>

			<CardContent
				style={{
					marginLeft: "5%",
				}}
			>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun
					meal to cook together with your guests. Add 1 cup of frozen
					peas along with the mussels, if you like.
				</Typography>
			</CardContent>
			<CardActions disableSpacing style={{ marginLeft: "5%" }}>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				<Chip
					size="small"
					avatar={<MenuBookIcon />}
					label="Y videos left"
					style={{
						marginLeft: "30%",
					}}
				/>
			</CardActions>
		</Card>
	);
}
