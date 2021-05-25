import React from "react";
import MarkerIcon from "../images/marker_icon.png";
import "./listItem.css";
import "bootstrap/dist/css/bootstrap.css";

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
		<div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none">
			<img className="bi me-2" style={{'width':'40px', 'height':'40px'}} src={MarkerIcon} />
			{timestampSelector()}
		</div>
	);
}

export default ListItem;
