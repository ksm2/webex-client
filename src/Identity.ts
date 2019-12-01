import { PersonObject } from 'webex';

interface Identity extends PersonObject {
  accessToken: string;
}

export default Identity;
