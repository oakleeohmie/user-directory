import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Router>
                <MDBNavbar color="orange">
                    <MDBNavbarBrand >
                        <strong className="white-text">Employee Directory</strong>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </Router>
        );
    }
}
export default Header;