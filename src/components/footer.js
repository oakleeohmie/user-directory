import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Directory extends Component {
    render() {
        return (
            <Router>
                <MDBNavbar color="orange">
                    <MDBNavbarBrand >

                    </MDBNavbarBrand>
                </MDBNavbar>
            </Router>
        );
    }
}
export default Directory;