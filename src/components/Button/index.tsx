import classNames from "classnames";
import React from "react";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default"|"danger"|"link";

const prefixCls = "pusu-btn";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> &
  BaseButtonProps;
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...rest } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType}`]: btnType,
    [`${prefixCls}-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
  href:"https://www.baidu.com"
};

export default Button;
