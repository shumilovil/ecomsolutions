import React from 'react';
import './ModalWindow.css';
import cross from '../../assets/cross.jpg';
import { useFormik } from 'formik';


const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    }

    return errors;
};

type PropsType = {
    showResetPasswordModal: (status: boolean) => void
    resetPassword: (email: string) => void
}


export const ModalWindow = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            email: ''

        },
        validate,
        onSubmit: values => {
            props.resetPassword(values.email)
            props.showResetPasswordModal(false)
        },
    });

    return (
        <div className='modalWindowWrapper'>

            <div className='modalWindow'>

                <div className='modalHeader'>
                    <h2>Password reset</h2>
                    <div className='close' onClick={() => { props.showResetPasswordModal(false) }}>
                        <img src={cross} alt="" />
                    </div>
                </div>

                <div className='modalContent'>
                    <div className='prompt'>
                        <p>Please enter the email address associated with your globaledit account to reset your password.</p>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='modalInput'>
                            <p>Email Address</p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                className={formik.errors.email ? (formik.touched.email ? 'formError' : '') : ''} />
                        </div>
                        <div className='buttons'>
                            <button className='submitButton' type='submit'>Submit</button>
                            <button className='cancelButton' onClick={() => { props.showResetPasswordModal(false) }}>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}