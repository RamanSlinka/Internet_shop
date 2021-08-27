import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'


const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Samsung 1200 Pro',
        price: 1200,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.komputronik.pl%2Fproduct%2F702215%2Frealme-7-pro-8-128gb-mirror-silver.html&psig=AOvVaw2VwlzoShNMBiRuEd8oB7IW&ust=1630100595929000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPid7NfGz_ICFQAAAAAdAAAAABAe`
    }

    const description = [
        {id:1, title:" fglkkdfsg ldffsdf", description: "500gb"},
        {id:2, title:" fglkkdfsg ldffsdf", description: "200gb"},
        {id:3, title:"121JJ ldffsdf", description: "300gb"},
        {id:4, title:" RTYUg ldffsdf", description: "400gb"},
        {id:5, title:"l.ioTTTfsdf", description: "1500gb"},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image src={device.img} width={300} height={300}/>
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{
                                 background: `url(${bigStar}) no-repeat center center`,
                                 width: 200, height: 200, backgroundSize: 'cover', fontSize: 64
                             }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: "5px solid gray"}}
                    >
                        <h3>Prise : {device.price}  $</h3>
                        <Button variant={"outline-dark"}> Add in basket</Button>
                    </Card>
                </Col> <Col md={4}>

            </Col>
            </Row>

            <Row className="d-flex flex-column mt-3">
                <h1>Description</h1>
                {description.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10 }}>
                    {info.title}: {info.description}
                </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;