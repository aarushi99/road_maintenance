import React, { useState, useEffect } from "react";
import Map from "./map";
import History from "./History";

function MarkerDetail(props) {
  const params = props.match.params;
  return (
    <div className="container">
      <div className="container-map">
        <div className="container-map-box">
          <Map mId={params.mId} token={props.token}></Map>
        </div>
        <div className="container-map-legend">
          <h3>Marker History</h3>
          <History mId={params.mId} token={props.token}></History>
        </div>
      </div>
    </div>
  );
}

export default MarkerDetail;
