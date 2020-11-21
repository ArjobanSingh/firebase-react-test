import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({
    login,
    changeScreen,
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginhandler = () => {
        login({ email, password});
        setPassword('');
        setEmail('');
    };

    return (
        <>
          <h1>Login</h1>
          <input type="email" placeholder="email" value={email} onChange={({ target: { value }}) => setEmail(value)} />
          <input type="password" placeholder="password" value={password} onChange={({ target: { value }}) => setPassword(value)} />
          <button onClick={loginhandler}>login</button> 
          <button onClick={() => { changeScreen('signup'); }}>sign up here</button>
        </>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    changeScreen: PropTypes.func.isRequired,
}

export default Login
