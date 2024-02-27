import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-4">
            <Card bg='lightblue' text='violet'>
                <Card.Body>
                    <Card.Title>Welcome to LezzGo Coffee Shop</Card.Title>
                    <Card.Text>Enjoy our delightful coffee selections!</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;

