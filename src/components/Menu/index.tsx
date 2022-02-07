/*
 * @Author: jessLiu
 * @Date: 2022-02-03 22:11:05
 * @LastEditTime: 2022-02-03 22:17:51
 * @LastEditors: liuwenhao
 * @Description:
 * @FilePath: /vikingship/src/components/Menu/index.tsx
 */

import Menu, { MenuProps } from "./Menu";
import { FC } from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";
import SubMenu, { SubMenuProps } from "./SubMenu";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
