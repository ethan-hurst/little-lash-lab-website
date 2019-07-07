import React from "react";
import { _NavBar, _Header, _Post, _Footer } from "../";

import Img1 from "../../assets/images/Misc/InFrame_1561436570338.jpg";
import Img2 from "../../assets/images/Misc/IMG_20190705_135116.jpg";

export default class _Home extends React.Component {
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
          alt="lashing for weddings"
        />
        <_Post
          header="Ready for a nap?"
          paragraph="Because chances are you will - snuggled up under your minky blanket, with the subtle yet deeply relaxing smell of scented candles and essential oils. You’ve already had your chocolate kiss that was waiting for you on your memory-foam pillow. Now with your eyes closed and chill-out music playing, prepare from some zzz’s while we transform your eyes."
          img={Img2}
          alt="lashing will be so relaxing you're going to sleep"
        />
        <_Footer />
        {/* eslint-enable */}
      </React.Fragment>
    );
  }
}
