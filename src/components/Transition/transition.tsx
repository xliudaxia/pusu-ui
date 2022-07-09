import classNames from "classnames";
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps<
  Ref extends HTMLElement | undefined = undefined
> = CSSTransitionProps<Ref> & {
  animation?: AnimationName;
  wrapper?: boolean;
};

const Transition: FC<TransitionProps> = (props) => {
  const { children, className, animation, wrapper, ...restProps } = props;
  return (
    <CSSTransition
      classNames={animation ? classNames(className,animation) : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
