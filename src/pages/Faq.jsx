import React from 'react';
import { _Footer, _Faq, _NavBar, _Header, _Post } from '../components'


export default class Faq extends React.Component {
    render() {
        return (
            <React.Fragment>
                <_NavBar />
                <_Header 
                    headerProp="The Little Lash Lab"
                    subheadingProp="Got Some Questions?"
                />
                <_Post 
                    header="Here's something interesting"
                    paragraph="Keep reading to get some answers!"
                />
                <_Faq />
                <_Footer />
            </React.Fragment>
        );
    }
}