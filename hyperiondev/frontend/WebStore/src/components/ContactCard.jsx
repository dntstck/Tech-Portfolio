import React from "react";
import "./ContactCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import ContactLogo from "/reJava3.png";
import ShopInside from "/rejava-inside.jpeg";
import ShopOutside from "/rejava-outside.jpeg";

function ContactCard() {
  return (
    <>
      <div className="contact-card">
        <Card style={{ width: "18rem" }}>
          {/*<Card.Img variant="top" src={teaKettle} className="product-logo" />*/}
          <Card.Body>
            <Figure>
              <Figure.Image
                width={101}
                height={100}
                alt="171x180"
                src={ContactLogo}
              />
              <Figure.Caption className="main-text">reJava</Figure.Caption>
              <p className="main-text">
                reJava strives to produce and deliver the highest quality
                possible coffee for our clients. Our family run store is located
                in Cambridge, England.
              </p>
              <Figure.Image
                width={180}
                height={180}
                alt="171x180"
                src={ShopOutside}
              />
              <Figure.Caption className="main-text">reJava Storefront</Figure.Caption>
              <p className="main-text">
                We can be contacted directly at coffee@reJava.com Please do not
                hesitate to discuss your queries, orders or complaints
              </p>
              <Figure.Image
                width={180}
                height={180}
                alt="171x180"
                src={ShopInside}
              />
              <Figure.Caption className="main-text">Our beautiful interior</Figure.Caption>
            </Figure>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ContactCard;
