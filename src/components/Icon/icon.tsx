import React from "react";
import classNames from "classnames";
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
export type Themeprops = 'primary'|'secondary'|'success'|'info'|'warning'|"danger";

export interface IconProps extends FontAwesomeIconProps{
    theme?:Themeprops
}

const Icon:React.FC<IconProps> = (props)=>{
    const {className,theme,...restProps} = props
    const classes = classNames('pusu-icon',className,{
        [`icon-${theme}`]:theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}

export default Icon;