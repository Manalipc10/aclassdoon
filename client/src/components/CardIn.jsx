import { React, useState } from 'react';
import { Card, Col, Carousel, Button, Modal, Container, Nav} from 'react-bootstrap';
import './CardIn.css'

const CardIn = ({ card }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ButtonMailto = ({ mailto, label }) => {
        return (<>
            <Nav.Link
                to='#'
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Nav.Link>
            </>
        );
    };

    return (
        <div>
            <Col lg={12}>
                <Card className="card-in">
                    {/* <Card.Img className="card-img" variant="top" src={`http://127.0.0.1:8000${card.thumbnail}`} /> */}
                    <Carousel fade nextLabel="" prevLabel="">
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.thumbnail}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img1}`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img2}`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="card-img"
                                src={`http://127.0.0.1:8000${card.img3}`}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Button onClick={handleShow} className="button-card"><Card.Header as="h5" className="card-h">{card.business_name}</Card.Header></Button>
                </Card>
            </Col>
            <br></br>

            <Modal
                size="lg"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header className="modal-h">
                    <Modal.Title id="contained-modal-title-vcenter">{card.business_name}</Modal.Title>
                </Modal.Header>
                <center>
                    <Carousel variant="dark" className="carousel-dark" fade nextLabel="Next" prevLabel="Previous">
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`http://127.0.0.1:8000${card.thumbnail}`}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`http://127.0.0.1:8000${card.img1}`}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`http://127.0.0.1:8000${card.img2}`}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="cardimg"
                                src={`http://127.0.0.1:8000${card.img3}`}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </center>
                <Container>
                <Modal.Body>
                    <h6>Category: {card.category}</h6>
                    <h6>{card.description}</h6>
                    <p>Services Offered: {card.services}</p><br></br>
                    <p className="text-muted footer-txt"><a href={`tel:${card.contact_no}`}>Contact Number: {card.contact_no}</a><ButtonMailto label={`Email: ${card.email}`} mailto={`mailto:${card.email}`} />{card.website ? card.website : ''}<br></br> {card.address ? `Address: ${card.address}` : ''}<br></br>{card.owner_name ? `--${card.owner_name}` : ''}<br></br></p>
                </Modal.Body>
                </Container>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
        </div>
    )
}

export default CardIn
