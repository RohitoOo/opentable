import React from 'react';
import { Layout} from "antd";
const { Footer } = Layout;

const FooterComponent = () =>

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

export default FooterComponent;