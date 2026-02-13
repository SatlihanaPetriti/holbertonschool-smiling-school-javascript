import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import arrowLeft from "../../images/arrow_white_left.png";
import arrowRight from "../../images/arrow_white_right.png";
import "bootstrap/dist/css/bootstrap.min.css";
import './testimonial.css';
import axios from "axios";

const Testimonial = () => {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState("");
   

    useEffect(() => {
        async function loadData() {
            try {
                const data = await axios.get("https://smileschool-api.hbtn.info/quotes");
                if (data.status === 200) {
                    setQuotes(data.data);
                }
            } catch (error) {
                setError("We can not load data for the moment");
            }
        }

        loadData();
    }, []);

    if (!quotes.length) {
        return (
            <p className="text-center">Loading test</p>
        );
    }

    const currentSlide = quotes[currentIndex];

    const previous = () => {
        setCurrentIndex((prevState) => {
            let index = prevState - 1;
            if (index < 0) {
                index = quotes.length - 1;
            }
            return index;
        });
    };

    const next = () => {
        setCurrentIndex((prevState) => {
            let index = prevState + 1;
            if (index >= quotes.length) {
                index = 0;
            }
            return index;
        });
    };

    return (
        <section className="bg-color text-white py-5">
            <Container className="position-relative">
                {quotes.length > 1 && (
                    <Button
                        variant="link"
                        onClick={previous}
                        className="position-absolute top-50  translate-middle-y"
                    >
                        <Image src={arrowLeft} width={30} alt="Previous" />
                    </Button>
                )}

                <Row className="align-items-center justify-content-center">
                    <Col md="auto">
                        <Image
                            src={currentSlide.pic_url}
                            roundedCircle
                            className="testimonial-img"
                            alt={currentSlide.name}
                        />
                    </Col>
                    <Col md={7}>
                        <p className="fs-5 fw-light">"{currentSlide.text}"</p>
                        <p className="fw-bold mb-1">{currentSlide.name}</p>
                        <p className="fst-italic">{currentSlide.title}</p>
                    </Col>
                </Row>

                {quotes.length > 1 && (
                    <Button
                        variant="link"
                        onClick={next}
                        className="position-absolute top-50 end-0 translate-middle-y"
                    >
                        <Image src={arrowRight} width={30} alt="Next" />
                    </Button>
                )}
            </Container>
        </section>
    );
};

export default Testimonial;