import React from 'react'
import { Card, Nav } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Cardx.css'

const Cardx = ({ card }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
            <Card>
                <center>
                    <Carousel responsive={responsive} className="car-1">
                        <div><img className="car-img" src={`http://127.0.0.1:8000${card.thumbnail}`} alt="slide" /></div>
                        <div><img className="car-img" src={`http://127.0.0.1:8000${card.img1}`} alt="slide" /></div>
                        <div><img className="car-img" src={`http://127.0.0.1:8000${card.img2}`} alt="slide" /></div>
                        <div><img className="car-img" src={`http://127.0.0.1:8000${card.img3}`} alt="slide" /></div>
                    </Carousel>
                    <Card.Header className="Card-h">
                        <Card.Title>{card.business_name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <h6>Category: {card.category}</h6>
                        <h6>{card.description}</h6>
                        <p>Services Offered: {card.services}</p><br></br>
                        <p className="text-muted footer-txt"><a href={`tel:${card.contact_no}`}>Contact Number: {card.contact_no}</a><ButtonMailto style={{display: card.email? '': 'none'}} label={`Email: ${card.email}`} mailto={`mailto:${card.email}`} />{card.website ? card.website : ''}<br></br> {card.address ? `Address: ${card.address}` : ''}<br></br>{card.owner_name ? `--${card.owner_name}` : ''}<br></br></p>
                    </Card.Body>
                </center>
            </Card>
            <br></br>
        </div>                
    )

}

export default Cardx
