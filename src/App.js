import "./App.css";
import React from "react";
import { Button, Container } from "reactstrap";

// return (
//   <div className="App">
//     <div id="photoInput">
//       <input type="file" id="fileInput" accept="image/*" />
//       <button onclick="document.getElementById('fileInput').click();">
//         Upload Image
//       </button>
//     </div>
//     <div id="result">
//       s<h1>result:</h1>
//     </div>
//   </div>
// );
function App() {
  let pageHeader = React.createRef();

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
export default App;
