import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  registerFields,
  loginFields,
  newProductFields,
} from '../constants/formFields';
import productCategories from '../constants/productCategories';
import routePaths from '../constants/routePaths';
import { loginActions } from '../store/login/action';
import { productActions } from '../store/products/action';
import { registerActions } from '../store/register/action';

function Forms(type) {
  const loginFormArray = [];
  const registerFormArray = [];
  const newProductFormArray = [];
  const categoriesArray = [];

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    title: '',
    price: '',
    category: '',
    imageURL: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  productCategories.forEach((category, i) => {
    categoriesArray.push(
      <option
        name={category.categoryName}
        id={category.categoryID}
        key={i}
        value={category.categoryID}
      >
        {category.categoryName}
      </option>
    );
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

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

  newProductFields.forEach((field, i) => {
    if (field.inputType === 'text') {
      newProductFormArray.push(
        <div className="form-group" key={i}>
          <label htmlFor={field.fieldName}>{field.fieldPlaceholder}</label>
          <input
            type="text"
            key={i}
            name={field.fieldName}
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
    } else if (field.inputType === 'currency') {
      newProductFormArray.push(
        <div className="form-group" key={i}>
          <label htmlFor={field.fieldName}>Price</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              id={field.fieldName}
              key={i}
              name={field.fieldName}
              placeholder="0.00"
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
        </div>
      );
    } else if (field.inputType === 'btn') {
      newProductFormArray.push(
        <button className="btn btn-primary" key={i}>
          {field.fieldPlaceholder}
        </button>
      );
    } else {
      newProductFormArray.push(
        <div className="form-group" key={i}>
          <label htmlFor={field.fieldName}>{field.fieldPlaceholder}</label>
          <select
            id={field.fieldName}
            onChange={onChange}
            name={field.fieldName}
            className="form-control"
          >
            {categoriesArray}
          </select>
        </div>
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
  } else if (type === 'registerForm') {
    function onSubmit(event) {
      event.preventDefault();

      setSubmitted(true);
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
  } else {
    function onSubmit(event) {
      event.preventDefault();

      setSubmitted(true);
      if (inputs.title && inputs.price && inputs.category && inputs.imageURL) {
        dispatch(
          productActions.addProduct([
            inputs.title,
            inputs.price,
            inputs.category,
            inputs.imageURL,
          ])
        );
      }
    }

    return (
      <div className="col-lg-4 offset-lg-4">
        <h2>Product Form</h2>
        <form name="form" onSubmit={onSubmit}>
          {newProductFormArray}
        </form>
      </div>
    );
  }
}

export default Forms;
