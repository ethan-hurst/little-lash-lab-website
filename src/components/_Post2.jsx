import React from 'react';
import Img from '../assets/images/02.jpg'


export default class _Post2 extends React.Component {
    render() {
        return (
            <div className="Post2">
                <section>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <img class="img-fluid rounded-circle" src={Img} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 class="display-4">We salute you!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}