import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      LocationObject: {},
      userCityInput: '',
      showMap: false
    }
  }

  getLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      userCityInput: event.target.city.value
    })

    console.log('user input', this.state.userCityInput)

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCityInput}&format=json`;

    let getData = await axios.get(url);

    console.log(getData)
    console.log(getData.data)
    console.log(getData.data[0])

    this.setState({
      LocationObject: getData.data[0],
      showMap: true
    })

  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city' />
          <input type='submit' value='get City data' />
        </form>

        <p>City Name: {this.state.LocationObject.display_name},{this.state.LocationObject.lat},{this.state.LocationObject.lon}</p>

        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.LocationObject.lat},${this.state.LocationObject.lon}&zoom=15`} />
        }

      </div>
    )
  }
}

export default App;