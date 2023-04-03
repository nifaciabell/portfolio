import { Link } from "react-router-dom";
import { Nav, Row, Container, Navbar as BNavBar } from "react-bootstrap";

function NavBar() {
  return (
    <Container>
      <Row>
        <Nav>
          <BNavBar className="nav">
            <Link to="/">
              <div>Homepage</div>
            </Link>
            <Link to="/SEPage">
              <div>Software Engineering Projects</div>
            </Link>

            <Link to="/UXPage">
              <div>UX Design Projects</div>
            </Link>

            <Link to="/About">
              <div>About Me</div>
            </Link>

            <Link to="/Contact">
              <div>Contact</div>
            </Link>
          </BNavBar>
        </Nav>
      </Row>
    </Container>
  );
}

export default NavBar;
