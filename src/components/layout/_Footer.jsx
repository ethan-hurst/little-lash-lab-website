import React from 'react';

export default class _Footer extends React.Component {
  render() {
    return (
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
    );
  }
}
