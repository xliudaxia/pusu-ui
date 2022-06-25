## Button 按钮

### 不同类型的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => (
  <span style={{ padding: 10 }}>{props.children}</span>
);
const LayoutCSS = { marginBottom: 20, marginRight: 20 };

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => (
  <>
    <Button style={LayoutCSS} btnType="default">
      Default
    </Button>
    <Button style={LayoutCSS} btnType="primary">
      Primary
    </Button>
    <Button style={LayoutCSS} btnType="danger">
      Danger
    </Button>
    <Button style={LayoutCSS} btnType="link" href="https://www.baidu.com">
      Link
    </Button>
    <br/>
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

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

export default () => (
  <>
    <Button style={LayoutCSS} size="lg">
      Big Button
    </Button>
    <Button style={LayoutCSS}>Default Button</Button>
    <Button size="sm" style={LayoutCSS}>
      Small Button
    </Button>
  </>
);
```

### 带图标的 Button

参见：[支持图标列表](https://fontawesome.com/search?p=7&m=free&s=solid)

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => (
  <>
    <Button style={LayoutCSS} icon="frog" btnType="primary">
      Primary
    </Button>
    <Button style={LayoutCSS} icon="bookmark" btnType="default">
      Default
    </Button>
    <Button style={LayoutCSS} icon="fire" btnType="danger">
      Danger
    </Button>
    <br/>
    <GhostGrid>
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

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button style={LayoutCSS} loading btnType="primary">
        Primary
      </Button>
      <Button style={LayoutCSS} loading btnType="default">
        Default
      </Button>
      <Button style={LayoutCSS} loading btnType="danger">
        Danger
      </Button>
      <Button
        style={LayoutCSS}
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
      <br/>
      <GhostGrid>
        <Button loading btnType="ghost">
          Ghost
        </Button>
      </GhostGrid>
    </>
  );
};
```

### 禁用状态的 Button

```tsx
import React from "react";
import { Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

const GhostGrid = (props) => (
  <span
    style={{
      background: "gray",
      borderRadius: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 13,
      paddingBottom: 17,
    }}
  >
    {props.children}
  </span>
);

export default () => (
  <>
    <Button style={LayoutCSS} disabled btnType="primary">
      Primary
    </Button>
    <Button style={LayoutCSS} disabled btnType="default">
      Default
    </Button>
    <Button style={LayoutCSS} disabled btnType="danger">
      Danger
    </Button>
    <Button
      style={LayoutCSS}
      disabled
      btnType="link"
      href="https://www.google.com"
    >
      Link
    </Button>
    <br/>
    <GhostGrid>
      <Button disabled btnType="ghost">
        Ghost
      </Button>
    </GhostGrid>
  </>
);
```
