/* eslint-disable no-restricted-globals */
import Webex from 'webex';

// Fake window object for Webex
// @ts-ignore
self.window = {
  location: self.location,
};

const webex = Webex.init({
  credentials: {
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  },
});

export default webex;
