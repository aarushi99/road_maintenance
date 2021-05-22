import React from "react";
import MarkerIcon from "../images/marker_icon.png";
import "./listItem.css";

function ListItem(props) {
  const timestampSelector = () => {
    if (!props.timestamp) {
      return (
        <div className="list-item-info">
          Latitude : {props.latitude} , Longitude : {props.longitude} <br />
          Address : {props.address} <br />
          Priority : {props.priority}
        </div>
      );
    } else {
      return (
        <div className="list-item-info">
          Latitude : {props.latitude} , Longitude : {props.longitude} <br />
          Address : {props.address} <br />
          Priority : {props.priority}, Created At : {props.timestamp}
        </div>
      );
    }
  };
  return (
    <div className="list-item">
      <img src={MarkerIcon} />
      {timestampSelector()}
    </div>
  );
}

export default ListItem;
