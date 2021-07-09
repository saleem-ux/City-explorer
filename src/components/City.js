import React from 'react'
import { Card, Button, Tabs, Tab, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



class City extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }} className='city'>
          <Card.Body className='city-body' style={{justifyContent:'center'}}>
            <Card.Title>              
              {this.props.cityName}
            </Card.Title>
            <Card.Text>
            Latitude:{this.props.locationDatalat}
            </Card.Text>
            <Card.Text>
            Longitude:{this.props.locationDatalon}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    )
  }
}

export default City
