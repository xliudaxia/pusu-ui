import React, { FC, InputHTMLAttributes, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  // 是否禁用
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
}
export const Input: FC<InputProps> = (props) => {
  // 取出各种属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const cnames = classNames("pusu-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  // 根据属性计算不同的className
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    // 根据属性判断是否要添加特定节点
    <div className={cnames} style={style}>
      {prepend && <div className="pusu-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="pusu-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="pusu-input-group-append">{append}</div>}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
};