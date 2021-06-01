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
	root: {
		"& > *": {
			background: "#d93025",
			height: "47px",
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

	return (
		// <div className="container-main">
		//   <div className="container-main-map">
		//     <div className="container-main-map-box">
		//       <Map mId={params.mId} token={props.token}></Map>
		//     </div>
		//     <div className="container-main-map-legend">
		//       <h3>Marker History</h3>
		//       <History mId={params.mId} token={props.token}></History>
		//     </div>
		//   </div>
		// </div>
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-menu">
					<Dialogbox token={props.token}></Dialogbox>
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
					<div className={classes.root}>
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
