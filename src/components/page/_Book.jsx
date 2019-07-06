import React from 'react';
import { _NavBar, _Footer, _Header, Booking } from '..';

export default class _Book extends React.Component { 
    render () { 
        return ( 
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="Book below"
                />
                <Booking />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}