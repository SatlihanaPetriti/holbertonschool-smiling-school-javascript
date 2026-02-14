import { Container, Row, Col } from "react-bootstrap";
import { Facebook, TwitterX, Instagram } from "react-bootstrap-icons";
import logo from "../../images/smile_off.png";
import smile from "../../images/logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer text-white py-5">
            <Container>
                <Row className="align-items-center py-5">
                    {/* Logo */}
                    <Col xs={12} sm={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
                        <img
                            src={logo}
                            alt="Smile Logo"
                            height={30}
                            className="me-4"
                        />
                        <img
                            src={smile}
                            alt="Smile Logo"
                            height={30}

                        />
                    </Col>

                    {/* Social icons */}
                    <Col xs={12} md={6} className="text-center text-md-end">
                        <a href="https://www.facebook.com/" className="footer-icon">
                            <Facebook size={20} />
                        </a>
                        <a href="https://x.com/" className="footer-icon">
                            <TwitterX size={20} />
                        </a>
                        <a href="https://www.instagram.com/" className="footer-icon">
                            <Instagram size={20} />
                        </a>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col className=" text-center text-footer ">
                        <small>@smileschool 2020</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
