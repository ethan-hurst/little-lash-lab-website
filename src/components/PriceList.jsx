import React from 'react';

export default class PriceList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section class="page-section cta">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 mx-auto">
                                <div class="cta-inner text-center rounded">
                                    <h2 class="section-heading mb-5">
                                        <span class="section-heading-upper">Bookings By Appointment </span>
                                        {/* <span class="section-heading-lower">We're Open</span> */}
                                    </h2>
                                    <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Lash Type 1
                                            <span class="ml-auto">$$$$</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                        Lash Type 2
                                            <span class="ml-auto">$$$$</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                        Lash Type 3
                                            <span class="ml-auto">$$$$</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                        Lash Type 4
                                            <span class="ml-auto">$$$$</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                        Lash Type 5
                                            <span class="ml-auto">$$$$</span>
                                        </li>
                                        {/* <li class="list-unstyled-item list-hours-item d-flex">
                                            Friday
                                            <span class="ml-auto">7:00 AM to 8:00 PM</span>
                                        </li>
                                        <li class="list-unstyled-item list-hours-item d-flex">
                                            Saturday
                                            <span class="ml-auto">9:00 AM to 5:00 PM</span>
                                        </li> */}
                                    </ul>
                                    <p class="address mb-5">
                                        <em>
                                            <strong>13 McLachlan Way</strong>
                                            <br />
                                            Pokeno, Auckland
                                            </em>
                                    </p>
                                    <p class="mb-0">
                                        <small>
                                            <em>Call Anytime</em>
                                        </small>
                                        <br />
                                        027 624 8778
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}