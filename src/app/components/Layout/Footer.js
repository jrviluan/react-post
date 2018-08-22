import React, { Component } from 'react';
import '../../assets/style.css';

class Footer extends Component {
  render() {
    if(window.location.pathname === "/") {
      return (<div></div>);
    } else {
      return (
        <footer className="footer">
          <div className="container text-center">
                <span className="text-muted">React Footer</span>
            </div>
        </footer>
      );
    }
  }
}

export default Footer;