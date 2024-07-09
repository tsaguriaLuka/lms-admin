import React, {
  CSSProperties,
  MouseEvent
} from "react";

import styles from './index.module.scss';
import classNames from "classnames/bind";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  secondary?: boolean;
  link?: boolean;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  type= 'button',
  onClick,
  disabled,
  className,
  style,
  secondary= false,
  link= false,
  children,
}) => {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
      className={
       classNames(
         className,
         styles.Button,
         secondary && styles['Button--secondary'],
         link && styles['Button--link'],
       )
      }
      style={ style }
    >
      { children }
    </button>
  );
};

export default Button;
