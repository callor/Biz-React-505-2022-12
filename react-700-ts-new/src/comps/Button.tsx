import React, { ReactNode } from "react";
interface ButtonProps {
  name: string;
  value: string;
  children: ReactNode;
}

const Button = ({ name, value, children }: ButtonProps) => {
  return (
    <button name={name} value={value}>
      {children}
    </button>
  );
};
export default Button;
