import React from "react";
import TextField from "@material-ui/core/TextField";
import "./AddComp.css";
import { Button } from "@material-ui/core";

const Inputs = (props) => {
	return props.course.map((val, idx) => {
		let courseId = `course-${idx}`,
			descriptionID = `desc-${idx}`,
			linkId = `age-${idx}`[4];
		return (
			<div
				key={idx}
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				<label
					htmlFor={courseId}
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						marginLeft: "-55%",
					}}
				>{`Course #${idx + 1}`}</label>
				<div className="add-container">
					<TextField
						id="outlined-basic"
						label="Course"
						variant="outlined"
						name={courseId}
						data-id={idx}
						id={courseId}
						value={props.course[idx].name}
						className="name"
						required
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
					<TextField
						id="outlined-multiline-static"
						label="Description"
						multiline
						rows={4}
						defaultValue="Default Value"
						variant="outlined"
						name={descriptionID}
						data-id={idx}
						id={descriptionID}
						value={props.course[idx].description}
						className="description"
						required
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
				</div>
				<label
					htmlFor={linkId}
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						marginLeft: "-55%",
					}}
				>
					Resources:
				</label>
				<div className="add-container">
					<TextField
						id="outlined-basic"
						label="Resource"
						variant="outlined"
						name={linkId}
						data-id={idx}
						id={linkId}
						value={props.course[idx].link[0]}
						className="link"
						required
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Resource"
						variant="outlined"
						name={linkId}
						data-id={idx}
						id={linkId}
						value={props.course[idx].link[1]}
						className="link"
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
				</div>
				<div className="add-container">
					<TextField
						id="outlined-basic"
						label="Resource"
						variant="outlined"
						name={linkId}
						data-id={idx}
						id={linkId}
						value={props.course[idx].link[2]}
						className="link"
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Resource"
						variant="outlined"
						name={linkId}
						data-id={idx}
						id={linkId}
						value={props.course[idx].link[3]}
						className="link"
						style={{
							marginLeft: "2%",
							marginTop: "2%",
						}}
					/>
				</div>
			</div>
		);
	});
};
class AddComp extends React.Component {
	state = {
		courses: [
			{
				name: "",
				description: "",
				link: [
					{
						[0]: "",
						[1]: "",
						[2]: "",
						[3]: "",
					},
				],
			},
		],
	};
	handleChange = (e) => {
		if (["name", "description", "link"].includes(e.target.className)) {
			let courses = [...this.state.courses];
			courses[e.target.dataset.id][
				e.target.className
			] = e.target.value.toUpperCase();
			this.setState({ courses }, () => console.log(this.state.courses));
		} else {
			this.setState({ [e.target.name]: e.target.value.toUpperCase() });
		}
	};
	addCat = (e) => {
		this.setState((prevState) => ({
			courses: [
				...prevState.courses,
				{
					name: "",
					description: "",
					link: [
						[
							{
								[0]: "",
								[1]: "",
								[2]: "",
								[3]: "",
								[4]: "",
							},
						],
					],
				},
			],
		}));
	};
	handleSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		let { courses } = this.state;
		return (
			<div>
				<h1 style={{ marginRight: "50%", whiteSpace: "nowrap", color: "#000" }}>
					Add a Roadmap
				</h1>
				<div className="add-app">
					<form
						onSubmit={this.handleSubmit}
						onChange={this.handleChange}
						className="form"
					>
						<div className="div1">
							<TextField
								variant="outlined"
								margin="normal"
								required
								id="name_project"
								label="Name of Roadmap"
								name="text"
								autoComplete="name"
								autoFocus
							/>

							<Button
								variant="contained"
								color="primary"
								style={{
									height: "4.5vh",
									textTransform: "none",
								}}
								onClick={this.addCat}
							>
								Add a course
							</Button>
						</div>
						<Inputs course={courses} />
						<Button
							variant="contained"
							color="primary"
							type="submit"
							value="Submit"
							style={{
								height: "4.5vh",
								textTransform: "none",
								marginTop: "2%",
							}}
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddComp;
