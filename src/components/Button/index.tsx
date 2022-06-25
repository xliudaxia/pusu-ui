import React from "react";
import classNames from "classnames";
import Icon,{ ThemeProps } from "../Icon/icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default"|"danger"|"link"|"ghost";

const prefixCls = "pusu-btn";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  loading?:boolean;
  icon?: IconProp;
  iconTheme?:ThemeProps;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> &
  BaseButtonProps;
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href,loading,icon,iconTheme, ...rest } = props;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${btnType}`]: btnType,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-loading`]: loading,
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
        {loading ? (
          <Icon icon="spinner" theme={iconTheme} style={{ marginRight: 5 }} />
        ) : icon ? (
          <Icon icon={icon} theme={iconTheme} style={{ marginRight: 5 }} />
        ) : null}
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
