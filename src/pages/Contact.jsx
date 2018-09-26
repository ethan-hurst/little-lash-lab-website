import React from 'react';
import { _NavBar, _Footer, _Contact } from '../components';

export default class Contact extends React.Component { 
    render () { 
        return ( 
            <React.Fragment>
                <_NavBar />
                <_Contact />
                <_Footer />
            </React.Fragment>
        );
    }
}