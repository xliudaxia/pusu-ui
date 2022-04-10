## Tabs 标签页

### 基础使用

```tsx
import React from "react";
import Tabs from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Tabs defaultIndex={0}>
      <Tabs.Item label="card1">this is card one</Tabs.Item>
      <Tabs.Item label="card2">this is content two</Tabs.Item>
      <Tabs.Item label="disabled">this is content three</Tabs.Item>
    </Tabs>
  </>
);
```
