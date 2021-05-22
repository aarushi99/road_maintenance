import React from "react";
import MarkerIcon from "../images/marker_icon.png";
import "./listItem.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <img src={MarkerIcon} />
      <div className="list-item-info">
        Latitude : {props.latitude} , Longitude : {props.longitude} <br />
        Address : {props.address} <br />
        Priority : {props.priority}
      </div>
    </div>
  );
}

export default ListItem;
