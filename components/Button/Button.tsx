import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick?: () => void;
  title: string;
  type?: "Login" | "Regular" | "Upgrade";
  className?: string;
};

const Button = ({ onClick, title, type, className }: ButtonProps) => {
  const setBtnClass = () => {
    let buttonClasses = styles.main;
    if (type === "Login") buttonClasses += ` ${styles.login}`;
    if (type === "Regular") buttonClasses += ` ${styles.login}`;
    if (type === "Upgrade") buttonClasses += ` ${styles.login}`;
    if (className) buttonClasses += ` ${className}`;
    return buttonClasses;
  };

  return (
    <button className={setBtnClass()} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
