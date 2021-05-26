import "./listView.css";
import React, { useEffect, useState } from "react";
import Marker from "./marker";
import ListItem from "./listItem";
import "bootstrap/dist/css/bootstrap.css";


function ListView(props) {
	const { mId } = props;
	const [markerList, setMarkerList] = useState([]);

	useEffect(() => {
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
					setMarkerList((markerList) => [
						...markerList,
						<div className="list-group-item list-group-item-action py-1 lh-tight">
							<ListItem
								latitude={marker.latitude}
								longitude={marker.longitude}
								address={marker.address}
								priority={marker.priority}
							></ListItem>
						</div>,
					]);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="d-flex flex-column align-items-stretch flex-shrink-0">
			<div
				className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
				style={{
					"background-color": "#0d6efd",
					"border-top-right-radius": "5px",
					"border-top-left-radius": "5px",
				}}
			>
				<span className="fs-5 fw-semibold text-white">Markers List</span>
			</div>
			<div class="list-group list-group-flush border-bottom scrollarea">
				{markerList}
			</div>
		</div>
	);
}

export default ListView;
