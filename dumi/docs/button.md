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
      <Button btnType="primary">Primary button</Button>
    </GridBox>
    <GridBox>
      <Button btnType="default">Default Button</Button>
    </GridBox>
    <GridBox>
      <Button btnType="danger">Danger button</Button>
    </GridBox>
    <GridBox>
      <Button btnType="link" href="https://www.google.com">
        Link button
      </Button>
    </GridBox>
  </>
);
```

### 不同尺寸的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Button size="lg">大按钮</Button>
    </GridBox>
    <GridBox>
      <Button>默认大小</Button>
    </GridBox>
    <GridBox>
      <Button size="sm">小按钮</Button>
    </GridBox>
  </>
);
```
