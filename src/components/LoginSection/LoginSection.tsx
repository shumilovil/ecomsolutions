import React, { useState } from 'react';
import './LoginSection.css';
import logo from '../../assets/logo.svg';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { LoginForm } from './LoginForm/LoginForm';
import { AuthorizationMessage } from './AuthorizationMessage/AuthorizationMessage';
import { ModalConfirmation } from '../ModalConfirmation/ModalConfirmation';
import { Preloader } from '../Preloader/Preloader';

type PropsType = {
    isAuthorized: boolean
    isPreloaderShown: boolean
    isPasswordResetConfirmed: boolean
    logOut: () => void
    authorize: (login: string, password: string) => void
    resetPassword: (email: string) => void
    passwordResetFinish: () => void
}

export const LoginSection = (props: PropsType) => {

    const [isResetPasswordModalShown, showResetPasswordModal] = useState(false);

    return (
        <div className='loginSectionWrapper'>
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
                    {props.isPreloaderShown && <Preloader />}
                    {props.isAuthorized && <AuthorizationMessage />}
                    {!props.isAuthorized
                        && <LoginForm
                            authorize={props.authorize}
                            logOut={props.logOut}
                            showResetPasswordModal={showResetPasswordModal} />}

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
                {isResetPasswordModalShown && <ModalWindow showResetPasswordModal={showResetPasswordModal} resetPassword={props.resetPassword} />}
                {props.isPasswordResetConfirmed && <ModalConfirmation passwordResetFinish={props.passwordResetFinish} />}
            </div>
        </div>
    )
}