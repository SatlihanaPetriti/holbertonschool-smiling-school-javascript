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
    const [sort, setSort] = useState("most_popular");

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

    const handleSort = (event) => {
        const value = event.target.value;
        setSort(value);
    };


    const filteredTutorials = tutorials.filter((tutorial) => {
        const byKeyword = tutorial.title.toLowerCase().includes(searchTerm);
        const byTopic = topic === "All" || tutorial.topic?.toLowerCase() === topic.toLowerCase();
        return byKeyword && byTopic;
    });

    const sortedTutorials = [...filteredTutorials].sort((a, b) => {
        if (sort === "most_popular") {
            return b.star - a.star;
        }
        else if (sort === "most_recent") {
            return b.published_at - a.published_at;
        }
        else if (sort === "most_viewed") {
            return b.views - a.views;
        }
        return 0;
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
                    key={i}
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
                        <Col md={4}>
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
                        <Col md={4}>
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
                        <Col md={4}>
                            <Form.Select
                                className="filter-control rounded"
                                size="lg"
                                value={sort}
                                onChange={handleSort}
                            >
                                <option value="most_popular">Most Popular</option>
                                <option value="most_recent">Most Recent</option>
                                <option value="most_viewed">Most Viewed</option>
                            </Form.Select>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* VIDEO  */}
            <section className="py-4">
                <Container>

                    <h5 className="mb-4 text-muted">
                        {sortedTutorials.length} videos
                    </h5>

                    <Row className="g-4">
                        {sortedTutorials.map((tutorial) => (
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
                </Container>
            </section>
        </>
    );
}

export default VideoPart;