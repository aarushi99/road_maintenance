import "./listView.css";
import React, { useEffect, useState } from "react";
import Marker from "./marker";
import ListItem from "./listItem";

function ListView(props) {
	const { mId } = props;
	const [markerList, setMarkerList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/markers/".concat(mId))
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
	return <div>{markerList}</div>;
}

export default ListView;
