import * as authSelector from './auth/selector';

const selectors = {};

Object.keys(authSelector).forEach((funcName) =>
    selectors[funcName] = (state) => authSelector[funcName](state?.user),
);

export default selectors;