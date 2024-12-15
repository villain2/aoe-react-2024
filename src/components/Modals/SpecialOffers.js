import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import './SpecialOffers.scss'; // Import the Sass file for custom styles

export default function SpecialOffers() {
    const cardData = [
        {
            title: "Get a FREE Copy of Kana Cold",
            text: "Sign up for our mailing list and get a free copy of the Kana Cold prequel novella!",
            imgSrc: "./img/book-thumbnails/kc-book-0-standing.png",
            url: "https://BookHip.com/CPGCMK"
        },
        {
            title: "Kana Cold Book Set",
            text: "On sale now! 30% savings when ordering the boxset for books 1-3 & the prequel.",
            imgSrc: "./img/book-thumbnails/boxset1-cropped.png",
            url: "https://amzn.to/3xVcJZr"
        },
        {
            title: "Discount on Book 1 This Week!",
            text: "For a limited time get Book 1 of the Kana Cold series for $2.99!",
            imgSrc: "./img/book-thumbnails/kc-book-1-standing.png",
            url: "https://amzn.to/2VjpPwI"
        }
    ];


  return (
    <Row xs={1} md={3} className="g-3">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <a href={card.url} target="_blank" rel="noopener noreferrer">
            <Card className="d-flex flex-column">
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className='text-center'>{card.title}</Card.Title>
                <Card.Text className='text-center'>
                  {card.text} <br /><br />
                  {idx === 1 && <Badge bg="danger">Most Popular</Badge>} {/* Only display on the 2nd card */}
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  )
}
