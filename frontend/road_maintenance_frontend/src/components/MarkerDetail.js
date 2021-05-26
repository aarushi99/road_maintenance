import React, { useState, useEffect } from "react";
import Map from "./map";
import History from "./History";
import Dialogbox from "./Dialogbox";

function MarkerDetail(props) {
  const params = props.match.params;
  return (
		// <div className="container-main">
		//   <div className="container-main-map">
		//     <div className="container-main-map-box">
		//       <Map mId={params.mId} token={props.token}></Map>
		//     </div>
		//     <div className="container-main-map-legend">
		//       <h3>Marker History</h3>
		//       <History mId={params.mId} token={props.token}></History>
		//     </div>
		//   </div>
		// </div>
		<div className="container-main">
			<div className="container-main-map">
				<div className="container-main-menu">
					<Dialogbox token={props.token}></Dialogbox>
				</div>
				<div className="container-main-map-box">
					<Map mId={params.mId} token={props.token}></Map>
				</div>
			</div>
			<div className="container-main-map-list overflow-auto">
				<h3>Marker History</h3>
				<History mId={params.mId} token={props.token}></History>
			</div>
		</div>
	);
}

export default MarkerDetail;
