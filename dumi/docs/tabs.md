## Tabs 标签页

### 基础使用

```tsx
import React from "react";
import { Tabs, TabsItem } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Tabs defaultIndex={0}>
      <TabsItem label="Tab1">Content of Tab Pane 1</TabsItem>
      <TabsItem label="Tab2">Content of Tab Pane 2</TabsItem>
      <TabsItem label="Tab3">Content of Tab Pane 3</TabsItem>
    </Tabs>
  </>
);
```

### 卡片类型 Tabs

```tsx
import React from "react";
import { Tabs, TabsItem } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Tabs styleType="outline">
      <TabsItem label="Card Tab 1">Content of Card Tab 1</TabsItem>
      <TabsItem label="Card Tab 2">Content of Card Tab 2</TabsItem>
      <TabsItem label="Card Tab 3" disabled>
        Content of Card Tab 3
      </TabsItem>
    </Tabs>
  </>
);
```

### 自定义图标 Tabs

```tsx
import React from "react";
import { Tabs, TabsItem, Icon } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Tabs styleType="outline">
      <TabsItem
        label={
          <>
            <Icon icon="exclamation-circle" />
            Card Tab 1
          </>
        }
      >
        Content of Card Tab Pane 1
      </TabsItem>
      <TabsItem label="Card Tab 2">Content of Card Tab Pane 2</TabsItem>
    </Tabs>
  </>
);
```
