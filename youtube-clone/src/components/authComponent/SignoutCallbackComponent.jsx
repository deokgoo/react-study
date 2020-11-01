import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SignoutCallbackComponent = (props) => {
  useEffect(() => {
    const signOut = async () => {
      try {
        const user = props.userManager.signoutRedirectCallback();
        onRedirectSuccess(user);
      } catch(err) {
        onRedirectError(err)
      }
    }
  })

  const onRedirectSuccess = (user) => {
    this.props.successCallback(user);
  };

  const onRedirectError = (error) => {
    if (this.props.errorCallback) {
      this.props.errorCallback(error);
    } else {
      throw new Error(`Error handling logout redirect callback: ${error.message}`);
    }
  };

  return props.children;
}

SignoutCallbackComponent.propTypes = {
  // the content to render
  children: PropTypes.element.isRequired,

  // the userManager
  userManager: PropTypes.object.isRequired,

  // a function invoked when the callback succeeds
  successCallback: PropTypes.func.isRequired,

  // a function invoked when the callback fails
  errorCallback: PropTypes.func
}

export default SignoutCallbackComponent;