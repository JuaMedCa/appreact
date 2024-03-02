import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import credential from "../credential";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapsKey}`;

class Maps extends Component {
    render() {
        const defaultCenter = { lat: 28.658816710507057, lng: -106.08614547922231 };

        const WrappedMap = withScriptjs(withGoogleMap((props) => (
            <GoogleMap
                defaultZoom={18}
                defaultCenter={defaultCenter}
                center={defaultCenter} 
            />
        )));

        return (
            
            <div style={{ height: "300px", width: "1000px", margin: "auto" }}>
                <WrappedMap
                    googleMapURL={mapURL}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        );
    }
}
export default Maps;
/*window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  }; */

  /* no le pongo lod emas por que mi compu no lo aguanto pero si quiere se lo enseño en clase esque si era un chorro*/


