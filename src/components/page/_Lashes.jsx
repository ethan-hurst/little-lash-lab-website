import React from 'react';
import { _NavBar, _Footer, _Header, LashList } from '../../components';

export default class _Lash extends React.Component { 
    render () { 
        return ( 
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="View our Lash List below"
                />
                <LashList />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}