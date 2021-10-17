import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CardIn';
import Pagination from './Pagination'
import { Container, Row, Nav, NavDropdown } from 'react-bootstrap';
import './Cards.css'

const Cards = () => {

    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        const result = await axios.get("http://127.0.0.1:8000/api/ad/");
        setCards(result.data);
    }
    console.log(cards)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const uniqueArr = [... new Set(cards.map(data => data.category))]

    return (
        <div>
            <div className='card-start'>
                <Container>
                    <Nav>
                        <NavDropdown title="Filter by Category" id="basic-nav-dropdown">
                            {uniqueArr.map((item =>
                                <NavDropdown.Item>{item}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Row lg={3}>
                        {currentCards.map((item) =>
                            <Card key={item.id} card={item} />
                        )}
                    </Row>
                </Container>
                <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} />
            </div>
        </div>
    )
}

export default Cards
