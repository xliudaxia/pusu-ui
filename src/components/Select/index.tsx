import { FC } from "react";
import Option, { OptionProps } from "./option";
import Select, { SelectProps } from "./select";

export type ISelectComponent = FC<SelectProps> & {
  Option: FC<OptionProps>;
};

const TransferSelect = Select as ISelectComponent;

TransferSelect.Option = Option;

export default TransferSelect;
