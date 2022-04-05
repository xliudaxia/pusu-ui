## Icon 图标

### 基础使用

```tsx
import React from "react";
import { Icon, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LineBox = (props) => <span style={{ margin: 20 }}>{props.children}</span>;

export default () => (
  <>
    <LineBox>
      <Icon icon="check" size="3x" />
    </LineBox>
    <LineBox>
      <Icon icon="anchor" size="3x" />
    </LineBox>
    <LineBox>
      <Icon icon="trash" size="3x" />
    </LineBox>
    <LineBox>
      <Icon icon="times" size="3x" />
    </LineBox>
    <br />
    <br />
    <br />
    <LineBox>
      <Button btnType="primary" disabled={false} size="lg">
        <Icon icon="check" />
        默认选中
      </Button>
    </LineBox>
  </>
);
```

### 不同主题的 Icon

```tsx
import React from "react";
import { Icon, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LineBox = (props) => <span style={{ margin: 20 }}>{props.children}</span>;

export default () => (
  <>
    <LineBox>
      <Icon icon="check" size="3x" theme="success" />
    </LineBox>
    <LineBox>
      <Icon icon="times" size="3x" theme="danger" />
    </LineBox>
    <LineBox>
      <Icon icon="anchor" size="3x" theme="primary" />
    </LineBox>
    <LineBox>
      <Icon icon="exclamation-circle" size="3x" theme="warning" />
    </LineBox>
  </>
);
```

### 不同行为的 Icon

```tsx
import React from "react";
import { Icon, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LineBox = (props) => <span style={{ margin: 20 }}>{props.children}</span>;

export default () => (
  <>
    <LineBox>
      <Icon icon="spinner" size="3x" spin theme="primary" />
    </LineBox>
    <LineBox>
      <Icon icon="spinner" pulse size="3x" theme="success" />
    </LineBox>
  </>
);
```
