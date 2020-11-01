import React from 'react';
import { connect } from 'react-redux';
import CallbackComponent from '../components/authComponent/CallBackComponent';
import userManager from "../utils/userManager";

class CallbackPage extends React.Component {
  render() {
    return (
      <CallbackComponent userManager={userManager} />
    );
  }
}

export default connect()(CallbackPage);