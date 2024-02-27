import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const OrderForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const coffeeProducts = [
    { name: 'Espresso', price: 2.5 },
    { name: 'Latte', price: 3.0 },
    { name: 'Cappuccino', price: 3.5 },
  ];

  const addProduct = () => {
    const selectedCoffee = coffeeProducts[selectedProduct];
    if (selectedCoffee) {
      const newProduct = {
        name: selectedCoffee.name,
        price: selectedCoffee.price,
      };
      setProducts([...products, newProduct]);
    }
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <h2>Order Form</h2>
          <Form>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name:</Form.Label>
              <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="deliveryAddress">
              <Form.Label>Delivery Address:</Form.Label>
              <Form.Control type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number:</Form.Label>
              <Form.Control type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="selectedProduct">
              <Form.Label>Products:</Form.Label>
              <Form.Control as="select" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                <option value="" disabled>Select Product</option>
                {coffeeProducts.map((coffee, index) => (
                  <option key={index} value={index}>
                    {coffee.name} - ${coffee.price}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={addProduct}>Add Product</Button>
            <Button variant="success" className="ml-2" onClick={placeOrder}>Place Order</Button>
          </Form>

          {orderPlaced && (
            <div className="mt-3">
              <h3>Order Summary</h3>
              <p>Customer Name: {customerName}</p>
              <p>Delivery Address: {deliveryAddress}</p>
              <p>Contact Number: {contactNumber}</p>
              <ul>
                {products.map((product, index) => (
                  <li key={index}>
                    {product.name} - Price: ${product.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderForm;
