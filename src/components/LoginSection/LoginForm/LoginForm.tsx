import React, { useState } from 'react';
import { useFormik } from 'formik';
import './LoginForm.css';

const validate = (values: any) => {
    const errors: any = {};
    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

type PropsType = {
    logOut: () => void
    showResetPasswordModal: (status: boolean) => void
    authorize: (login: string, password: string) => void
}

export const LoginForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            props.authorize(values.username, values.password);
        },
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='formSection'>

            <form onSubmit={formik.handleSubmit}>

                <p>Username</p>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    className={formik.errors.username ? (formik.touched.username ? 'formError' : '') : ''}
                />

                <p>Password</p>
                <div className='inputContainer'>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password ? (formik.touched.password ? 'formError' : '') : ''}
                    />
                    <div className='showOption' onClick={() => { setShowPassword(!showPassword) }}>
                        <p>{showPassword ? 'Hide' : 'Show'}</p>
                    </div>
                </div>

                <div className='submitOrForgotPassword'>
                    <button className='submitButton' type='submit'>Sign In</button>
                    <p className='forgetPasswordOption' onClick={() => { props.showResetPasswordModal(true) }}>Forgot password?</p>
                </div>

            </form>

        </div>
    )
}