import React, { useState, useEffect, Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const metadata = {
	center: {
		lat: 30.7333,
		lng: 76.7794,
	},
	zoom: 14,
};

function MapBox(props) {
	const mId = props.mId;
	const priorityFilter = props.priorityFilter;
	// const [priorityFilter, setPriorityFilter] = useState(props.priorityFilter);
	const [markerList, setMarkerList] = useState([]);

	useEffect(() => {
		setMarkerList([]);
		fetch("http://localhost:8080/markers/".concat(mId), {
			headers: {
				Authorization: "Bearer " + props.token,
			},
		})
			.then((result) => {
				if (result.status !== 200) {
					throw new Error("Failed to fetch markers");
				}
				return result.json();
			})
			.then((resData) => {
				resData.markers.map((marker) => {
					if (priorityFilter == "") {
						setMarkerList((markerList) => [
							...markerList,
							<Marker
								lat={marker.latitude}
								lng={marker.longitude}
								name={marker.address}
								color={
									marker.priority == "high"
										? "red"
										: marker.priority == "medium"
										? "orange"
										: "blue"
								}
								markerId={marker._id}
							></Marker>,
						]);
					} else {
						if (marker.priority == priorityFilter) {
							setMarkerList((markerList) => [
								...markerList,
								<Marker
									lat={marker.latitude}
									lng={marker.longitude}
									name={marker.address}
									color={
										marker.priority == "high"
											? "red"
											: marker.priority == "medium"
											? "orange"
											: "blue"
									}
									markerId={marker._id}
								></Marker>,
							]);
						}
					}
				});
			})
			.catch((err1) => {
				console.log(err1);
			});
	}, [priorityFilter]);

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
				defaultCenter={metadata.center}
				defaultZoom={metadata.zoom}
			>
				{markerList}
			</GoogleMapReact>
		</div>
	);
}

export default MapBox;
