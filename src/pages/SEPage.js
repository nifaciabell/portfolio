import Card from "react-bootstrap/Card";

function SEPage() {
  return (
    <div className="App">
      <h1>Software Engineering Projects</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Minesweeper Game</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>

      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Nike App</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Cryptocurrency App</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SEPage;
