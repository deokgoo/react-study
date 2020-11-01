import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const CallBackComponent = (props) => {
  useEffect(() => {
    const signinRedirectCallBack = async () => {
      try {
        await props.userManager.signinCallback();
        window.location.href = '/';
      } catch(err) {
        throw new Error(`Error handling redirect callback: ${err.message}`);
      }
    };
    signinRedirectCallBack();
  });

  return <>
  </>
};

CallBackComponent.propTypes = {
  userManager: PropTypes.object.isRequired,
}

export default CallBackComponent;
