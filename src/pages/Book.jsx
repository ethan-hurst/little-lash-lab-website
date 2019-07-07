import React from 'react';
import { _Book } from '../components';

export default class Book extends React.Component { 
    render() { 
        return ( 
            <React.Fragment>
                {/* eslint-disable */}
                <_Book />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}