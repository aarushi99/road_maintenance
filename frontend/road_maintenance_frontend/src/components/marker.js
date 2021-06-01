import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MarkerIcon from "../images/marker_icon.png";
import RedIcon from "../images/marker icons/redIcon.png";
import BlueIcon from "../images/marker icons/blueIcon.png";
import OrangeIcon from "../images/marker icons/orangeIcon.png";
import GreenIcon from "../images/marker icons/green.png";
import "./marker.css";

const Marker = (props) => {
	const { color, name, markerId, isComplete } = props;
	// console.log("key : ", markerId, " name : ", name);
	const history = useHistory();
	return (
		// <div
		// 	onClick={() => {
		// 		console.log("clicking on marker");
		// 		history.push(markerId);
		// 	}}
		// 	className="marker"
		// 	style={{ backgroundColor: color, cursor: "pointer" }}
		// 	title={name}
		// />
		<img
			onClick={() => {
				console.log("clicking on marker");
				history.push(markerId);
			}}
			className="bi me-2 marker"
			style={{ width: "40px", height: "40px", cursor: "pointer" }}
			src={color == "red" ? RedIcon : color == "orange" ? OrangeIcon : BlueIcon}
			src={
				isComplete
					? GreenIcon
					: color == "red"
					? RedIcon
					: color == "orange"
					? OrangeIcon
					: BlueIcon
			}
		/>
	);
};

export default Marker;
