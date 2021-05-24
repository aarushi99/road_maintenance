import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";

function Home(props) {
	const params = props.match.params;
	return (
		<div className="container">
			<div className="container-map">
				<div className="container-map-box">
					<Map mId=""></Map>
				</div>
				<div className="container-map-legend">
					<Listview mId=""></Listview>
				</div>
			</div>
		</div>
	);
}

export default Home;
