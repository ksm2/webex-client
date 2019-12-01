/* eslint-disable no-restricted-globals */
import Webex from 'webex';

// Fake window object for Webex
// @ts-ignore
self.window = {
  location: self.location,
};

class WebexService {
  private client?: Webex;

  // constructor() {
  //   const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  //   if (accessToken) {
  //     this.setAccessToken(accessToken);
  //   }
  // }

  getClient(): Webex {
    if (!this.client) {
      throw new Error('No access token provided.');
    }
    return this.client;
  }

  setAccessToken(accessToken: string): Webex {
    this.client = Webex.init({
      credentials: {
        access_token: accessToken,
      },
    });

    return this.client;
  }
}

const webex = new WebexService();

export default webex;
