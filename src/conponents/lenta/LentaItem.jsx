import React from 'react';

const LentaItem = ({ children, className }) => (
  <div className={`lebta__item ${className || ''}`}>
    {children}
  </div>
);

export default LentaItem;
