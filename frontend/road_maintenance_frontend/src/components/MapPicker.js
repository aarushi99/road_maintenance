import React, { useEffect, useState } from "react";

import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 30.7333, lng: 76.7794 };
const DefaultZoom = 15;

const App = (props) => {
	const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

	const [location, setLocation] = useState(defaultLocation);
	const [zoom, setZoom] = useState(DefaultZoom);

	function handleChangeLocation(lat, lng) {
		props.callback(lat, lng);
		setLocation({ lat: lat, lng: lng });
	}

	function handleChangeZoom(newZoom) {
		setZoom(newZoom);
	}

	function handleResetLocation() {
		setDefaultLocation({ ...DefaultLocation });
		setZoom(DefaultZoom);
	}

	// useEffect(() => {
	// 	props.callback(location.lat, location.lng);
	// }, [location]);

	return (
		<>
			<button onClick={handleResetLocation}>Reset Location</button>
			<label>Latitute:</label>
			<input type="text" value={location.lat} disabled />
			<label>Longitute:</label>
			<input type="text" value={location.lng} disabled />
			<label>Zoom:</label>
			<input type="text" value={zoom} disabled />

			<MapPicker
				defaultLocation={defaultLocation}
				zoom={zoom}
				style={{ height: "300px" }}
				onChangeLocation={handleChangeLocation}
				onChangeZoom={handleChangeZoom}
				apiKey="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
			/>
		</>
	);
};

export default App;
