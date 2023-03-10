import React from "react";
import { Button, Container } from "reactstrap";

async function query(file) {
  const data = file;
  const response = await fetch(
    "https://api-inference.huggingface.co/models/yangy50/garbage-classification",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: data,
    }
  );
  const result = await response.json();
  return result;
}

function MainPage() {
  let pageHeader = React.createRef();

  const buttonOnClick = () => {
    document.getElementById("upload-btn").addEventListener("change", (e) => {
      let file = e.target.files[0];
      if (file !== undefined) {
        query(file).then((result) => {
          const name = result[0].label;
          let element = document.getElementById("nameOutput");
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          element.appendChild(document.createTextNode(name));
        });
      }
    });
    document.getElementById("fileInput").click();
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + require("./assets/background.jpg") + ")",
      }}
      className="page-header"
      data-parallax={true}
      ref={pageHeader}
    >
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <b style={{ fontSize: "100px" }}>"TrashTalks"</b>
          <br />
          <h2 style={{ fontSize: "30px" }}>
            Simplifying waste reduction through education and AI.
          </h2>
          <br />
          <br />

          <Button
            onClick={buttonOnClick}
            id="upload-btn"
            className="btn-round mr-1"
            color="neutral"
            target="_blank"
            outline
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ width: 0, height: 0 }}
            />
            UPLOAD
          </Button>

          <br />
          <br />
          <h6 style={{ fontSize: "20px" }}>Hi There, I am a: </h6>
          <h6 style={{ fontSize: "20px" }} id="nameOutput">
            {" "}
          </h6>
        </div>
      </Container>
    </div>
  );
}
export default MainPage;
