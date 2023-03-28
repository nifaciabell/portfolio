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

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <br />
      <Link to="UXPage">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>UX Design Projects</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Homepage;
