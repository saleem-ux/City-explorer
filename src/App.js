// import React from 'react';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button } from 'react-bootstrap'


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       LocationObject: {},
//       userCityInput: '',
//       showMap: false,
//       showError: false
//     }
//   }

//   getLocation = async (event) => {
//     event.preventDefault();
//     await this.setState({
//       userCityInput: event.target.city.value
//     })

//     console.log('user input', this.state.userCityInput)

//     let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCityInput}&format=json`;

//     try {
//       let getData = await axios.get(url);

//       console.log(getData)
//       console.log(getData.data)
//       console.log(getData.data[0])


//       this.setState({
//         LocationObject: getData.data[0],
//         showError: false,
//         showMap: true
//       })

//     } catch (err) {
//       this.setState({
//         showError: true,
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>City Explorer</h1>
//         {/* <form onSubmit={this.getLocation}>
//           <input type='text' placeholder='city name' name='city' />
//           <input type='submit' value='get City data' />
//         </form> */}
//         <Form onSubmit={this.getLocation}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>City Explorer</Form.Label>
//             <Form.Control type="text" placeholder="City Name" name='city' />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>

//         <p>City Name: {this.state.LocationObject.display_name},{this.state.LocationObject.lat},{this.state.LocationObject.lon}</p>

//         {this.state.showMap &&
//           <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.LocationObject.lat},${this.state.LocationObject.lon}&zoom=15`} />
//         }
//         {this.state.showError &&
//           <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}>Server Error</p>
//         }


//       </div>
//     )
//   }
// }

// export default App;


// --------------------------------------------------------------- ------------------------------------------lab07--------------------------------------------


import React from 'react'
import { Form, Button, Tabs, Tab, Table } from 'react-bootstrap'
import axios from 'axios';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      locationObject: {},
      userCityInput: '',
      showTab: false,
      showError: false,
      weatherData: {}
    }
  }

  submitLocation = async (event) => {
    event.preventDefault();
    await this.setState({
      userCityInput: event.target.city.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.userCityInput}&format=json`

    try {
      let resData = await axios.get(url);
      // console.log(resData.data);
      let weatherData = await axios.get(`${process.env.REACT_APP_API}weather?city=${this.state.userCityInput.toLocaleLowerCase()}`)

      this.setState({
        locationObject: resData.data[0],
        weatherData: weatherData.data,
        showTab: true,
        showError: false
      })
    } catch (err) {
      this.setState({
        showError: true,
        showTab: false,
      })
    }
  }

  render() {

    return (

      <div>

        <h1> City Explorer </h1>

        <Form onSubmit={this.submitLocation} value='get data'>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Explore Your City" name='city' style={{ textAlign: 'center' }} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore
          </Button>
        </Form>

        {this.state.showTab &&
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-4">
            <Tab eventKey="home" title="Location">
              <Table striped bordered hover classNme="mb-5" style={{ textAlign: 'center' , width:'50%', margin:'auto'}}>
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.locationObject.display_name}</td>
                    <td>{this.state.locationObject.lat}</td>
                    <td>{this.state.locationObject.lon}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="Weather" title="Weather">
              <Weather weatherData={this.state.weatherData} />
            </Tab>
            <Tab eventKey="profile" title="Map">
              <img
                alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationObject.lat},${this.state.locationObject.lon}&zoom=10`}
              />
            </Tab>
          </Tabs>
        }

        {this.state.showError &&
          <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}>Server Error 500</p>
        }

      </div>
    )
  }
}



export default App