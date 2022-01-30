import React, { createContext, useState } from 'react';
import classNames from 'classnames';
type MenuMode = 'horizontal' | 'vertical'

type selectCallback = (selectedIndex: number) => void;
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: selectCallback
}


interface IMenuContextProps {
    index: number;
    onSelect?: selectCallback;
}
export const MenuContext = createContext<IMenuContextProps>({
    index: 0
})

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props;
    const [currentActive, setCurrentActive] = useState(defaultIndex)
    const classes = classNames('pusu-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const handleClick = (index: number) => {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    }

    const passedContext: IMenuContextProps = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu; 