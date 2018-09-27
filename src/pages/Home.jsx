import React from 'react';
import { _NavBar, _Header, _Post1, _Post2, _Post3 } from '../components';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <_NavBar />
                <_Header />
                <_Post1 />
                <_Post2 />
                <_Post3 />
            </React.Fragment>
        );
    }
}

_Header.defaultProps = { 
    headerProp: "The Little Lash Lab",
    subheadingProp: "Will Rock Your Socks Off",
    buttonProp: "Learn More"
}