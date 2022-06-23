## Button 按钮

### 不同类型的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Button btnType="primary">Primary</Button>
    </GridBox>
    <GridBox>
      <Button btnType="default">Default</Button>
    </GridBox>
    <GridBox>
      <Button btnType="danger">Danger</Button>
    </GridBox>
    <GridBox>
      <Button btnType="link" href="https://www.google.com">
        Link
      </Button>
    </GridBox>
  </>
);
```

### 不同大小的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Button size="lg">Big Button</Button>
    </GridBox>
    <GridBox>
      <Button>Default Button</Button>
    </GridBox>
    <GridBox>
      <Button size="sm">Small Button</Button>
    </GridBox>
  </>
);
```

### 禁用的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Button disabled btnType="primary">
        Primary
      </Button>
    </GridBox>
    <GridBox>
      <Button disabled btnType="default">
        Default
      </Button>
    </GridBox>
    <GridBox>
      <Button disabled btnType="danger">
        Danger
      </Button>
    </GridBox>
    <GridBox>
      <Button disabled btnType="link" href="https://www.google.com">
        Link
      </Button>
    </GridBox>
  </>
);
```
