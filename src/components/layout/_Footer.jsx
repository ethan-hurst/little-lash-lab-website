import React from 'react';
import InstagramFeed from '../InstagramFeed'

export default class _Footer extends React.Component {
  render() {
    return (
      <>
      <InstagramFeed count="8" />
      <div className="Footer">
        <footer className="py-5 bg-black">
          <div className="container">
            <p className="m-0 text-center text-white small">
              Copyright &copy; The Little Lash Lab
              {' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
      </>
    );
  }
}
