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

// ============================================================================================================
// =============================================================lab08==========================================
// ============================================================================================================

// import React from 'react'
// import { Form, Button, Tabs, Tab,} from 'react-bootstrap'
// import axios from 'axios';
// import Weather from './components/Weather';
// import Movie from './components/Movie';
// import Map from './components/Map';
// import City from './components/City';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './components/City.css';
// import './components/Weather.css';
// import './components/Map.css';
// import './components/Movie.css';


// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       locationData: {},
//       targetData: '',
//       showTab: false,
//       showError: false,
//       weatherData: {},
//       movieData: {}
//     }
//   }

//   submitLocation = async (e) => {
//     e.preventDefault();
//     try {
//       await this.setState({
//         targetData: e.target.cityName.value
//       })

//       let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.targetData}&format=json`

//       let resData = await axios.get(url);
//       // console.log(resData.data);
//       let weatherData = await axios.get(`https://explorer-city-city.herokuapp.com/getWeather?cityName=${this.state.targetData.toLocaleLowerCase()}`)
//       let movieData = await axios.get(`https://explorer-city-city.herokuapp.com/getMovies?movieName=${this.state.targetData.toLocaleLowerCase()}`)

//       this.setState({
//         locationData: resData.data[0],
//         weatherData: weatherData.data,
//         movieData: movieData.data,
//         showTab: true,
//         showError: false
//       })
//     } catch (err) {
//       this.setState({
//         showError: true,
//         showTab: false
//       })
//     }
//   }

//   render() {

//     return (

//       <>

//         <h1> City Explorer </h1>
//         <Form onSubmit={this.submitLocation} value='get data'>
//           <Form.Group className="mb-3" >
//             <Form.Control type="text" placeholder="Explore Your City" name='cityName' style={{ textAlign: 'center' }} />
//           </Form.Group>
//           <Button variant="primary" type="submit" >
//             Explore
//           </Button>
//         </Form>

//         {this.state.showTab &&
//           <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">

//             <Tab eventKey="home" title="Location">
//               <City cityName={this.state.locationData.display_name} locationDatalat= {this.state.locationData.lat} locationDatalon={this.state.locationData.lon}/>
//             </Tab>

//             <Tab eventKey="Weather" title="Weather">
//               <Weather weatherData={this.state.weatherData} />
//             </Tab>

//             <Tab eventKey="profile" title="Map">
//               <Map locationDatalat= {this.state.locationData.lat} locationDatalon={this.state.locationData.lon}/>
//             </Tab>

//             <Tab eventKey="Movie" title="Movie">
//               <Movie movieData={this.state.movieData} />
//             </Tab>
            
//           </Tabs>}

//         {this.state.showError &&
//           <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}>Internal Server Error 500 <br /> Enter a Valid City Name</p>
//         }

//       </>
//     )
//   }
// }

// export default App


// ============================================================================================================
// =============================================================lab10==========================================
// ============================================================================================================

import React from 'react'
import { Form, Button, Tabs, Tab,} from 'react-bootstrap'
import axios from 'axios';
import Weather from './components/Weather';
import Movie from './components/Movie';
import Map from './components/Map';
import City from './components/City';
import Restaurants from './components/Restaurants';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/City.css';
import './components/Weather.css';
import './components/Map.css';
import './components/Movie.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      locationData: {},
      targetData: '',
      showTab: false,
      showError: false,
      weatherData: {},
      movieData: {},
      restaurantsData: {}
    }
  }

  submitLocation = async (e) => {
    e.preventDefault();
    try {
      await this.setState({
        targetData: e.target.cityName.value
      })

      let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.targetData}&format=json`

      let resData = await axios.get(url);
      // console.log(resData.data);
      let weatherData = await axios.get(`https://explorer-city-city.herokuapp.com/getWeather?cityName=${this.state.targetData.toLocaleLowerCase()}`)
      let movieData = await axios.get(`https://explorer-city-city.herokuapp.com/getMovies?movieName=${this.state.targetData.toLocaleLowerCase()}`)
      let restaurantsData = await axios.get(`https://explorer-city-city.herokuapp.com/restaurants?restaurantsName=${this.state.targetData.toLocaleLowerCase()}`)
      this.setState({
        restaurantsData:restaurantsData.data,
      })

      this.setState({
        locationData: resData.data[0],
        weatherData: weatherData.data,
        movieData: movieData.data,
        showTab: true,
        showError: false
      })
    } catch (err) {
      this.setState({
        showError: true,
        showTab: false
      })
    }
  }

  render() {

    return (

      <>

        <h1> City Explorer </h1>
        <Form onSubmit={this.submitLocation} value='get data'>
          <Form.Group className="mb-3" >
            <Form.Control type="text" placeholder="Explore Your City" name='cityName' style={{ textAlign: 'center' }} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore
          </Button>
        </Form>

        {this.state.showTab &&
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">

            <Tab eventKey="home" title="Location">
              <City cityName={this.state.locationData.display_name} locationDatalat= {this.state.locationData.lat} locationDatalon={this.state.locationData.lon}/>
            </Tab>

            <Tab eventKey="Weather" title="Weather">
              <Weather weatherData={this.state.weatherData} />
            </Tab>

            <Tab eventKey="profile" title="Map">
              <Map locationDatalat= {this.state.locationData.lat} locationDatalon={this.state.locationData.lon}/>
            </Tab>

            <Tab eventKey="Movie" title="Movie">
              <Movie movieData={this.state.movieData} />
            </Tab>

            <Tab eventKey="Restaurant" title="Restaurant">
              <Restaurants restaurantsData={this.state.restaurantsData}/>
            </Tab>
            
          </Tabs>}

        {this.state.showError &&
          <p style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px' }}>Internal Server Error 500 <br /> Enter a Valid City Name</p>
        }

      </>
    )
  }
}

export default App
