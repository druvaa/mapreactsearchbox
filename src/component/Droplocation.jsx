import React, { Component } from 'react';

// Import Search Bar Components
//import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Drop extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete2 = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete2'),
      options,
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
  //  this.autocomplete.setFields(['address_components', 'formatted_address']);

    // Fire Event when a suggested name is selected
    this.autocomplete2.addListener('place_changed', this.handlePlace2Select);
  }
  
  handlePlace2Select = () => {

    // Extract City From Address Object
    const addressObject2 = this.autocomplete2.getPlace();
    const address2 = addressObject2.address_components;
 console.warn(addressObject2.geometry.location.lat()+"hi");

    // Check if address is valid
    if (addressObject2.length>0) {
      // Set State
     console.warn(addressObject2.geometry.location.lat()+"hi");
      
      this.setState(
        {
          city: address2[0].long_name,
          query: addressObject2.formatted_address,
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIATTz7w5lKJYfjR5XssI2-AsPxwgqxQw&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <input type="text" id="autocomplete2" placeholder="" hintText="Search City" 
          style={{
            margin: '0 auto',
            width: 900,
          }}
        />
      </div>
    );
  }
}

export default Drop;