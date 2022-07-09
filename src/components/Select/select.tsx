import React, { ChangeEvent, createContext, FC, useRef, useState } from "react";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";
import Transition from "../Transition";
import Input from "../Input";
import { OptionProps } from "./option";

type ItemType = Record<string, string>;

export interface SelectProps {
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface ISelectContext {
  value?: string;
  index?: string;
  onSelect?: (value: ItemType) => void;
  onShowOption?: (visible: boolean) => void;
}

export const SelectContext = createContext<ISelectContext>({ index: "0" });

export const Select: FC<SelectProps> = (props) => {
  const {
    disabled,
    children,
    onChange,
    style,
    defaultValue,
    placeholder,
  } = props;
  const [showOption, setShowOption] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);
  const componentRef = useRef<HTMLDivElement>(null);

  useClickOutside(componentRef, () => {
    setShowOption(false);
  });

  const handleClick = (item: ItemType) => {
    setInputValue(item.key as string);
    onChange &&
      onChange((item.key as unknown) as ChangeEvent<HTMLInputElement>);
  };

  const handleShowOption = (visible: boolean) => {
    setShowOption(visible);
  };

  const passedContext: ISelectContext = {
    onSelect: handleClick,
    onShowOption: handleShowOption,
    value: inputValue,
  };

  const RenderChildren = () => {
    const classnames = classNames("pusu-select-option-list");
    return (
      <Transition in={showOption} timeout={300} animation="zoom-in-top">
        <ul className={classnames}>
          {React.Children.map(children, (child) => {
            const childElement = child as React.FunctionComponentElement<OptionProps>;
            return React.cloneElement(childElement);
          })}
        </ul>
      </Transition>
    );
  };

  return (
    <div style={style} className="pusu-select" ref={componentRef}>
      <SelectContext.Provider value={passedContext}>
        <Input
          style={{ caretColor: "transparent" }}
          onChange={onChange}
          icon="angle-down"
          disabled={disabled}
          placeholder={placeholder}
          onClick={() => setShowOption(true)}
          value={inputValue}
        />
        {RenderChildren()}
      </SelectContext.Provider>
    </div>
  );
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
