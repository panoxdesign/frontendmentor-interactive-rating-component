import React, { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: string;
};

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
