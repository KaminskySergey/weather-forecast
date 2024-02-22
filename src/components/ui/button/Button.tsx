import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onToggle?: () => void
}

const Button: React.FC<ButtonProps> = ({onToggle, children, ...props }) => {
  const baseStyles = 'font-bold w-full h-10 py-2 px-4 rounded-md focus:outline-none transition duration-300 hover:scale-100 flex justify-center	items-center';
  const buttonStyles = clsx(baseStyles, {
    
  });

  return (
    <button onClick={onToggle} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;