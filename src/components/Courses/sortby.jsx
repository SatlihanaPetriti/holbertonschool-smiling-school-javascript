import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "./sortby.css";
import { Search } from 'react-bootstrap-icons';

const VideoFilter = () => {
    return (
        <section className="py-4 sort-by">
            <Container>
                <Row className="g-5 ">
                    <Col>
                        <InputGroup>
                            <InputGroup.Text className=" filter-control">
                                <Search size={25} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search by keywords"
                                className=" filter-control"
                                size="lg"
                            />
                        </InputGroup>
                    </Col>


                    {/*  dropdown 1 */}
                    <Col >
                        <Form.Select
                            className="filter-control  rounded"
                            size="lg"
                        >
                            <option>Novice</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </Form.Select>
                    </Col>

                    {/* dropdown 2 */}
                    <Col >
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
    );
};

export default VideoFilter;
