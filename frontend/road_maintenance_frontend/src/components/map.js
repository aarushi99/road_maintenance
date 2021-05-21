import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.7333,
      lng: 76.7794,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={30.719816}
            lng={76.7841384}
            name="My Marker"
            color="blue"
          ></Marker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
