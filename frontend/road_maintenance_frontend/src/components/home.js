import React from "react";
import Navbar from "./navbar";
import "./home.css";
import Map from "./map";
import Listview from "./listView";
import Dialogbox from "./Dialogbox";

function Home(props) {
  console.log("token : ", props.token);
  return (
    <div className="container-main">
      <div className="container-main-map">
        <div className="container-main-map-box">
          <Dialogbox token={props.token}></Dialogbox>
          <Map mId={props.mId} token={props.token}></Map>
        </div>
        <div className="container-main-map-legend overflow-auto">
          <Listview mId={props.mId} token={props.token}></Listview>
        </div>
      </div>
    </div>
  );
}

export default Home;
