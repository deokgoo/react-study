import createUserManager from "../redux/auth/helpers/createUserManager";

const { REACT_APP_AUTH_SERVER, REACT_APP_AUTH_CLIENT } = process.env;

const userManagerConfig = {
  authority: `${REACT_APP_AUTH_SERVER}`,
  client_id: 'interactive.public',
  scope: 'openid profile email api offline_access',
  response_type: 'code',

  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/signin-callback`,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,

  post_logout_redirect_uri: `${REACT_APP_AUTH_CLIENT}/logout`,

  popup_redirect_uri: `${REACT_APP_AUTH_CLIENT}/popup-callback`,
  popup_post_logout_redirect_uri: `${REACT_APP_AUTH_CLIENT}/user-manager-sample-popup-signout`,

  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;