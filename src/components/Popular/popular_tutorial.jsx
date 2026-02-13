import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import axios from "axios";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import arrowLeft from "../../images/arrow_black_left.png";
import arrowRight from "../../images/arrow_black_right.png";
import "./popular_tutorial.css";

const PopularTutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [error, setError] = useState("");
    const cardsToShow = 4;

    // Fetch API
    useEffect(() => {
        async function loadTutorials() {
            try {
                const response = await axios.get(
                    "https://smileschool-api.hbtn.info/popular-tutorials"
                );
                setTutorials(response.data);
            } catch (error) {
                console.error("Failed to load tutorials:", error);
                setError("Unable to load tutorials at the moment");
            }
        }

        loadTutorials();
    }, []);

    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            let starImage;
            if (i < count) {
                starImage = starColor; // filled 
            } else {
                starImage = starGray; // empty 
            }

            stars.push(
                <Image
                    src={starImage}
                    width={20}
                    height={20}
                    className="me-1"
                    alt="star"
                />
            );
        }
        return stars;
    };

    const next = () => {
        if (startIndex < tutorials.length - cardsToShow) {
            setStartIndex(startIndex + 1);
        }
    };

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleTutorials = tutorials.slice(startIndex, startIndex + cardsToShow);

    return (
        <section className="py-5">
            <Container>
                <h1 className="text-center fs-2 py-5 mb-5 fw-light">
                    Most <span className="fw-bold txt-learn">popular</span> tutorials
                </h1>

                <div className="d-flex">

                    {/* Left button */}
                    {tutorials.length > cardsToShow && (
                        <Button
                            variant="link"
                            onClick={prev}
                            disabled={startIndex === 0}
                            className="me-2"
                        >
                            <img src={arrowLeft} alt="Previous" width={30} />
                        </Button>
                    )}

                    {/* Tutorial cards */}
                    <Row className="g-4 ">
                        {visibleTutorials.map((tutorial) => (
                            <Col >
                                <Card className=" shadow-sm">
                                    <div className="position-relative rounded-top">
                                        <Image
                                            src={play}
                                            alt="Play"
                                            width={50}
                                            height={50}
                                            className="position-absolute top-50 start-50 translate-middle"
                                        />
                                        <Image
                                            src={tutorial.thumb_url}
                                            alt="Happpy smile"
                                            className="w-100"
                                        />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="fw-bold">
                                            {tutorial.title}
                                        </Card.Title>

                                        <Card.Text className="text-muted">
                                            {tutorial["sub-title"]}
                                        </Card.Text>

                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <Image
                                                src={tutorial.author_pic_url}
                                                roundedCircle
                                                width={30}
                                                height={30}
                                            />
                                            <span className="fw-bold text-purple">
                                                {tutorial.author}
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-between ">
                                            <div>{renderStars(tutorial.star)}</div>
                                            <span className="fw-bold text-purple">
                                                {tutorial.duration}
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Right button */}
                    {tutorials.length > cardsToShow && (
                        <Button
                            variant="link"
                            onClick={next}
                            disabled={startIndex >= tutorials.length - cardsToShow}
                            className="ms-2"
                        >
                            <img src={arrowRight} alt="Next" width={30} />
                        </Button>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default PopularTutorials;
