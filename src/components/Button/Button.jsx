import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button className={`bg-orange rounded-lg  ${className} text-white-100`}>
      {text}
    </button>
  );
};

export default Button;
