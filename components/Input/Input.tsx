import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  title?: string;
  type?: "User" | "Regular" | "checkbox";
  className?: string;
  value?: string | number;
  onChange: (any) => void;
};

const Input = ({ title, type, className, value, onChange }: InputProps) => {
  const setInputClass = () => {
    let inputClasses = styles.main;
    if (type === "User") inputClasses += ` ${styles.user}`;
    if (type === "checkbox") inputClasses += ` ${styles.checkbox}`;
    if (className) inputClasses += ` ${className}`;

    return inputClasses;
  };

  return (
    <input
      className={setInputClass()}
      placeholder={title}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
