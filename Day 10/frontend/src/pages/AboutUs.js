import React from 'react';
import { Container, Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container className="mt-4">
            <Card style={{ backgroundColor: 'lightblue'  }}>
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>An online coffee shop.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AboutUs;
