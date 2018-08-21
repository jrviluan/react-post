import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if(window.location.pathname === "/") {
      return (<div></div>);
    } else {
      return (
        <div className="text-center">
          <footer class="footer">
          <div class="container text-center">
                <span class="text-muted">React Footer</span>
            </div>
        </footer>
        </div>
      );
    }
  }
}

export default Footer;