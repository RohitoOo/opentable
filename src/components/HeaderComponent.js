import React from 'react';

import { Menu, Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = () => 
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

export default HeaderComponent;