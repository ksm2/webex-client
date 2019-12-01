export interface AccessTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
}

const accessTokenURL = 'https://api.ciscospark.com/v1/access_token';

const fetchAccessToken = async (code: string): Promise<AccessTokenResponse> => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  if (clientId === undefined) {
    throw new Error('No Client ID provided.');
  }

  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  if (clientSecret === undefined) {
    throw new Error('No Client Secret provided.');
  }

  const data = new URLSearchParams();
  data.append('grant_type', 'authorization_code');
  data.append('client_id', clientId);
  data.append('client_secret', clientSecret);
  data.append('code', code);
  data.append('redirect_uri', `${window.location.origin}/auth`);

  const response = await fetch(accessTokenURL, {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  if (response.status !== 200) {
    const resp = await response.text();
    throw new Error(`Cannot fetch access token: ${resp}`);
  }

  return response.json();
};

export default fetchAccessToken;
