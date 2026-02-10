import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/smile_off.png";
import logo1 from "../../images/logo.png";
import "../header/header.css";

const MainNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="py-3 bg-transparent">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="Logo" height={30} className="me-2" />
                    <img src={logo1} alt="Logo" height={30} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-white mx-3">Courses</Nav.Link>
                        <Nav.Link href="/Pricing" className="text-white mx-3">
                            Pricing
                        </Nav.Link>
                        <Nav.Link className="text-white mx-3">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;
