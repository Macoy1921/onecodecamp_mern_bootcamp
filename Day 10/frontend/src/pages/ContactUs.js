import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="mt-4">
            <Card style={{ backgroundColor: 'lightblue' }}>
                <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>Contact us at this number.</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ContactUs;


