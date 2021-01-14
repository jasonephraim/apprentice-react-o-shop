import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { registerFields, loginFields } from "../constants/formFields";
import routePaths from "../constants/routePaths";

function Forms() {

    const loginForm = [];
    const registerForm = [];

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = () => {
        setSubmitted(true);
        console.log('submit');
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    registerFields.forEach((field, i) => {
        if (field.inputType === 'text') {
            registerForm.push(
                <div className="form-group" key={i}>
                        <input
                            type="text"
                            key={i}
                            name={field.fieldName}
                            placeholder={field.fieldPlaceholder}
                            value={inputs.fieldName}
                            onChange={onChange}
                            className={
                                'form-control' + (submitted && !field.fieldName ? ' is-invalid' : '')
                            }
                        />
                        {submitted && !field.fieldName && (
                            <div className="invalid-feedback">{field.invalidFeedback}</div>
                        )}
                    </div>
            )
        } else if (field.inputType === 'btn') {
            registerForm.push(
                <button className="btn btn-primary" key={i}>{field.fieldPlaceholder}</button>
            )
        } else {
            registerForm.push(
                <Link to={routePaths.register} className="btn btn-link" key={i}>{field.fieldPlaceholder}</Link>
            )
        };
    });

    loginFields.forEach((field, i) => {
        if (field.inputType === 'text') {
            loginForm.push(
                <div className="form-group" key={i}>
                        <input
                            type="text"
                            key={i}
                            name={field.fieldName}
                            placeholder={field.fieldPlaceholder}
                            value={inputs.fieldName}
                            onChange={onChange}
                            className={
                                'form-control' + (submitted && !field.fieldName ? ' is-invalid' : '')
                            }
                        />
                        {submitted && !field.fieldName && (
                            <div className="invalid-feedback">{field.invalidFeedback}</div>
                        )}
                </div>
            )
        } else if (field.inputType === 'btn') {
            loginForm.push(
                <button className="btn btn-primary" key={i}>{field.fieldPlaceholder}</button>
            )
        } else {
            loginForm.push(
                <Link to={routePaths.home} className="btn btn-link" key={i}>{field.fieldPlaceholder}</Link>
            )
        };
    });

    if (Forms === "login") {
        return (
            <div className="col-lg-4 offset-lg-4">
            <h2>Login</h2>
            <form name="form" onSubmit={onSubmit}></form>
            {loginForm}
            </div>

        )
    } else {
        return (
        <div className="col-lg-4 offset-lg-4">
            <h2>Register</h2>
            <form name="form" onSubmit={onSubmit}>
            {registerForm}
            </form>
            </div>
            )
        }

};

export default Forms;
