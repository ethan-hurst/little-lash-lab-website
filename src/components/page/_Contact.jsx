import React from 'react';
import { _NavBar, _Footer, _Header, _Post } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class _Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Contact us to Book!"
                    buttonProp="Book Now!"
                />
                <_Post 
                    header=""
                    paragraph=""
                    img="null"
                />
                {/* @TODO Create Contact form and Google Address*/}
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}