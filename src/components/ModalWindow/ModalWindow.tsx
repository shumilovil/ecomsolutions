import React from 'react';
import './ModalWindow.css';
import cross from '../../assets/cross.jpg';

export const ModalWindow = (props: any) => {
    return (
        <div className='modalWindowWrapper'>
            <div className='modalWindow'>
                <div className='modalHeader'>
                    <h2>Password reset</h2>
                    <div className='close'>
                        <img src={cross} alt="" />
                    </div>
                </div>
                <div className='modalContent'>
                    <div className='prompt'>
                        <p>Please enter the email address associated with your globaledit account to reset your password.</p>
                    </div>
                    <div className='modalInput'>
                        <p>Email Address</p>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className='buttons'>
                        <div className='submitButton'>Submit</div>
                        <div className='cancelButton'>Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    )
}