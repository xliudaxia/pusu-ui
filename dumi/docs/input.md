## Input 输入框

### 基本使用

```tsx
import React, { useState } from "react";
import { Input } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default () => (
  <>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="placeholder" />
    </GridBox>
    <GridBox>
      <ControlledInput />
    </GridBox>
    <GridBox></GridBox>
    <GridBox></GridBox>
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
      <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
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
        placeholder="input with icon"
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
      <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    </GridBox>
    <GridBox>
      <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
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
        defaultValue="prepend text"
        prepend="https://"
      />
    </GridBox>
    <GridBox>
      <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
    </GridBox>
  </>
);
```
