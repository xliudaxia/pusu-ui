## Alert 警告提示

### 不同类型的 Alert

```tsx
import React from "react";
import { Alert } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Alert type="success" closable title="这是成功的提示！" />
    </GridBox>
    <GridBox>
      <Alert type="danger" closable title="这是危险的提示!" />
    </GridBox>
    <GridBox>
      <Alert type="warning" closable={false} title="这是警告的提示!" />
    </GridBox>
    <GridBox>
      <Alert
        type="primary"
        closable
        title="提示标题"
        children="这是自定义children的提示"
        onClose={function noRefCheck() {}}
      />
    </GridBox>
  </>
);
```
