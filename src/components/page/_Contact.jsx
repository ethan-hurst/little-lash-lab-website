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
                    header="Lets Talk!"
                    paragraph="If you'd like to get some more information on what services we offer. Or simply wanna see how it all works, please send us an email or call!"
                    img=""
                />
                {/* @TODO Create Contact form and Google Address*/}
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}