import React, {Component} from 'react';
import {
	Container,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';
	
export default class NavbarFull extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">Kokuban</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/thgil/kokuban">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}