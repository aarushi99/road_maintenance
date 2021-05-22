import React, { useState, useEffect, Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const metadata = {
  center: {
    lat: 30.7333,
    lng: 76.7794,
  },
  zoom: 15,
};

function MapBox() {
  const [markerList, setMarkerList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/markers")
      .then((result) => {
        //console.log("result : ", result);
        if (result.status !== 200) {
          throw new Error("Failed to fetch markers");
        }
        return result.json();
      })
      .then((resData) => {
        //console.log("resData.markers:", resData.markers);
        resData.markers.map((marker) => {
          setMarkerList((markerList) => [
            ...markerList,
            <Marker
              lat={marker.latitude}
              lng={marker.longitude}
              name={marker.address}
              color="blue"
            ></Marker>,
          ]);
        });
      })
      .catch((err1) => {
        console.log(err1);
      });
  }, []);

  //   useEffect(() => {
  //     console.log("here : ", markerList);
  //   }, [markerList]);

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
