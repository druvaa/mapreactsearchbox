import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbox from "./component/Searchbox";
import Droplocation from "./component/Droplocation";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function App() {
  return (
    <div className="App">
   
  <Searchbox/>
  <Droplocation/>

    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDIATTz7w5lKJYfjR5XssI2-AsPxwgqxQw'
})(App);