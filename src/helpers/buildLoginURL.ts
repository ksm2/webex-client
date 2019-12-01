const scope = ['spark:all'].join(' ');

const buildLoginURL = (state: string): string => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  if (clientId === undefined) {
    throw new Error('No Client ID provided.');
  }

  const url = new URL('https://api.ciscospark.com/v1/authorize');
  url.searchParams.append('client_id', clientId);
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('redirect_uri', `${window.location.origin}/auth`);
  url.searchParams.append('scope', scope);
  url.searchParams.append('state', state);

  return url.toString();
};

export default buildLoginURL;
