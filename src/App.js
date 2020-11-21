import './App.css';
import { useState } from 'react';
import Login from './componenrs/login';
import SignUp from './componenrs/signup';
import * as auth from './config/auth-firebase';

function App() {

  const [currentScreen, setCurrentScreen] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const login = (obj) => {
    setIsLoading(true);
    auth.firebaseSignIn(obj, (user) => {
      console.log('cb user sign in', user);
      setIsLoading(false);
    }, (err) => {
      console.log('err', err);
      setIsLoading(false);
    });
  }

  const logout = () => {
    setIsLoading(true);
    auth.firebaseSignout(() => {
      setIsLoading(false);
      alert('signed out');
    }, (err) => {
      console.log('err', err);
      setIsLoading(false);
    });
  }

  const signup = (obj) => {
    setIsLoading(true);
    auth.firebaseSignUp(obj, (user) => {
      console.log('cb user', user);
      setIsLoading(false);
    }, (err) => {
      console.log('err', err);
      setIsLoading(false);
    });
  };

  const changeScreen = (nextScreen) => {
    setCurrentScreen(nextScreen);
  };

  return (
    <div className="app">
      {isLoading && <div>loading</div>}
      {currentScreen === 'login' ? (
        <Login login={login} changeScreen={changeScreen} />
      ) : 
      currentScreen === 'signup'
      ? (
        <SignUp signup={signup} changeScreen={changeScreen} />
      ) : null
      }
      <button onClick={logout}>Logout</button>
    </div>
  );
}



export default App;
