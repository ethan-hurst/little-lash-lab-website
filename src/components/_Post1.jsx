import React from 'react';
import Img from '../assets/images/01.jpg'

export default class _Post1 extends React.Component {
    render() {
        return (
            <div className="Post1">
                <section>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-lg-2">
                                <div class="p-5">
                                    <img class="img-fluid rounded-circle" src={this.props.img} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 order-lg-1">
                                <div class="p-5">
                                    <h2 class="display-4">{this.props.header}</h2>
                                    <p>{this.props.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

_Post1.defaultProps = {
    header: "For those about to rock...",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.",
    img: "import Img from '../assets/images/01.jpg'"
}