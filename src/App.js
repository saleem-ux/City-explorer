import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      LocationObject: {},
      userCityInput: '',
      showMap: false,
      showError: false
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    await this.setState({
      userCityInput: event.target.city.value
    })
    
    console.log('user input', this.state.userCityInput)
    
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCityInput}&format=json`;
    
    try {
      let getData = await axios.get(url);

      console.log(getData)
      console.log(getData.data)
      console.log(getData.data[0])


      this.setState({
        LocationObject: getData.data[0],
        showError: false,
        showMap: true
      })

    } catch (err) {
      this.setState({
        showError: true,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        {/* <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city' />
          <input type='submit' value='get City data' />
        </form> */}
        <Form onSubmit={this.getLocation}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Explorer</Form.Label>
            <Form.Control type="text" placeholder="City Name" name='city' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p>City Name: {this.state.LocationObject.display_name},{this.state.LocationObject.lat},{this.state.LocationObject.lon}</p>

        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.LocationObject.lat},${this.state.LocationObject.lon}&zoom=15`} />
        }
        {this.state.showError &&
          <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}>Server Error</p>
        }


      </div>
    )
  }
}

export default App;