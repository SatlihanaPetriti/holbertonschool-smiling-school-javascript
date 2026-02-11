import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./index.css";

const Home = () => {

    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadData() {
            try {
                const data = await axios.get("https://smileschool-api.hbtn.info/quotes");
                if (data.status === 200) {
                    setQuotes(data.data)
                }
            } catch (error) {
                setError("We can not load data for the moment");
            }
        }

        loadData();
    }, []);


    const currentSlide = quotes[currentIndex];

    const previous = () => {
        setCurrentIndex((prevState) => {
            let index = currentIndex + 1;
            if (index >= 2) {
                index = 0;
            }
            return index;
        })
    }

    const next = () => {

    }

    return (
        <>
            <header>
                <nav>
                    <img src={logo} />
                    <ul className="menu">
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Courses</li>
                    </ul>
                </nav>

                <h2 className="schooled">Get Schooled</h2>
                <ul className="categories">
                    <li>smile</li>
                    <li>green</li>
                    <li>laugh</li>
                </ul>

                <button className="register-btn">register for free</button>
            </header>

            <main>
                <section className="quote-slider">
                    {
                        currentSlide &&
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    <div className="img-quote">
                                        <Image src={currentSlide.pic_url} roundedCircle />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <h5>{currentSlide.text}</h5>
                                    <h3>{currentSlide.name}</h3>
                                    <strong>{currentIndex.title}</strong>
                                </Col>
                            </Row>
                            <Button onClick={previous}>Prev</Button>
                            {currentIndex}
                            <Button onClick={next}>Next</Button>
                        </Container>
                    }
                </section>
            </main >
            <footer></footer>
        </>
    )
}
export default Home;