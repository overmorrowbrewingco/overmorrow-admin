import React from 'react';

const CustomerNewHeaderWrapper: React.FC = ({ children }) => (
  <div className="card-header">
    <h3 className="card-title">{children}</h3>
  </div>
);

export default CustomerNewHeaderWrapper;
