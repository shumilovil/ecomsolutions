import React from 'react';
import '../ModalWindow/ModalWindow.css';
import cross from '../../assets/cross.jpg';

type PropsType = {
    passwordResetFinish: () => void
}

export const ModalConfirmation = (props: PropsType) => {
    return (
        <div className='modalWindowWrapper'>
            <div className='modalWindow' >
                <div className='modalHeader'>
                    <h2>Email Sent</h2>
                    <div className='close' onClick={props.passwordResetFinish}>
                        <img src={cross} alt="" />
                    </div>
                </div>
                <div className='modalContent'>
                    <div className='prompt'>
                        <p>Thank you, instructions to reset your password have been e-mailed to the address you provided!</p>
                    </div>
                    <div className='buttons'>
                        <button className='submitButton' onClick={props.passwordResetFinish}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}