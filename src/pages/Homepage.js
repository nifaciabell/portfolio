import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <h1>Nifacia Bell Portfolio</h1>
      <Link to="/SEPage">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Software Engineering Projects</Card.Title>
            <Card.Img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          </Card.Body>
        </Card>
      </Link>
      <br />
      <Link to="UXPage">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>UX Design Projects</Card.Title>
            <Card.Img src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"/>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Homepage;
