import React from 'react';
import { _NavBar, _Footer, _Header } from '../../components';

export default class _Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Contact us to Book!"
                    buttonProp="Book Now!"
                />
                {/* @TODO Create Contact form and Google Address*/}
                <_Footer />
            </React.Fragment>
        );
    }
}