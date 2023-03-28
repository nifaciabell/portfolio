import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

{/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            
          </Nav>
        </Container>
      </Navbar> */}


      
function NavBar() {
  return (
  
    <nav className="nav">
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
    
  </nav> 
  
  );
}

export default NavBar;