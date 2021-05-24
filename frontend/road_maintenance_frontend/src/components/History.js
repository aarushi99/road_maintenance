import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import "./History.css";

function History(props) {
  const [markerList, setMarkerList] = useState([]);
  const { mId } = props;
  console.log("mid history component :", mId);
  useEffect(() => {
    fetch("http://localhost:8080/history/".concat(mId))
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
            <ListItem
              latitude={marker.latitude}
              longitude={marker.longitude}
              address={marker.address}
              priority="low"
              timestamp={marker.createdAt}
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

export default History;
