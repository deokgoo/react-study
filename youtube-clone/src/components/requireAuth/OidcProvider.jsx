import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { userExpired, userFound, silentRenewError, sessionTerminated, userExpiring, userSignedOut } from '../../redux/authStore/action';

const OidcProvider = (props) => {
  useEffect(() => {
    const userManager = props.userManager;
    const dispatchUser = async () => {
      const user = await userManager.getUser();
      props.store.dispatch(userFound(user));
    }
    userManager.events.removeUserLoaded((user) => props.store.dispatch(userFound(user)));
    userManager.events.removeSilentRenewError((err) => props.store.dispatch(silentRenewError(err)));
    userManager.events.removeAccessTokenExpired(() => props.store.dispatch(userExpired()));
    userManager.events.removeAccessTokenExpiring(() => props.store.dispatch(userExpiring()));
    userManager.events.removeUserUnloaded(() => props.store.dispatch(sessionTerminated()));
    userManager.events.removeUserSignedOut(() => props.store.dispatch(userSignedOut()));
    // ===========================
    userManager.events.addUserLoaded((user) => props.store.dispatch(userFound(user)));
    userManager.events.addSilentRenewError((err) => props.store.dispatch(silentRenewError(err)));
    userManager.events.addAccessTokenExpired(() => props.store.dispatch(userExpiring()));
    userManager.events.addAccessTokenExpiring(() => props.store.dispatch(userExpiring()));
    userManager.events.addUserUnloaded(() => props.store.dispatch(sessionTerminated()));
    userManager.events.addUserSignedOut(() => props.store.dispatch(userSignedOut()));

    dispatchUser();
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
