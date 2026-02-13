import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import axios from "axios";
import play from "../../images/play.png";
import starColor from "../../images/star_on.png";
import starGray from "../../images/star_off.png";
import "./videos.css"


const VideoPart = () => {
    const [tutorials, setTutorials] = useState([]);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [topic, setTopic] = useState("All");

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

    const handleChange = (event) => {
        const value = event.target.value.trim().toLowerCase();
        setSearchTerm(value);
    };

    const handleTopic = (event) => {
        const value = event.target.value;
        setTopic(value);
    };

    
    const filteredTutorials = tutorials.filter((tutorial) => {
        const byKeyword = tutorial.title
            .toLowerCase()
            .includes(searchTerm);

        const byTopic =
            topic === "All" ||
            tutorial.topic?.toLowerCase() === topic.toLowerCase();

        return byKeyword && byTopic;
    });

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
        <>
            <section className="py-4 sort-by">
                <Container>
                    <Row className="g-5">

                        {/* keyword */}
                        <Col>
                            <InputGroup>
                                <InputGroup.Text className="filter-control">
                                    <Search size={25} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Search by keywords"
                                    className="filter-control"
                                    size="lg"
                                    onChange={handleChange}
                                />
                            </InputGroup>
                        </Col>

                        {/* topic*/}
                        <Col>
                            <Form.Select
                                className="filter-control rounded"
                                size="lg"
                                value={topic}
                                onChange={handleTopic}
                            >
                                <option value="All">All</option>
                                <option value="Novice">Novice</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </Form.Select>
                        </Col>

                        {/* sort */}
                        <Col>
                            <Form.Select
                                className="filter-control rounded"
                                size="lg"
                            >
                                <option>Most Popular</option>
                                <option>Most Recent</option>
                                <option>Most Viewed</option>
                            </Form.Select>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* VIDEO  */}
            <section className="py-4">
                <Container>

                    <h5 className="mb-4 text-muted">
                        {filteredTutorials.length} videos
                    </h5>

                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        <Row className="g-4">
                            {filteredTutorials.map((tutorial) => (
                                <Col key={tutorial.id} md={3}>
                                    <Card className="shadow-sm">
                                        <div className="position-relative">
                                            <Image
                                                src={play}
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
                                            <Card.Title>
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

                                            <div className="d-flex justify-content-between">
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
                    )}

                </Container>
            </section>
        </>
    );
}

export default VideoPart;
