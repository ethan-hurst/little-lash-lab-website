import React from 'react';

export default class Booking extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <iframe title="bookingWidget" src="https://app.acuityscheduling.com/schedule.php?owner=17049302" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
