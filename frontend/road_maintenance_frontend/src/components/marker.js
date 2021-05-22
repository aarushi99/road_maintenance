import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./marker.css";

const Marker = (props) => {
	const { color, name, markerId } = props;
	console.log("key : ", markerId, " name : ", name);
	const history = useHistory();
	return (
		<div
			onClick={() => {
				console.log("clicking on marker");
				history.push(markerId);
			}}
			className="marker"
			style={{ backgroundColor: color, cursor: "pointer" }}
			title={name}
		/>
	);
};

export default Marker;
