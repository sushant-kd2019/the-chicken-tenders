import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ResponsiveDrawer from "../PersonBar/PersonBar";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import AddComp from "../AddComp/AddComp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleIcon from "@material-ui/icons/People";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		border: "none",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		border: "none",
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		border: "none",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: "2%",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		maxWidth: "50vw",
		["@media  (max-width: 700px)"]: {
			maxWidth: "100vw",
		},
		maxHeight: "90vh",
		outline: "none",
		overflowY: "auto",
	},
	modal: {
		marginLeft: "20%",
		marginTop: "2%",
		["@media  (max-width: 700px)"]: {
			marginLeft: "2%",
			marginTop: "5%",
		},
	},
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const [courseOpen, setCourseOpen] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [isMobile, setMobile] = React.useState(window.innerWidth > 800);
	const [personBarOpen, SetPersonBar] = React.useState(false);

	const updateMedia = () => {
		setMobile(window.innerWidth > 800);
	};
	React.useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const profileBar = () => {
		SetPersonBar(true);
	};
	const handleCourseOpen = () => {
		setCourseOpen(true);
	};

	const handleCourseClose = () => {
		setCourseOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			{/* <AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						MultiMan
					</Typography>
				</Toolbar>
			</AppBar> */}
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
								<ChevronLeftIcon />
							)}
					</IconButton>
				</div>
				<List
					onMouseEnter={handleDrawerOpen}
					onMouseLeave={handleDrawerClose}
				>
					<Link
						href="/dashboard"
						style={{
							textDecoration: "none",
							cursor: "pointer",
						}}
					>
						<ListItem button key="Dashboard">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Dashboard" style={{ color: "#000" }} />
						</ListItem>
					</Link>
					<ListItem button key="Roadmap">
						<ListItemIcon>
							<AddIcon onClick={handleCourseOpen} />
						</ListItemIcon>
						<ListItemText primary="Add Roadmap" style={{ color: "#000" }} />
					</ListItem>
					<Link
						href="/users"
						style={{
							textDecoration: "none",
							cursor: "pointer",
						}}
					>
						<ListItem button key="Users">
							<ListItemIcon>
								<PeopleIcon />
							</ListItemIcon>
							<ListItemText primary="Users" style={{ color: "#000" }} />
						</ListItem>
					</Link>

					{isMobile ? (
						console.log("LOl")
					) : (
							<ListItem button key="Primary">
								<ListItemIcon>
									<Avatar
										onClick={profileBar}
										alt="Remy Sharp"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
										className={classes.small}
										style={{
											marginLeft: "-10%",
										}}
									/>

								</ListItemIcon>
								<ListItemText primary="Profile" style={{ color: "#000" }} />
							</ListItem>
						)}
					<ListItem button key="Logout">
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary="Logout" style={{ color: "#000" }} />
					</ListItem>
				</List>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={courseOpen}
					onClose={handleCourseClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={courseOpen}>
						<div className={classes.paper}>
							<AddComp />
						</div>
					</Fade>
				</Modal>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{/* Content Here */}
				<ResponsiveDrawer data={personBarOpen} />
			</main>
		</div>
	);
}
