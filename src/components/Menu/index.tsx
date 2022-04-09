import { FC } from "react";
import Menu, { MenuProps } from "./Menu";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

export type IMenuComponent = FC<MenuProps> & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
};
const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
