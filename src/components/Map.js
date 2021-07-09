import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export class Map extends Component {
    render() {
        return (
            <Container className='map'>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.locationDatalat},${this.props.locationDatalon}&zoom=13`} thumbnail />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Map
