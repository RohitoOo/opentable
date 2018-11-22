import React, { Component } from "react";
import "./App.css";
import City from "./components/City";
import Restaurants from "./components/Restaurants";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item>
                <a
                  alt="Personal Portfolio Page"
                  href="http://www.rohito.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Portfolio
                </a>{" "}
              </Menu.Item>
              <Menu.Item>
                {" "}
                <a
                  alt="Git Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/rohitoOo"
                >
                  Github
                </a>
              </Menu.Item>
              <Menu.Item>
                {" "}
                <a
                  alt="Source Code"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/rohitoOo/opentable"
                >
                  Source Code
                </a>{" "}
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ minHeight: "500px", marginTop:"50px" }}>
            <div className="container">
              <Switch>
                <Route path="/" component={City} />
              </Switch>
              <Route exact path="/restaurants" component={Restaurants} />
            </div>
          </Content>
          <Footer
            style={{
              bottom: "0",
              width: "100%",
              height: "60px" /* Height of the footer */
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.rohito.com"
            >
              Rohito Bhambhani
            </a>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
