import React from 'react';

import history from '../utils/history';
import routePaths from '../constants/routePaths';

function adminProducts() {
  return (
    <div>
      <h1>AdminProducts Works!</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          history.push(routePaths.newProduct);
        }}
      >
        New Product
      </button>
    </div>
  );
}

export default adminProducts;
