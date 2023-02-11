import React from "react";
import { Button, Container, Row, Col, NavLink } from "reactstrap";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "967259ecb3msh0690324faf70d07p19134ejsn8ae0147159ac",
    "X-RapidAPI-Host": "climate-change-live402.p.rapidapi.com",
  },
};

const fetchData = async () => {
  const response = await fetch(
    "https://climate-change-live402.p.rapidapi.com/news",
    options
  );
  const data = await response.json();
  return data;
};

fetchData().then((data) => {
  const firstElement = data[0];
  const secondElement = data[1];
  const thirdElement = data[2];
  const fourthElement = data[3];
  document
    .getElementById("firstnews")
    .appendChild(document.createTextNode(firstElement.title));
  document
    .getElementById("secondnews")
    .appendChild(document.createTextNode(secondElement.title));
  document
    .getElementById("thirdnews")
    .appendChild(document.createTextNode(thirdElement.title));
  document
    .getElementById("fourthnews")
    .appendChild(document.createTextNode(fourthElement.title));
  document.getElementById("firstLink").setAttribute("href", firstElement.url);
  document.getElementById("secondLink").setAttribute("href", secondElement.url);
  document.getElementById("thirdLink").setAttribute("href", thirdElement.url);
  document.getElementById("fourthLink").setAttribute("href", fourthElement.url);
});

function NewsPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <br />
            <br />
            <h2>Here are some news:</h2>
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <div className="info">
              <div className="icon icon-success">
                <i className="nc-icon nc-chat-33" />
              </div>
              <div className="description">
                <h4 id="firstnews"></h4>
                <br />
                <br />
              </div>
              <NavLink id="firstLink" href="" target="_blank">
                <Button className="btn-round mr-1" color="success" outline>
                  See more
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-success">
                <i className="nc-icon nc-bulb-63" />
              </div>
              <div className="description">
                <h4 id="secondnews"></h4>
                <br />
                <br />
              </div>
              <NavLink id="secondLink" href="" target="_blank">
                <Button className="btn-round mr-1" color="success" outline>
                  See more
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-success">
                <i className="nc-icon nc-chart-bar-32" />
              </div>
              <div className="description">
                <h4 id="thirdnews"></h4>
                <br />
                <br />
              </div>
              <NavLink id="thirdLink" href="" target="_blank">
                <Button className="btn-round mr-1" color="success" outline>
                  See more
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-success">
                <i className="nc-icon nc-globe-2" />
              </div>
              <div className="description">
                <h4 id="fourthnews"></h4>
                <br />
                <br />
              </div>
              <NavLink id="fourthLink" href="" target="_blank">
                <Button className="btn-round mr-1" color="success" outline>
                  See more
                </Button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default NewsPage;
