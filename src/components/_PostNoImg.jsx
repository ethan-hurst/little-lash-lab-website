import React from 'react';

export default class _PostNoImg extends React.Component {
    render() {
        return (
            <div className="Post1">
                <section>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 order-lg-2">
                                <div class="p-5 align-center padding-bottom-50">
                                    {this.props.script}
                                </div>
                            </div>
                            <div class="col-lg-6 order-lg-1">
                                <div class="p-5">
                                    <h3 class="display-4">{this.props.header}</h3>
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

_PostNoImg.defaultProps = {
    header: "",
    paragraph: "",
    img: undefined,
    alt: ""

}