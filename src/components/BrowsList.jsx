import React from 'react';

export default class BrowsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                  <h2 className="section-heading mb-5">
                    <span className="section-heading-upper">Bookings By Appointment </span>
                    {/* <span class="section-heading-lower">We're Open</span> */}
                  </h2>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    <li className="list-unstyled-item list-hours-item d-flex">
                                            Henna Brows Initial Appointment
                      <span className="ml-auto">$60</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                                                1 hour
                      </span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                        <em>Service includes brow shaping, henna tint and brow tweezing.</em>
                      </span>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    <li className="list-unstyled-item list-hours-item d-flex">
                                            Henna Brows Subsequent Appointments
                      <span className="ml-auto">$40</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                                                30 minutes
                      </span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                        <em>Service includes brow shaping, henna tint and brow tweezing.</em>
                      </span>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    <li className="list-unstyled-item list-hours-item d-flex">
                                            Henna Brows Patch Test
                      <span className="ml-auto">Free</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                                                15 minutes
                      </span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                        <em>Book at least 48 hours before your henna brows appointment. If you choose not to book a patch test we require you to sign a waiver form.</em>
                      </span>
                    </li>
                  </ul>
                  <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    <li className="list-unstyled-item list-hours-item d-flex">
                                            Lip Mask
                      <span className="ml-auto">$5</span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                                                45 minutes
                      </span>
                    </li>
                    <li className="list-unstyled-item list-hours-item d-flex">
                      <span className="subheading">
                        <em>With any treatment</em>
                      </span>
                    </li>
                  </ul>
                  <p className="address mb-5">
                    <em>
                      <strong>10 Stile Place</strong>
                      <br />
                                            Pukekohe, Auckland
                    </em>
                  </p>
                  <p className="mb-0">
                    <small>
                      <em>Call Anytime</em>
                    </small>
                    <br />
                    <a href="tel:+64276248778">027 624 8778</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
