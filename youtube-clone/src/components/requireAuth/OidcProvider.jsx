import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { userFound, silentRenewError, sessionTerminated, userExpiring, userSignedOut } from '../../redux/auth/action';

const OidcProvider = (props) => {
  useEffect(() => {
    const userManager = props.userManager;
    userManager.getUser().then((user)=> { console.log(user)})
    // ===========================
    userManager.events.addUserLoaded((user) => props.store.dispatch(userFound(user)));
    userManager.events.addSilentRenewError((err) => props.store.dispatch(silentRenewError(err)));
    userManager.events.addAccessTokenExpired(() => props.store.dispatch(userExpiring()));
    userManager.events.addAccessTokenExpiring(() => props.store.dispatch(userExpiring()));
    userManager.events.addUserUnloaded(() => props.store.dispatch(sessionTerminated()));
    userManager.events.addUserSignedOut(() => props.store.dispatch(userSignedOut()));
  }, [props])

  return (
    <>
      {props.children}
    </>
  );
}

OidcProvider.propTypes = {
  // the user manager from oidc-client
  userManager: PropTypes.object.isRequired,

  // the redux-store
  store: PropTypes.object.isRequired,
};

export default OidcProvider;