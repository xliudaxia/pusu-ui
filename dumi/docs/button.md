## Button 按钮

### 不同类型的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ padding: 10 }}>{props.children}</span>
);

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 15,
      marginLeft:10,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => (
  <>
    <GridBox>
      <Button btnType="default">Default</Button>
    </GridBox>
    <GridBox>
      <Button btnType="primary">Primary</Button>
    </GridBox>
    <GridBox>
      <Button btnType="danger">Danger</Button>
    </GridBox>
    <GridBox>
      <Button btnType="link" href="https://www.baidu.com">
        Link
      </Button>
    </GridBox>
    <GhostGrid>
      <Button btnType="ghost">Ghost</Button>
    </GhostGrid>
  </>
);
```

### 不同大小的 Button

提供了<code>size</code>参数，可以传递<code>lg</code>或<code>sm</code>参数，控制按钮大小。

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ ...{ padding: 10 }, ...props.style }}>{props.children}</span>
);

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

### 带图标的 Button
参见：[支持图标列表](https://fontawesome.com/search?p=7&m=free&s=solid)
```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ padding: 10 }}>{props.children}</span>
);

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 15,
      marginLeft:10,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => (
  <>
    <GridBox>
      <Button icon="frog" btnType="primary">
        Primary
      </Button>
    </GridBox>
    <GridBox>
      <Button icon="bookmark" btnType="default">
        Default
      </Button>
    </GridBox>
    <GridBox>
      <Button icon="fire" btnType="danger">
        Danger
      </Button>
    </GridBox>
    <GhostGrid
    >
      <Button icon="ghost" btnType="ghost">
        Ghost
      </Button>
    </GhostGrid>
  </>
);
```

### 加载中的 Button

```tsx
import React, { useState } from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ ...{ padding: 10 }, ...props.style }}>{props.children}</span>
);

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <GridBox>
        <Button loading btnType="primary">
          Primary
        </Button>
      </GridBox>
      <GridBox>
        <Button loading btnType="default">
          Default
        </Button>
      </GridBox>
      <GridBox>
        <Button loading btnType="danger">
          Danger
        </Button>
      </GridBox>
      <GridBox
        style={{
          background: "gray",
          borderRadius: 5,
          paddingTop: 12,
          paddingBottom: 16,
        }}
      >
        <Button loading btnType="ghost">
          Ghost
        </Button>
      </GridBox>
      <GridBox style={{ display: "block", marginTop: 10 }}>
        <Button
          icon="splotch"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
          loading={loading}
          btnType="primary"
        >
          点击试试
        </Button>
      </GridBox>
    </>
  );
};
```

### 禁用状态的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ ...{ padding: 10 }, ...props.style }}>{props.children}</span>
);

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

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
      <Button btnType="danger">Danger</Button>
    </GridBox>
    <GridBox>
      <Button disabled btnType="link" href="https://www.google.com">
        Link
      </Button>
    </GridBox>
    <GhostGrid>
      <Button disabled btnType="ghost">
        Ghost
      </Button>
    </GhostGrid>
  </>
);
```
