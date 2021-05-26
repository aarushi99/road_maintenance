import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";
import Dialogbox from "./Dialogbox";
import RedIcon from "../images/marker icons/redIcon.png";
import BlueIcon from "../images/marker icons/blueIcon.png";
import OrangeIcon from "../images/marker icons/orangeIcon.png";
import AllIcon from "../images/marker icons/all.png";

function Home(props) {
	console.log("token : ", props.token);
	const [map, setMap] = useState(
		<Map priorityFilter="" mId={props.mId} token={props.token}></Map>
	);
	return (
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-menu">
					<Dialogbox token={props.token}></Dialogbox>
					<div className="container-main-menu-legend">
						<div>
							<img
								onClick={() => {
									setMap(null);
									setMap(
										<Map
											priorityFilter="high"
											mId={props.mId}
											token={props.token}
										></Map>
									);
								}}
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={RedIcon}
							/>
							High
						</div>
						<div>
							<img
								onClick={() => {
									setMap(null);
									setMap(
										<Map
											priorityFilter="medium"
											mId={props.mId}
											token={props.token}
										></Map>
									);
								}}
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={OrangeIcon}
							/>
							Medium
						</div>
						<div>
							<img
								onClick={() => {
									setMap(null);
									setMap(
										<Map
											priorityFilter="low"
											mId={props.mId}
											token={props.token}
										></Map>
									);
								}}
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={BlueIcon}
							/>
							Low
						</div>
						<div>
							<img
								onClick={() => {
									setMap(null);
									setMap(
										<Map
											priorityFilter=""
											mId={props.mId}
											token={props.token}
										></Map>
									);
								}}
								className="bi me-2"
								style={{ width: "35px", height: "35px", cursor: "pointer" }}
								src={AllIcon}
							/>
							All
						</div>
					</div>
				</div>
				<div className="container-main-map-box">{map}</div>
			</div>
			<div className="container-main-map-list overflow-auto">
				<Listview mId={props.mId} token={props.token}></Listview>
			</div>
		</div>
	);
}

export default Home;
