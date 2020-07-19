import React, { useState, ChangeEvent } from 'react';
import './LoginForm.css';

type PropsType = {
    logIn: () => void
    logOut: () => void
}

export const LoginForm = (props: PropsType) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const onSubmit = () => {
        if (username !== '' && password !== '') {
            props.logIn()
        }
        else {
            if (username === '') {
                alert('Username can\'t be empty!')
            }
            if (password === '') {
                alert('Password can\'t be empty!')
            }
        }
    }

    return (
        <div className='formSection'>

            <p>Username</p>
            <input type="text"
                name="username"
                id="username"
                onChange={handleFieldChange}
                value={username} />

            <p>Password</p>
            <div className='inputContainer'>
                <input type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    onChange={handleFieldChange}
                    value={password} />
                <div className='showOption'
                    onClick={() => { setShowPassword(!showPassword) }}>
                    <p>{showPassword ? 'Hide' : 'Show'}</p>
                </div>
            </div>

            <div className='submitOrForgotPassword'>
                <div className='submitButton' onClick={onSubmit}>Sign In</div>
                <p className='forgetPasswordOption'>Forgot password?</p>
            </div>
        </div>
    )
}