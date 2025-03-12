// ProductCard
// Product component
// Dru Delarosa | @dntstck

import React, { useState } from "react";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";
import "./ProductCard.css";

function ProductCard({ name, desc, price, logo, colors, onBuy }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} className="product-logo" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="product-text">{desc}</Card.Text>
          <Card.Footer>
            Price: £{price} <br />
            <Button className="buy-button" onClick={() => onBuy(price)}>
              Add to Cart
            </Button>
            <DropdownButton
              id="dropdown-item-button" size="lg"
              title={selectedColor || "Select Color"}
              onSelect={handleSelect} className="buy-button"
            >
              {colors.map((color, index) => (
                <Dropdown.Item eventKey={color} key={index} className="buy-button">
                  {color}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
