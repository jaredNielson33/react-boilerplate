import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./example-page.styles.scss";

const ExamplePage = () => {
  return (
    <div className="example-page">
      <header className="example-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Example Page</p>

        <div className="page-link">
          <Link to="/">Main Page</Link>
        </div>
        
      </header>
    </div>
  );
};

export default ExamplePage;
