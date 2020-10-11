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
import Card from "../Card/Card";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import Checkbox from "@material-ui/core/Checkbox";
const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		border: "none",
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
		border: "none",
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
		backgroundColor: "#F7F8FB",
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
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
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
			<div className={styles.div1}>
				<h3
					style={{
						marginTop: "25%",
						marginLeft: "5%", color: "#000"
					}}
				>
					Hello User!
				</h3>
				<div className={styles.container}>
					<div className={styles.circle}>
						<img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
					</div>
				</div>
			</div>
			<hr
				style={{
					marginTop: "20%",
					backgroundColor: "#F6F7F8",
					marginLeft: "5%",
					marginRight: "5%",
					border: 0,
					height: "2px",
					borderTop: "1px solid #F6F7F8",
				}}
			></hr>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: "5%",
					}}
				>
					<p style={{ color: "#C6C6C6", fontSize: "2vh" }}>
						🚘Total Roadmaps:
					</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "3vh",
							marginTop: "-5%",
						}}
					>
						123
					</p>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: "5%",
					}}
				>
					<p style={{ color: "#C6C6C6", fontSize: "2vh" }}>
						🏁Roadmaps Completed:
					</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "3vh",
							marginTop: "-5%",
						}}
					>
						123
					</p>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: "5%",
					}}
				>
					<p style={{ color: "#C6C6C6", fontSize: "2vh" }}>
						🌟Total stars:
					</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "3vh",
							marginTop: "-5%",
						}}
					>
						123
					</p>
				</div>
			</div>
			<hr
				style={{
					marginTop: "5%",
					backgroundColor: "#F6F7F8",
					marginLeft: "5%",
					marginRight: "5%",
					border: 0,
					height: "2px",
					borderTop: "1px solid #F6F7F8",
				}}
			></hr>
			<h3 style={{ marginLeft: "5%", color: "#000" }}>Keep Growing !!🐱‍🏍</h3>
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
				<a href="/course" style={{ textDecoration: "none" }}>
					<Card />
				</a>
				<a href="/course" style={{ textDecoration: "none" }}>
					<Card />
				</a>
				<a href="/course" style={{ textDecoration: "none" }}>
					<Card />
				</a>
				<a href="/course" style={{ textDecoration: "none" }}>
					<Card />
				</a>
				<a href="/course" style={{ textDecoration: "none" }}>
					<Card />
				</a>
				{/* <Modal
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
							<h1>Course_name:</h1>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<h2>Tasks:</h2>
								<div
									style={{
										width: "30vw",
										height: "10vh",
										backgroundColor: "#fff",
										boxShadow:
											"5px 5px 5px 0px rgba(0,0,0,0.09)",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
										borderRadius: "2%",
										alignItems: "center",
										marginTop: "2%",
									}}
								>
									<h3
										style={{
											color: "#7D8999",
											marginLeft: "5%",
										}}
									>
										https://youtu.be/snpV6awcBPo
									</h3>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										icon={<CircleUnchecked />}
										checkedIcon={
											<CheckCircleOutlineOutlinedIcon />
										}
										style={{
											marginLeft: "30%",
										}}
									/>
								</div>
								<div
									style={{
										width: "30vw",
										height: "10vh",
										backgroundColor: "#fff",
										boxShadow:
											"5px 5px 5px 0px rgba(0,0,0,0.09)",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
										borderRadius: "2%",
										alignItems: "center",
										marginTop: "2%",
									}}
								>
									<h3
										style={{
											color: "#7D8999",
											marginLeft: "5%",
										}}
									>
										https://youtu.be/snpV6awcBPo
									</h3>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										icon={<CircleUnchecked />}
										checkedIcon={
											<CheckCircleOutlineOutlinedIcon />
										}
										style={{
											marginLeft: "30%",
										}}
									/>
								</div>
								<div
									style={{
										width: "30vw",
										height: "10vh",
										backgroundColor: "#fff",
										boxShadow:
											"5px 5px 5px 0px rgba(0,0,0,0.09)",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
										borderRadius: "2%",
										alignItems: "center",
										marginTop: "2%",
									}}
								>
									<h3
										style={{
											color: "#7D8999",
											marginLeft: "5%",
										}}
									>
										https://youtu.be/snpV6awcBPo
									</h3>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										icon={<CircleUnchecked />}
										checkedIcon={
											<CheckCircleOutlineOutlinedIcon />
										}
										style={{
											marginLeft: "30%",
										}}
									/>
								</div>
								<div
									style={{
										width: "30vw",
										height: "10vh",
										backgroundColor: "#fff",
										boxShadow:
											"5px 5px 5px 0px rgba(0,0,0,0.09)",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
										borderRadius: "2%",
										alignItems: "center",
										marginTop: "2%",
									}}
								>
									<h3
										style={{
											color: "#7D8999",
											marginLeft: "5%",
										}}
									>
										https://youtu.be/snpV6awcBPo
									</h3>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										icon={<CircleUnchecked />}
										checkedIcon={
											<CheckCircleOutlineOutlinedIcon />
										}
										style={{
											marginLeft: "30%",
										}}
									/>
								</div>
								<div
									style={{
										width: "30vw",
										height: "10vh",
										backgroundColor: "#fff",
										boxShadow:
											"5px 5px 5px 0px rgba(0,0,0,0.09)",
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
										borderRadius: "2%",
										alignItems: "center",
										marginTop: "2%",
									}}
								>
									<h3
										style={{
											color: "#7D8999",
											marginLeft: "5%",
										}}
									>
										https://youtu.be/snpV6awcBPo
									</h3>
									<Checkbox
										checked={checked}
										onChange={handleChange}
										icon={<CircleUnchecked />}
										checkedIcon={
											<CheckCircleOutlineOutlinedIcon />
										}
										style={{
											marginLeft: "30%",
										}}
									/>
								</div>
							</div>
						</div>
					</Fade>
				</Modal> */}
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
