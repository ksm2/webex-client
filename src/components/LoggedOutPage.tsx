import React, { FC, ReactNode } from 'react';
import './LoggedOutPage.css';
import { useDispatch } from 'react-redux';
import { useRoute } from 'react-router5';
import { requestAccessToken } from '../actions/identity';
import buildLoginURL from '../helpers/buildLoginURL';
import useTitle from '../hooks/useTitle';

const loginState = 'login';

const Reusable: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="LoggedOutPage">
    <main>
      <h1>Webex Client</h1>
      <p>You are currently not logged in.</p>
      <p>{children}</p>
    </main>
  </div>
);

const LoggedOutPage: FC = () => {
  const dispatch = useDispatch();
  const { route } = useRoute();

  useTitle('Webex Client Login');

  if (route && route.name === 'auth') {
    const { code, state } = route.params;
    if (state !== loginState) {
      return <Reusable>Logging failed: Invalid state.</Reusable>;
    }

    dispatch(requestAccessToken(code));

    return <Reusable>Logging in ...</Reusable>;
  }

  const loginURL = buildLoginURL(loginState);

  return (
    <Reusable>
      <a href={loginURL}>Log in</a>
    </Reusable>
  );
};

export default LoggedOutPage;
