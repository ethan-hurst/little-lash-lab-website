import React from 'react';
import { _NavBar, _Footer, _Contact, _Header } from '../components';

export default class Contact extends React.Component { 
    const 
    render () { 
        return ( 
            <React.Fragment>
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="Contact us to Book!"
                    buttonProp="Book Now!"
                />
                <_Contact />
                <_Footer />
            </React.Fragment>
        );
    }
}