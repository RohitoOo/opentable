import React, * as react from "react";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";

class App extends react.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
