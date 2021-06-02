import React, { useState, useEffect } from "react";
import Map from "./map";
import History from "./History";
import Dialogbox from "./Dialogbox";
import RedIcon from "../images/marker icons/redIcon.png";
import BlueIcon from "../images/marker icons/blueIcon.png";
import OrangeIcon from "../images/marker icons/orangeIcon.png";
import AllIcon from "../images/marker icons/all.png";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root1: {
		"& > *": {
			background: "#d93025",
			height: "47px",
			border: "2px solid #d93025",
			"&:hover": {
				background: "#fff",
				color: "#d93025",
				boxShadow: "none",
			},
		},
	},
	root2: {
		"& > *": {
			background: "#27ae60",
			height: "47px",
			marginRight: "10px",
			border: "2px solid #27ae60",

			"&:hover": {
				background: "#fff",
				color: "#27ae60",
				boxShadow: "none",
			},
		},
	},
}));

function MarkerDetail(props) {
	const params = props.match.params;
	const classes = useStyles();
	const history = useHistory();

	const handleDelete = () => {
		fetch("http://localhost:8080/markers/delete/" + params.mId, {
			method: "POST",
			headers: {
				Authorization: "Bearer " + props.token,
			},
		})
			.then((result) => {
				console.log(result.message);
				window.alert("Marker Deleted Successfully");
				history.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleComplete = () => {
		fetch("http://localhost:8080/markers/complete/" + params.mId, {
			method: "POST",
			headers: {
				Authorization: "Bearer " + props.token,
			},
		})
			.then((result) => {
				console.log(result.message);
				window.alert("Marked as completed!");
				history.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-menu">
					<Dialogbox userName={props.userName} token={props.token}></Dialogbox>
					<div className="container-main-menu-legend">
						<div>
							<img
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={RedIcon}
							/>
							High
						</div>
						<div>
							<img
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={OrangeIcon}
							/>
							Medium
						</div>
						<div>
							<img
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={BlueIcon}
							/>
							Low
						</div>
						<div>
							<img
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={AllIcon}
							/>
							All
						</div>
					</div>
					<div className={classes.root2}>
						<Button
							variant="contained"
							color="primary"
							onClick={handleComplete}
						>
							Mark as Completed
						</Button>
					</div>
					<div className={classes.root1}>
						<Button variant="contained" color="primary" onClick={handleDelete}>
							- Delete Marker
						</Button>
					</div>
				</div>
				<div className="container-main-map-box">
					<Map priorityFilter="" mId={params.mId} token={props.token}></Map>
				</div>
			</div>
			<div className="container-main-map-list overflow-auto">
				<div
					className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
					style={{
						"background-color": "#0d6efd",
						"border-top-right-radius": "5px",
						"border-top-left-radius": "5px",
					}}
				>
					<span className="fs-5 fw-semibold text-white">Markers History</span>
				</div>
				<History mId={params.mId} token={props.token}></History>
			</div>
		</div>
	);
}

export default MarkerDetail;
