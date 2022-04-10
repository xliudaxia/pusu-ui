import React, { FC } from "react";
import classNames from "classnames";

export interface TabsItemProps {
  label: any;
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
}

export const TabsItem: FC<TabsItemProps> = (props) => {
  const classes = classNames("tabs-content", props.className, {
    "tabs-content-active": props.isActive,
  });

  return (
    <div key={props.label} className={classes}>
      {props.children}
    </div>
  );
};

TabsItem.defaultProps = {
  disabled: false,
  isActive: false,
};

TabsItem.displayName = "TabsItem";
export default TabsItem;
