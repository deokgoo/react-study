import {
  USER_EXPIRED,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  USER_EXPIRING,
  SESSION_TERMINATED,
  LOADING_USER,
  USER_SIGNED_OUT,
  LOAD_USER_ERROR
} from './type'

// dispatched when the existing user expired
export const userExpired = () => {
  return {
    type: USER_EXPIRED
  };
}

// dispatched when a user has been found in storage
export const userFound = (user) => {
  return {
    type: USER_FOUND,
    payload: user
  };
}

// dispatched when silent renew fails
// payload: the error
export const silentRenewError = (error) => {
  return {
    type: SILENT_RENEW_ERROR,
    payload: error
  };
}

// dispatched when the user is logged out
export const sessionTerminated = () => {
  return {
    type: SESSION_TERMINATED
  };
}

// dispatched when the user is expiring (just before a silent renew is triggered)
export const userExpiring = () => {
  return {
    type: USER_EXPIRING
  };
}

// dispatched when a new user is loading
export const loadingUser = () => {
  return {
    type: LOADING_USER
  };
}

export const userSignedOut = () => {
  return {
    type: USER_SIGNED_OUT
  };
}

export const loadUserError = () => {
  return {
    type: LOAD_USER_ERROR
  };
}