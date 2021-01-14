const similarFields = [
  {
    fieldName: 'username',
    inputType: 'text',
    fieldPlaceholder: 'Username',
    invalidFeedback: 'Username is required',
  },
  {
    fieldName: 'password',
    inputType: 'text',
    fieldPlaceholder: 'Password',
    invalidFeedback: 'Password is required',
  },
];

const registerForm = [
  ...similarFields,
  {
    fieldName: 'firstName',
    inputType: 'text',
    fieldPlaceholder: 'First Name',
    invalidFeedback: 'First name is required',
  },
  {
    fieldName: 'lastName',
    inputType: 'text',
    fieldPlaceholder: 'Last Name',
    invalidFeedback: 'Last name is required',
  },
  {
    fieldName: 'registerbtn',
    inputType: 'btn',
    fieldPlaceholder: 'Register',
    invalidFeedback: '',
  },
  {
    fieldName: 'cancel',
    inputType: 'link',
    fieldPlaceholder: 'Cancel',
    invalidFeedback: '',
  },
];

const loginForm = [
  ...similarFields,
  {
    fieldName: 'login',
    inputType: 'btn',
    fieldPlaceholder: 'Login',
    invalidFeedback: '',
  },
  {
    fieldName: 'register',
    inputType: 'link',
    fieldPlaceholder: 'Register',
    invalidFeedback: '',
  },
];

export const registerFields = registerForm;
export const loginFields = loginForm;
