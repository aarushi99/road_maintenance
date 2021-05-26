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
		setLocation(defaultLocation);
		setZoom(DefaultZoom);
	}

	return (
		<>
			<div>
				<button className="btn btn-primary" onClick={handleResetLocation}>
					Reset Location
				</button>
			</div>
			<div class="d-flex pt-3 pb-3">
				<div class="form-floating ">
					<input
						class="form-control"
						type="text"
						value={location.lat}
						disabled
					/>
					<label for="floatingInput">Latitude</label>
				</div>
				<div class="form-floating">
					<input
						class="form-control"
						type="text"
						value={location.lng}
						disabled
					/>
					<label for="floatingInput">Longitude</label>
				</div>
				<div class="form-floating">
					<input class="form-control" type="text" value={zoom} disabled />
					<label for="floatingInput">Zoom</label>
				</div>
			</div>

			<MapPicker
				defaultLocation={defaultLocation}
				zoom={zoom}
				style={{ height: "280px" }}
				onChangeLocation={handleChangeLocation}
				onChangeZoom={handleChangeZoom}
				apiKey="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
			/>
		</>
	);
};

export default App;
