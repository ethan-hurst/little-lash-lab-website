import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class _NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: true,
            dropdownOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    render() {
        return (
            <Navbar className="navbar-custom "dark="true" expand="lg" fixed="top">
                <Container>
                    <NavbarBrand href="/" className="">The Little Lash Lab</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="" navbar>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                      Services/Pricing
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Services</DropdownItem>
                                        <DropdownItem onClick={this.closeNavbar} className="nav-NavLink" href="/lashes">Lashes</DropdownItem>
                                        <DropdownItem onClick={this.closeNavbar} className="nav-NavLink" href="/brows">Brows</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-NavLink" href="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-NavLink" href="/faq">Faq</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

