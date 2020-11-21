import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SignUp = ({
    signup,
    changeScreen,
}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUphandler = () => {
        signup({
            email,
            password,
        });
        setPassword('');
        setEmail('');
    };

    return (
        <>
        <h1>Sign up</h1>
          <input type="email" placeholder="email" value={email} onChange={({ target: { value }}) => setEmail(value)} />
          <input type="password" placeholder="password" value={password} onChange={({ target: { value }}) => setPassword(value)} />
          <button onClick={signUphandler}>Sign up</button>
          <button onClick={() => { changeScreen('login'); }}>back to login page</button>
        </>
    )
}

SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
    changeScreen: PropTypes.func.isRequired,
}

export default SignUp;
