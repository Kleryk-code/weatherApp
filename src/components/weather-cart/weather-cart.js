import React from 'react';

class WeatherCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: 'Moscow', temperature: 17}
  }
    
    render() {
      return (
        <div>
          <div>
            <p>City: {this.state.city}, Temp: {this.state.temperature}</p>
          </div>

          <div>
            <button>Add favorite City</button>
          </div>
        </div>
      );
    }
  }

  export default WeatherCart;