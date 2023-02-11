import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

function NewsPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">Let's talk product</h2>
            <h5 className="description">
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
            <br />
            <Button
              className="btn-round"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              See Details
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsPage;
