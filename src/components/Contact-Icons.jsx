import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class ContactIcons extends React.Component { 
    render() { 
        return(
            <div className="SocialIcons">
                <SocialIcon url="https://www.facebook.com/pg/thelittlelashlab" />
                <SocialIcon url="https://www.instagram.com/thelittlelashlab/" />
                <SocialIcon url="mailto:berenice@littlelashlab.com" />
            </div>
        );
    }
}