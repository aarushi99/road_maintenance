import React, { useState, useEffect, Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const metadata = {
	center: {
		lat: 30.7333,
		lng: 76.7794,
	},
	zoom: 15,
};

function MapBox() {
	const [markers, setMarkers] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		fetch("http://localhost:8080/markers")
			.then((result) => {
				// console.log(result);
				if (result.status !== 200) {
					throw new Error("Failed to fetch markers");
				}
				return result.json();
			})
			.then((resData) => {
				// console.log(resData.markers);
				setMarkers(resData.markers);
				setIsFetching(false);
			})
			.catch((err1) => {
				console.log(err1);
			});
	}, []);

	useEffect(() => {
		console.log("here : ", markers);
	}, [markers]);

	const markerList = markers.map((marker) => {
		console.log("This ain't working : ", marker);
		<Marker
			lat={30.7333}
			lng={6.7784}
			name={marker.address}
			color="blue"
		></Marker>;
	});

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
				defaultCenter={metadata.center}
				defaultZoom={metadata.zoom}
			>
				{markerList}
				<Marker
					lat={30.719816}
					lng={76.7841384}
					name="My Marker"
					color="blue"
				></Marker>
				<Marker
					lat={30.717816}
					lng={76.7831384}
					name="My Marker"
					color="blue"
				></Marker>
			</GoogleMapReact>
		</div>
	);
}

export default MapBox;

// class SimpleMap extends Component {
// 	constructor() {
// 		super();
// 		fetch("http://localhost:8080/markers")
// 			.then((result) => {
// 				// console.log(result);
// 				if (result.status !== 200) {
// 					throw new Error("Failed to fetch markers");
// 				}
// 				return result.json();
// 			})
// 			.then((resData) => {
// 				// console.log(resData.markers);
// 				this.state = resData.markers;
// 			})
// 			.catch((err1) => {
// 				console.log(err1);
// 			});
// 	}

// 	static defaultProps = {
// 		center: {
// 			lat: 30.7333,
// 			lng: 76.7794,
// 		},
// 		zoom: 15,
// 	};

// 	render() {
// 		return (
// 			// Important! Always set the container height explicitly
// 			<div style={{ height: "100%", width: "100%" }}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
// 					defaultCenter={this.props.center}
// 					defaultZoom={this.props.zoom}
// 				>
// 					{this.state.map((marker) => {
//             	<Marker
// 								lat={marker.latitude}
// 								lng={marker.longitude}
// 								name={marker.address}
// 								color="blue"
// 							></Marker>;
//           })}
// 					<Marker
// 						lat={30.719816}
// 						lng={76.7841384}
// 						name="My Marker"
// 						color="blue"
// 					></Marker>
// 				</GoogleMapReact>
// 			</div>
// 		);
// 	}
// }

// export default SimpleMap;
