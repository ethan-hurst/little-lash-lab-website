import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '600%',
    borderRadius: '50%',
    position: 'relative',
    left: '-70px',
    top: '-200px'
  }

export class MapContainer extends Component {
  render() {
    return (
        <Map
            google={this.props.google}
            style={style}
            initialCenter={{
            lat: -37.192430,
            lng: 174.925190
            }}
            zoom={15}
            onClick={this.onMapClicked}
        >
 
            <Marker onClick={this.onMarkerClick}
                name={'The Little Lash Lab'} />
 
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAMUvvvvVP8fyTSXZIt3lSn61mpr2u6Y7U")
})(MapContainer)