import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView"

function Home() {
	return (
		<div className="container">
			<div className="container-map">
				<div className="container-map-box">
					<Map></Map>
				</div>
				<div className="container-map-legend"><Listview></Listview></div>
			</div>
		</div>
	);
}

export default Home;
