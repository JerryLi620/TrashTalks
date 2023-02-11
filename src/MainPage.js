import React from "react";
import { Button, Container } from "reactstrap";

function MainPage() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const buttonOnClick = () => {
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
          <h1>Name</h1>
          <h3>Upload Image:</h3>
          <br />

          <Button
            onClick={buttonOnClick}
            className="btn-round mr-1"
            color="neutral"
            target="_blank"
            outline
          >
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ width: 0, height: 0 }}
            />
            Upload
          </Button>
        </div>
      </Container>
    </div>
  );
}
export default MainPage;
