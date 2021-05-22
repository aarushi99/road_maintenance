import React, { useState, useEffect } from "react";
import Map from "./map";
import ListItem from "./listItem";

function MarkerDetail(props) {
	const params = props.match.params;
	const [markerList, setMarkerList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/markers/".concat(params.mId))
			.then((result) => {
				if (result.status !== 200) {
					throw new Error("Failed to fetch markers");
				}
				return result.json();
			})
			.then((resData) => {
				resData.markers.map((marker) => {
					setMarkerList((markerList) => [
						...markerList,
						<ListItem
							latitude={marker.latitude}
							longitude={marker.longitude}
							address={marker.address}
							priority={marker.priority}
						></ListItem>,
					]);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="container">
			<div className="container-map">
				<div className="container-map-box">
					<Map mId={params.mId}></Map>
				</div>
				<div className="container-map-legend">
					<h3>Marker History</h3>
					{markerList}
				</div>
			</div>
		</div>
	);
}

export default MarkerDetail;
