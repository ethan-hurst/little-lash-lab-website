import React from 'react';
import { _NavBar, _Footer, _Price } from '../components';
export default class Price extends React.Component { 
    render() { 
        return ( 
            <React.Fragment>
                <_NavBar />
                <_Price />
                <_Footer />
            </React.Fragment>
        );
    }
}