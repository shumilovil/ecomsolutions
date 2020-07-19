import React from 'react';
import './LoginSection.css';
import logo from '../../assets/logo.svg';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { LoginForm } from './LoginForm/LoginForm';
import { AuthorizationMessage } from './AuthorizationMessage/AuthorizationMessage';

type PropsType = {
    isAuthorized: boolean
    logIn: () => void
    logOut: () => void
}

export const LoginSection = (props: PropsType) => {
    return (
        <div className='loginSection'>
            {props.isAuthorized && <p className='logOutButton' onClick={props.logOut}>Log Out</p>}
            <div className='wrapper'>
                <div className='headerSection'>
                    <h1>Welcome</h1>
                    <p>Please sign in to continue</p>
                </div>
                <div className='logoSection'>
                    <img src={logo} alt="" />
                </div>
                {props.isAuthorized && <AuthorizationMessage />}
                {!props.isAuthorized && <LoginForm logIn={props.logIn} logOut={props.logOut} />}
                <div className='bottomColumns'>
                    <div className='column'>
                        <h2>LATEST BLOG POST</h2>
                        <br />
                        <p>October 15, 2018
                            <br />
                            Create Efficiency with a Creative Asset Management Platform
                        </p>
                    </div>
                    <div className='column'>
                        <h2>RECENT TWEET</h2>
                        <br />
                        <p>April 25, 2018
                            <br />
                            #HenryStewartEvents are bringing their #CreativeOps show to NYC for the third…
                        </p>
                    </div>
                </div>
            </div>
            {/*  <ModalWindow /> */}
        </div>
    )
}