import React from "react";
import classNames from "classnames";

import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
export type ThemeProps = 'primary'|'secondary'|'success'|'info'|'warning'|"danger";

library.add(fas);
export interface IconProps extends FontAwesomeIconProps{
    theme?:ThemeProps
}

const Icon:React.FC<IconProps> = (props)=>{
    const prefixCls = "pusu-icon";
    const {className,theme,icon,...restProps} = props
    const classes = classNames(prefixCls,className,{
        [`icon-${theme}`]:theme,
        [`${prefixCls}-loading`]: icon === "spinner",
    })
    return (
        <FontAwesomeIcon icon={icon} className={classes} {...restProps}/>
    )
}

export default Icon;