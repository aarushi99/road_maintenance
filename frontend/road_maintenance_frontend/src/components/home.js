import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";
import Dialogbox from "./Dialogbox";

function Home(props) {
	console.log("token : ", props.token);
	return (
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-menu">
					<Dialogbox token={props.token}></Dialogbox>
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
