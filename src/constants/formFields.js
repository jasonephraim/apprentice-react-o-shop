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

const newProductForm = [
  {
    fieldName: 'title',
    inputType: 'text',
    fieldPlaceholder: 'Title',
    invalidFeedback: 'Product title is required',
  },
  {
    fieldName: 'price',
    inputType: 'currency',
    fieldPlaceholder: 'Price',
    invalidFeedback: 'Product price is required',
  },
  {
    fieldName: 'category',
    inputType: 'dropdown',
    fieldPlaceholder: 'Category',
    invalidFeedback: 'Product category is required',
  },
  {
    fieldName: 'imageURL',
    inputType: 'text',
    fieldPlaceholder: 'Image URL',
    invalidFeedback: 'Product image URL is required',
  },
  {
    fieldName: 'save',
    inputType: 'btn',
    fieldPlaceholder: 'Save',
    invalidFeedback: '',
  },
];

export const registerFields = registerForm;
export const loginFields = loginForm;
export const newProductFields = newProductForm;
