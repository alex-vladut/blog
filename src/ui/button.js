import React from 'react';

import './button.css';

export const Button = ({ children, submit }) => (
  <button type={submit ? 'submit' : 'button'} className="btn">
    {children}
  </button>
);
