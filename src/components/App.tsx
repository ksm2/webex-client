import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useRouter } from 'react-router5';
import { selectIdentity } from '../selectors';
import LoggedOutPage from './LoggedOutPage';
import Main from './Main';
import Navigation from './Navigation';

const App: React.FC = () => {
  const router = useRouter();
  const identity = useSelector(selectIdentity);

  useEffect(() => {
    if (router.getState().name === 'auth') {
      router.navigate('home');
    }
  }, [router]);

  if (!identity) {
    return <LoggedOutPage />;
  }

  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
