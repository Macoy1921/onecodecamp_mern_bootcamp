import React from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="d-flex flex-column align-items-start">
            <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-start mt-1">
                <Navbar.Brand as={Link} to="/" className="mr-auto">LezzGo Coffee Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/order">Order</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Card className="mt-4" style={{ width: '18rem', backgroundColor: 'lightblue'  }}>
                <Card.Body>
                    <Card.Title>Welcome to LezzGo Coffee Shop</Card.Title>
                    <Card.Text>We offer a delightful coffee experience that will elevate your senses. LezzGo and enjoy our premium coffee selections.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Header;
