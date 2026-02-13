import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";

const VideoPart = () => {
    const [tutorials, setTutorials] = useState([]);
    const [error, setError] = useState("");

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
                starImage = starColor;
            } else {
                starImage = starGray;
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

    return (
        <section className="py-5">
            <Container>
                <h5 className="mb-5 text-muted">{tutorials.length} videos</h5>

                <Row className="g-4">
                    {tutorials.map((tutorial) => (
                        <Col key={tutorial.id} md={3}>
                            <Card className="shadow-sm">
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
                                        alt={tutorial.title}
                                        className="w-100"
                                    />
                                </div>

                                <Card.Body>
                                    <Card.Title className="fw-bold">{tutorial.title}</Card.Title>

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
                                        <span className="fw-bold text-purple">{tutorial.author}</span>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <div>{renderStars(tutorial.star)}</div>
                                        <span className="fw-bold text-purple">{tutorial.duration}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default VideoPart;