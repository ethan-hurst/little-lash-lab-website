import React from 'react';
import { _NavBar, _Header, _Post } from '../components';

import Img1 from '../assets/images/logo/Unsplash_pics/B & W Wedding Image.jpg';
import Img2 from '../assets/images/logo/Unsplash_pics/Img12.jpg';
import Img3 from '../assets/images/logo/Unsplash_pics/Img13.jpg';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header />
                <_Post
                    header="For those about to rock new lashes..."
                    paragraph="You’ve come to the right place. At The Little Lash Lab we are committed to providing you with stunning classic eyelash extensions, carefully applied so as to preserve the integrity of your natural lashes."
                    img={Img1}
                />
                <_Post 
                    header="Ready for a nap?"
                    paragraph="Because chances are you will - snuggled up under your minky blanket, with the subtle yet deeply relaxing smell of scented candles and essential oils. You’ve already had your chocolate kiss that was waiting for you on your memory-foam pillow. Now with your eyes closed and chill-out music playing, prepare from some zzz’s while we transform your eyes."
                    img={Img2}
                />
                <_Post 
                    header="For bookings"
                    paragraph="Call us on 027 624 8778 or send us a message on Facebook or Instagram."
                    img={Img3}
                />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}
