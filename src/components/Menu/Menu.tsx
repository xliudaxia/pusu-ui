import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem'
type MenuMode = 'horizontal' | 'vertical'

type selectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallback;
    defaultOpenSubMenus?:string[];
}


interface IMenuContextProps {
    index: string;
    onSelect?: selectCallback;
    mode?: MenuMode,
    defaultOpenSubMenus?:string[];
}
export const MenuContext = createContext<IMenuContextProps>({
    index:'0'
})

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect,defaultOpenSubMenus } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const classes = classNames('pusu-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
    const handleClick = (index: string) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    }

    const passedContext: IMenuContextProps = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                  index:index.toString()
                });
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem Component')
            }

        })
    }


    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus:[]
}

export default Menu; 