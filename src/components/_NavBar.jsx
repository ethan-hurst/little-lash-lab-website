import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default class _NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
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
                                <NavLink onClick={this.closeNavbar} className="nav-NavLink" href="/pricing">Pricing</NavLink>
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

        //     <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        //     <div class="container">
        //       <a class="navbar-brand" href="#">Start Bootstrap</a>
        //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //       </button>
        //       <div class="collapse navbar-collapse" id="navbarResponsive">
        //         <ul class="navbar-nav ml-auto">
        //           <li class="nav-item">
        //             <a class="nav-link" href="#">Sign Up</a>
        //           </li>
        //           <li class="nav-item">
        //             <a class="nav-link" href="#">Log In</a>
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   </nav>
        );
    }
}

