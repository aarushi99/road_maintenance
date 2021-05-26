import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";
import Dialogbox from "./Dialogbox";
import RedIcon from "../images/marker icons/redIcon.png";
import BlueIcon from "../images/marker icons/blueIcon.png";
import OrangeIcon from "../images/marker icons/orangeIcon.png";

function Home(props) {
	console.log("token : ", props.token);
	return (
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
					</div>
				</div>
				<div className="container-main-map-box">
					<Map mId={props.mId} token={props.token}></Map>
				</div>
			</div>
			<div className="container-main-map-list overflow-auto">
				<Listview mId={props.mId} token={props.token}></Listview>
			</div>
		</div>
	);
}

export default Home;
