import React from "react";
import MarkerIcon from "../images/marker_icon.png";
import "./listItem.css";
import "bootstrap/dist/css/bootstrap.css";
import RedIcon from "../images/marker icons/redIcon.png";
import BlueIcon from "../images/marker icons/blueIcon.png";
import OrangeIcon from "../images/marker icons/orangeIcon.png";
import GreenIcon from "../images/marker icons/green.png";

function ListItem(props) {
	const timestampSelector = () => {
		if (!props.timestamp) {
			return (
				<div className="list-item-info">
					Latitude : {props.latitude} , Longitude : {props.longitude} <br />
					Address : {props.address ? props.address : "Undefined"} <br />
					Priority : {props.priority ? props.priority : "Low"}
				</div>
			);
		} else {
			return (
				<div className="list-item-info">
					<div className="list-item-info-address">
						Latitude : {props.latitude} , Longitude : {props.longitude} <br />
						Address : {props.address ? props.address : "Undefined"}
					</div>
					<div className="list-item-info-priority">
						Priority : {props.priority ? props.priority : "Low"},
					</div>
					<div className="list-item-info-creator">
						Created At : {props.timestamp} <br />
						Creator : {props.creator ? props.creator : "Road Maintenance App"}
					</div>
				</div>
			);
		}
	};
	return (
		<div className="d-flex align-items-center flex-shrink-0 p-2 link-dark text-decoration-none">
			<img
				className="bi me-2"
				style={{ width: "40px", height: "40px" }}
				src={
					props.isComplete
						? GreenIcon
						: props.priority == "high"
						? RedIcon
						: props.priority == "medium"
						? OrangeIcon
						: BlueIcon
				}
			/>
			{timestampSelector()}
		</div>
	);
}

export default ListItem;
