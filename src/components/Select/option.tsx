import classNames from "classnames";
import React, { FC, useContext, useState } from "react";
import { SelectContext } from "./select";

export interface OptionProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Option: FC<OptionProps> = (props) => {
  const { value, disabled, children, ...rest } = props;
  const context = useContext(SelectContext);
  const [hover, setHover] = useState(false);

  const handleOptionItem = (e: any) => {
    const _value = e.target.innerHTML;
    if (!props.disabled) {
      context.onSelect && context.onSelect({ key: value, value: _value });
      context.onShowOption && context.onShowOption(false);
    }
  };

  const classnames = classNames("pusu-select-option-list-item", {
    "is-active": value === context.value,
    "is-hover": hover,
    "is-disabled": disabled,
  });
  return (
    <li
      className={classnames}
      onMouseOver={() => {
        if (!disabled) {
          setHover(true);
        }
      }}
      onMouseLeave={() => setHover(false)}
      onClick={handleOptionItem}
      {...rest}
    >
      {children}
    </li>
  );
};

export default Option;
