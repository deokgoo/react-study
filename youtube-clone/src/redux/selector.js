import * as authSelector from './authStore/selector';
import * as videoSelector from './videoStore/selector';

const selectors = {};

Object.keys(authSelector).forEach((funcName) =>
  selectors[funcName] = (state) => authSelector[funcName](state?.user),
);

Object.keys(videoSelector).forEach((funcName) =>
  selectors[funcName] = (state) => authSelector[funcName](state?.user),
);

export default selectors;
