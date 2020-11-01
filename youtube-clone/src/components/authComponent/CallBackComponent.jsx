import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const CallBackComponent = (props) => {
  useEffect(() => {
    const signinRedirectCallBack = async () => {
      try {
        await props.userManager.signinRedirect();
        props.successCallback();
      } catch(err) {
        if (props.errorCallback) {
          props.errorCallback(err);
        } else {
          throw new Error(`Error handling redirect callback: ${err.message}`);
        }
      }
    };
    signinRedirectCallBack();
  });

  return <>
  </>
};

CallBackComponent.propTypes = {
  // the content to render
  children: PropTypes.element.isRequired,

  // the userManager
  userManager: PropTypes.object.isRequired,

  // a function invoked when the callback succeeds
  successCallback: PropTypes.func.isRequired,

  // a function invoked when the callback fails
  errorCallback: PropTypes.func
}

export default CallBackComponent;
