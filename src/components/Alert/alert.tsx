import React, { FC, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon";

export type AlertType =
  | "success"
  | "primary"
  | "warning"
  | "danger"
  | "default";
export interface AlertProps {
  title?: string;
  closeable?: boolean;
  customClose?: string;
  onClose?: () => void;
  type: AlertType;
}

export const Alert: FC<AlertProps> = (props) => {
  const { title, closeable, type, customClose, onClose, children } = props;
  const [visible, setVisible] = useState(true);
  const classes = classNames("alert", {
    [`alert-${type}`]: type,
  });
  const customCloseP = customClose || (
    <Icon icon="times" className="window-close" size="lg" />
  );

  const handleClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  return visible ? (
    <div className={classes}>
      {title ? <h4 className="alert-title">{title}</h4> : null}
      <p className="alert-message">{children}</p>
      {closeable ? <i onClick={handleClick}>{customCloseP}</i> : null}
    </div>
  ) : null;
};

Alert.defaultProps = {
  closeable: true,
  type: "primary",
};

export default Alert;
