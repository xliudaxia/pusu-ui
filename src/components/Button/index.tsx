import classNames from "classnames";
import React from "react";

export enum ButtonSize {
  Large = "lg",
  Smaill = "sm",
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { className, disabled, size, btnType, children } = props;
  const classes = classNames()
};

export default Button;
