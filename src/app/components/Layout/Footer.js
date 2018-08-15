import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>Footer</footer>
    );
  }
}
const AuthHeader = ({ isLoggedIn }) => {
  if(isLoggedIn) {
      return (<Footer />);
  }
  return (<div></div>);
}
export default AuthHeader;