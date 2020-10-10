import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./person.module.css";
import Card from "../CourseCard/CourseC";
import useKeypress from "../../hooks/useKeypress";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import InlineEdit from "../InlineEditable/InlineEditable";
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginLeft: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	// toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: "2%",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		minWidth: "70vw",
		minHeight: "90vh",
		outline: "none",
	},
}));

function ResponsiveDrawer(props, { data }) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [storedText, setStoredText] = useState(
		"Here's some more, edit away!"
	);
	const [storedHeading, setStoredHeading] = useState("Course_Name");
	console.log(storedText);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const drawer = (
		<div>
			{/* <div className={classes.toolbar} /> */}

			{/* <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Avatar" class={styles.avatar} /> */}

			<div className={styles.container}>
				<div className={styles.circle}>
					<img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
				</div>
			</div>
		</div>
	);
	const container =
		window !== undefined ? () => window().document.body : undefined;
	var k = 1;
	if (props.data == true && k == 1) {
		handleDrawerToggle();
		console.log(k);
		return;
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<nav aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "left" : "right"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
						anchor="right"
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={styles.main}>
				<Card toggleModal={handleOpen} />
				<Card toggleModal={handleOpen} />
				<Card toggleModal={handleOpen} />
				<Card toggleModal={handleOpen} />
				<Card toggleModal={handleOpen} />
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							<h2
								style={{
									border: "none",
									outline: "none",
									fontSize: "5vh",
								}}
							>
								<InlineEdit
									text={storedHeading}
									onSetText={(text) => setStoredHeading(text)}
								/>
							</h2>
							<InlineEdit
								text={storedText}
								onSetText={(text) => setStoredText(text)}
							/>
						</div>
					</Fade>
				</Modal>
			</main>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
