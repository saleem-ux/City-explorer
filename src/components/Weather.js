import React from 'react'
import { Table } from 'react-bootstrap'


class Weather extends React.Component {

    render() {
        return (

                <Table striped bordered hover className='mb-6' style={{ textAlign: 'center' , width:'50%', margin:'auto'}}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Weather Description</th>
                        </tr>
                    </thead>
                    {this.props.weatherData.map(data => {
                        return <tbody>
                            <tr>
                                <td>{data.date}</td>
                                <td>{data.description}</td>
                            </tr>
                        </tbody>
                    })}
                </Table>
                
        )
    }
}

export default Weather