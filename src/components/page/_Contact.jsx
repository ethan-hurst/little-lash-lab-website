import React from 'react';
import { _NavBar, _Footer, _Header, _Post, _PostNoImg, ContactIcons, MapContainer } from '../../components';
// import Img from '../../assets/images/Misc/Capture.PNG'
import Img1 from '../../assets/images/alexander-andrews-633927-unsplash.jpg';

export default class _Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Contact us!"
                    buttonProp="Book Now!"
                />
                <_PostNoImg 
                    header="Where to find us"
                    paragraph="10 Stile Place, Pukekohe, NZ"
                    script={<MapContainer/>}
                />
                <_Post
                    header="How to speak to us"
                    paragraph="Phone 027 624 8778, or click on any of the icons below:"
                    img={Img1}
                    alt="..."
                />
                <ContactIcons />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}