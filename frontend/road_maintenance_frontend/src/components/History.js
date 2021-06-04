import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import "./History.css";

function History(props) {
	const [markerList, setMarkerList] = useState([]);
	
	useEffect(() => {
		fetch("http://localhost:8080/history/".concat(props.mId), {
			headers: {
				Authorization: "Bearer " + props.token,
			},
		})
			.then((result) => {
				if (result.status !== 200) {
					throw new Error("Failed to fetch history");
				}
				return result.json();
			})
			.then((resData) => {
				resData.marker_history.map((marker) => {
					setMarkerList((markerList) => [
						...markerList,
						<div className="list-group-item list-group-item-action py-1 lh-tight">
							<ListItem
								latitude={marker.latitude}
								longitude={marker.longitude}
								address={marker.address}
								priority={marker.priority}
								timestamp={marker.createdAt}
								creator={marker.creator}
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
		<div className="history-container d-flex flex-column align-items-stretch overflow-auto">
			<div class="list-group list-group-flush border-bottom scrollarea">
				{markerList}
			</div>
		</div>
	);
}

export default History;
