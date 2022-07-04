import React, { FC } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Icon from "../Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ThemeProps } from "../Icon/icon";
import { MessageContainer } from "./container";

export type MeesageType = "success" | "info" | "warning" | "loading" | "error";

export interface ShowProps {
  // 按钮类型
  type?: MeesageType;
  // 文案内容
  content: string;
  // 持续时间
  duration?: number;
  // 图标
  icon?: IconProp;
  // 关闭时回调函数
  onClose?: () => void;
}

export interface MessageProps {
  // 是否显示
  visible: boolean;
  // message内容
  children: React.ReactChild;
  // message类型
  type?: MeesageType;
  // 自定义图标
  icon?: IconProp;
  // 自定义图标主题
  iconTheme?: ThemeProps;
}

const prefixCls = "pusu-message";

export const Message: FC<MessageProps> & {
  success: (props: ShowProps) => void;
  info: (props: ShowProps) => void;
  warning: (props: ShowProps) => void;
  error: (props: ShowProps) => void;
  loading: (props: ShowProps) => void;
} = (props) => {
  const { type, visible, icon, iconTheme, children } = props;
  const getIconType = (type?: string) => {
    switch (type) {
      case "success":
        return { icon: "check-circle", theme: "success" };
      case "warning":
        return { icon: "exclamation-circle", theme: "warning" };
      case "info":
        return { icon: "info-circle", theme: "info" };
      case "loading":
        return { icon: "spinner", theme: "primary" };
      case "error":
        return { icon: "times-circle", theme: "danger" };
      default:
        return { icon: "check-circle", theme: "success" };
    }
  };

  const MessageDOM = (
    <div className={`${prefixCls}`}>
      <div
        className={classNames(`${prefixCls}-wrapper`, {
          [`${prefixCls}-open`]: visible,
          [`${prefixCls}-close`]: !visible,
        })}
      >
        <div className={`${prefixCls}-content`}>
          {icon ? (
            <Icon icon={icon} theme={iconTheme} style={{ marginRight: 5 }} />
          ) : (
            <Icon
              icon={getIconType(type).icon as IconProp}
              theme={getIconType(type).theme as ThemeProps}
              style={{ marginRight: 5 }}
            />
          )}
          <span className={`${prefixCls}-text`}>{children}</span>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(MessageDOM, document.body);
};

let containerNode: HTMLElement | null;
// @ts-ignore
const getContainerNode: () => HTMLElement = () => {
  if (!containerNode) {
    const $root = document.getElementById("pusu-message-container");
    if ($root) {
      containerNode = $root;
      return $root;
    }
    const $f = document.createDocumentFragment();
    ReactDOM.render(<MessageContainer />, $f);
    document.body.appendChild($f);
    containerNode = document.getElementById("pusu-message-container");
    return containerNode;
  }
  return containerNode;
};

const renderElement = (props: ShowProps) => {
  const { type, content, icon, duration = 3, onClose } = props;
  const container = getContainerNode();
  const MessageDOM = (
    <Message visible icon={icon} type={type}>
      {content}
    </Message>
  );
  const realDOM = document.createElement("div");
  let isDestroyed = false;
  const close = () => {
    if (isDestroyed) {
      return false;
    }
    ReactDOM.unmountComponentAtNode(realDOM);
    container.removeChild(realDOM);
    isDestroyed = true;
    return true;
  };
  ReactDOM.render(MessageDOM, realDOM);
  container.appendChild(realDOM);
  new Promise((resolve) => {
    const timer = setTimeout(() => {
      close();
      onClose && onClose();
      clearTimeout(timer);
      return resolve(undefined);
    }, duration * 1000 + 500);
  });
};

Message.success = ({ ...props }: ShowProps) =>
  renderElement({ type: "success", ...props });
Message.info = ({ ...props }: ShowProps) =>
  renderElement({ type: "info", ...props });
Message.warning = ({ ...props }: ShowProps) =>
  renderElement({ type: "warning", ...props });
Message.loading = ({ ...props }: ShowProps) =>
  renderElement({ type: "loading", ...props });
Message.error = ({ ...props }: ShowProps) =>
  renderElement({ type: "error", ...props });
