## Tabs 标签页

### 基础使用

```tsx
import React from "react";
import { Tabs, TabsItem } from "/src/index";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Tabs defaultIndex={0}>
      <TabsItem label="card1">this is card one</TabsItem>
      <TabsItem label="card2">this is content two</TabsItem>
      <TabsItem label="disabled">this is content three</TabsItem>
    </Tabs>
  </>
);
```
