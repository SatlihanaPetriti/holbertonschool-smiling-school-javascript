import { Container, Row, Col } from 'react-bootstrap';
import './pricing.css';


const Pricing = () => {
    return (
        <Container fluid className='indoor-container'>
            <Row>
                <Col>
                    <h1 className='indoor-title'>Indoor Plants</h1>
                </Col>
            </Row>

            <Row className='content-row mt-5'>

                <Col md={3} className='menu'>
                    <p>Snake Plant</p>
                    <p>Monstera</p>
                    <p>Peace Lily</p>
                    <p>Aloe Vera</p>
                </Col>
            </Row>
        </Container>
    );
}
export default Pricing;
