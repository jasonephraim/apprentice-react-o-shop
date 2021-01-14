import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { registerFields, loginFields } from '../constants/formFields';
import routePaths from '../constants/routePaths';
import { loginActions } from '../store/login/action';
import { registerActions } from '../store/register/action';

function Forms(type) {
  const loginFormArray = [];
  const registerFormArray = [];

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  function onChange(event) {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  registerFields.forEach((field, i) => {
    if (field.inputType === 'text') {
      registerFormArray.push(
        <div className="form-group" key={i}>
          <input
            type="text"
            key={i}
            name={field.fieldName}
            placeholder={field.fieldPlaceholder}
            value={inputs.fieldName}
            onChange={onChange}
            className={
              'form-control' +
              (submitted && !inputs[field.fieldName] ? ' is-invalid' : '')
            }
          />
          {submitted && !inputs[field.fieldName] && (
            <div className="invalid-feedback">{field.invalidFeedback}</div>
          )}
        </div>
      );
    } else if (field.inputType === 'btn') {
      registerFormArray.push(
        <button className="btn btn-primary" key={i}>
          {field.fieldPlaceholder}
        </button>
      );
    } else {
      registerFormArray.push(
        <Link to={routePaths.home} className="btn btn-link" key={i}>
          {field.fieldPlaceholder}
        </Link>
      );
    }
  });

  loginFields.forEach((field, i) => {
    if (field.inputType === 'text') {
      loginFormArray.push(
        <div className="form-group" key={i}>
          <input
            type="text"
            key={i}
            name={field.fieldName}
            placeholder={field.fieldPlaceholder}
            value={inputs.fieldName}
            onChange={onChange}
            className={
              'form-control' +
              (submitted && !inputs[field.fieldName] ? ' is-invalid' : '')
            }
          />
          {submitted && !inputs[field.fieldName] && (
            <div className="invalid-feedback">{field.invalidFeedback}</div>
          )}
        </div>
      );
    } else if (field.inputType === 'btn') {
      loginFormArray.push(
        <button className="btn btn-primary" key={i}>
          {field.fieldPlaceholder}
        </button>
      );
    } else {
      loginFormArray.push(
        <Link to={routePaths.register} className="btn btn-link" key={i}>
          {field.fieldPlaceholder}
        </Link>
      );
    }
  });

  if (type === 'loginForm') {
    function onSubmit(event) {
      event.preventDefault();
      setSubmitted(true);
      if (
        inputs.hasOwnProperty('username') === true &&
        inputs.hasOwnProperty('password') === true
      ) {
        dispatch(loginActions.login(inputs.username, inputs.password));
      }
    }

    return (
      <div className="col-lg-4 offset-lg-4">
        <h2>Login</h2>
        <form name="form" onSubmit={onSubmit}>
          {loginFormArray}
        </form>
      </div>
    );
  } else {
    function onSubmit(event) {
      event.preventDefault();

      setSubmitted(true);
      console.log(submitted);
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.username &&
        inputs.password
      ) {
        dispatch(
          registerActions.register(
            inputs.firstName,
            inputs.lastName,
            inputs.username,
            inputs.password
          )
        );
      }
    }

    return (
      <div className="col-lg-4 offset-lg-4">
        <h2>Register</h2>
        <form name="form" onSubmit={onSubmit}>
          {registerFormArray}
        </form>
      </div>
    );
  }
}

export default Forms;
