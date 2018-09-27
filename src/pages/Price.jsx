import React from 'react';
import { _NavBar, _Footer, _Price, _Header } from '../components';
export default class Price extends React.Component { 
    render() { 
        return ( 
            <React.Fragment>
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="View our Price List below"
                />
                <_Price />
                <_Footer />
            </React.Fragment>
        );
    }
}