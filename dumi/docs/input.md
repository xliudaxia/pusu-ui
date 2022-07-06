## Input 输入框

### 基本使用

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="请输入内容" />
    </GridBox>
  </>
);
```

### 带图标 Input

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Input
        style={{ width: "300px" }}
        placeholder="请输入内容"
        icon="search"
      />
    </GridBox>
  </>
);
```

### 不同大小 Input

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="请输入内容"  size="lg" />
    </GridBox>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="请输入内容" size="sm" />
    </GridBox>
  </>
);
```

### 带前后缀 Input

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Input
        style={{ width: "300px" }}
        placeholder="请输入内容"
        prepend="https://"
      />
    </GridBox>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="请输入内容" append=".com" />
    </GridBox>
  </>
);
```

### 被禁用 Input

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="请输入内容" disabled />
    </GridBox>
  </>
);
```
