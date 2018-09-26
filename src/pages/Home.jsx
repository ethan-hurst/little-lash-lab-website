import React from 'react';
import { _Header, _Post1, _Post2, _Post3 } from '../components';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <_Header />
                <_Post1 />
                <_Post2 />
                <_Post3 />
            </React.Fragment>
        );
    }
}