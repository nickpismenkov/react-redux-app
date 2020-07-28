import React from 'react';

const Alert = ({ text }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  );
};

export { Alert };
