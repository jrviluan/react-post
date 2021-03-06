import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../assets/style.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        if(window.location.pathname === "/") {
            return (<div></div>);
        } else {
            return (
                <div className="navbar-fixed-top">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/post">Post</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/user">User</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/">Logout</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>  
            );
        }
    }
}


export default Header;