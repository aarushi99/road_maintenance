import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";

function Home(props) {
	console.log("token : ", props.token);
	return (
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-map-box">
					<Map mId={props.mId} token={props.token}></Map>
				</div>
				<div className="container-main-map-legend overflow-auto">
					<Listview mId={props.mId} token={props.token}></Listview>
				</div>
			</div>
		</div>
	);
}

export default Home;
