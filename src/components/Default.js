import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-4">404</h1>
            <h1>Error</h1>
            <h2>Page not found</h2>
            <h3>The requested URL <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
            <Link to="/">
              <HomeButton className="btn">Go Home</HomeButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const HomeButton = styled.button`
  border: 0.1rem solid var(--mainGreen);
  font-family: "Oswald", sans-serif !important;
  color: var(--mainGreen);
  transition: all 0.5s linear;
  &:hover {
    color: var(--lightGreen);
    border: 0.1rem solid var(--lightGreen);
    background: var(--mainGreen);
  }
`;