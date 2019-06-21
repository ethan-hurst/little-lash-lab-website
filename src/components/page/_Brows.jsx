import React from 'react';
import { _NavBar, _Footer, _Header, BrowsList } from '../../components';

export default class _Brows extends React.Component { 
    render () { 
        return ( 
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="View our Brows List below"
                />
                <BrowsList />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}