## Menu 导航菜单

### 基础使用

```tsx
import React from "react";
import { Menu } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Menu onSelect={(index) => console.log("current-index-", index)}>
      <Menu.Item>选项一</Menu.Item>
      <Menu.Item>选项二</Menu.Item>
      <Menu.Item disabled>disabled menu</Menu.Item>
      <Menu.SubMenu title="下拉选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

### 竖型 Menu

```tsx
import React from "react";
import { Menu } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Menu
      mode="vertical"
      onSelect={(index) => console.log("current-index-", index)}
    >
      <Menu.Item>选项一</Menu.Item>
      <Menu.Item>选项二</Menu.Item>
      <Menu.SubMenu title="点击展开选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```

### 默认展开竖型 Menu

```tsx
import React from "react";
import { Menu } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Menu
      mode="vertical"
      defaultOpenSubMenus={["2"]}
      onSelect={(index) => console.log("current-index-", index)}
    >
      <Menu.Item>选项一</Menu.Item>
      <Menu.Item>选项二</Menu.Item>
      <Menu.SubMenu title="默认展开下拉选项">
        <Menu.Item>下拉选项一</Menu.Item>
        <Menu.Item>下拉选项二</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
);
```
