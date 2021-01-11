import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import routePaths from '../../constants/routePaths';

function LoginForm() {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const { username, password } = inputs;

    const onSubmit = () => {
        setSubmitted(true);
        console.log('submit');
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    return (
        <div className="col-lg-4 offset-lg-4">
            <h2>Login</h2>
            <form name="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={onChange}
                        className={
                            'form-control' + (submitted && !username ? ' is-invalid' : '')
                        }
                    />
                    {submitted && !username && (
                        <div className="invalid-feedback">Username is required</div>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                        className={
                            'form-control' + (submitted && !password ? ' is-invalid' : '')
                        }
                    />
                    {submitted && !password && (
                        <div className="invalid-feedback">Password is required</div>
                    )}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    <Link to={routePaths.register} className="btn-btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
