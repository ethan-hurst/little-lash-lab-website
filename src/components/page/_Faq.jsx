import React from 'react';
import { _Footer, _NavBar, _Header, _Post } from '../../components';
import Img1 from '../../assets/images/logo/Unsplash_pics/Natural Lashes.jpg';
import Img2 from '../../assets/images/logo/Unsplash_pics/Failed Lashes.jpg';
import Img3 from '../../assets/images/logo/Unsplash_pics/Img14.jpg';
import Img4 from '../../assets/images/logo/Unsplash_pics/Img12.jpg';
import Img5 from '../../assets/images/logo/Unsplash_pics/Img2.jpg';
export default class _Faq extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable */}
                <_NavBar />
                <_Header
                    headerProp="The Little Lash Lab"
                    subheadingProp="Got Some Questions?"
                />
                <_Post
                    header="How long will they last?"
                    paragraph="Provided they are cared for eyelash extensions will last around 4 weeks, but we need to undertstand that each lash is in it's own growth cycle. There are three stages to the cycle: the active growth phase, the transitional phase and the resting phase. At the end of the resting phase, your natural lash will shed, along with the extension attached. We  can expect to shed 2 lashes per eye per day (a little more in Spring). Because of this, we recommend coming in for an infill every 2 to 3 weeks."
                    img={Img1}
                />
                <_Post
                    header="Will I lose my natural lashes?"
                    paragraph="When lashes are properly applied by a professionally trained technician, and you are not prone to pulling or rubbing your eyes, then no, you will not prematurely lose your natural lashes. Always do your research before allowing anyone to apply lash extensions. The picture on the right is an example of very poorly applied extensions that caused the client to prematurely lose natural lashes."
                    img={Img2}
                />
                <_Post
                    header="The salon up the road is doing them for $40. Aren't I better off going there?"
                    paragraph="Don't do it! Unless it is being advertised as an introductory or training special, super low prices should ring alarm bells. Well applied extensions take time. A great artist also invests time and money in training and is continually researching products and skills. A rushed job with inferior products can result in damaged lashes and poor retention."
                    img={Img3}
                />
                <_Post
                    header="Will I be bored lying there for 2 hours?"
                    paragraph="Are you bored when you're asleep? Because chances are you will have a lash nap while have your extensions applied. At The Little Lash Lab we love to pamper you. When you arrive you will instantly smell the calming scent of the candle, devour the choccy waiting for you on your pillow, and snuggle up under our soft minky blanket, and listen to relaxing music while we make you even more beautiful (you can also bring your own music/podcasts to listen to)."
                    img={Img4}
                />
                <_Post
                    header="Can I have them really long?"
                    paragraph="That depends on your natural lashes. We can make them one third longer than your natural lash, but ideally one or two millimetre longer. If extensions are too long they can cause your lashes to droop and can cause premature shedding. At The Little Lash Lab, the integrity of your natural lashes is our No.1 priority."
                    img={Img5}
                />
                <_Footer />
                {/* eslint-enable */}
            </React.Fragment>
        );
    }
}