import Card from "react-bootstrap/Card";

function UXPage() {
  return (
    <div className="App">
      <h1>UX Design Projects</h1>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title> Premiere Cinema </Card.Title>
          <Card.Img />
          <Card.Link href="http://nifaciabellportfolio.com/premiere-cinema">
            Click Here
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title> Artesa Winery </Card.Title>
          <Card.Img/>
          <Card.Link href="http://nifaciabellportfolio.com/artesa-winery-revamp">
            Click Here
          </Card.Link>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Speechcraft</Card.Title>
          
          <Card.Link href="http://nifaciabellportfolio.com/speechcraft">
            Click Here
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UXPage;
