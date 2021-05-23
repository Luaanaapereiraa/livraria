import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import brand from '../_assets/img/brand.png';


export default class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={brand}
            width="30"
            height="30"
            className="d-inline-block align-top"


          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pageBookList">Lista de livros</Nav.Link>
          <Nav.Link href="#pageBookEdit">Editar livros</Nav.Link>
        </Nav>

      </Navbar>

    );
  }
}


