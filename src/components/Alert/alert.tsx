import React, { FC, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Themeprops } from "../Icon/icon";

export type AlertType =
  | "success"
  | "primary"
  | "warning"
  | "danger"
  | "default";

export interface AlertProps {
  className?: string;
  message?: string;
  closeable?: boolean;
  customClose?: string;
  icon?: IconProp;
  iconTheme?: Themeprops;
  onClose?: () => void;
  type: AlertType;
}

export const Alert: FC<AlertProps> = (props) => {
  const {
    message,
    className,
    closeable,
    type,
    customClose,
    onClose,
    icon,
    iconTheme,
    children,
    ...restProps
  } = props;
  const [visible, setVisible] = useState(true);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });

  const customCloseP = customClose || (
    <Icon icon="times" className="window-close" size="lg" />
  );

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return visible ? (
    <div className={classes} {...restProps}>
      {icon ? (
        <Icon icon={icon} theme={iconTheme} style={{ marginRight: 10 }} />
      ) : null}
      {message ? <span className="alert-message">{message}</span> : null}

      <p className="alert-description">{children}</p>
      {closeable ? <i onClick={handleClose}>{customCloseP}</i> : null}
    </div>
  ) : null;
};

Alert.defaultProps = {
  closeable: false,
  type: "primary",
};

export default Alert;
