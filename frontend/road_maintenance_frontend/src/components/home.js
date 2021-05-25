import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";

function Home(props) {
  return (
    <div className="container">
      <div className="container-map">
        <div className="container-map-box">
          <Map mId={props.mId} token={props.token}></Map>
        </div>
        <div className="container-map-legend">
          <Listview mId={props.mId} token={props.token}></Listview>
        </div>
      </div>
    </div>
  );
}

export default Home;
