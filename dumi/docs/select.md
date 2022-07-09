## Select 选择器

### 基础使用

```tsx
import React from "react";
import { Select } from "pusu-ui";
import "pusu-ui/dist/index.css";

const { Option } = Select;

export default () => (
  <>
    <Select style={{ width: 300 }}>
      <Option value="Jack">Jack</Option>
      <Option value="Lucy">Lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </Select>
  </>
);
```

### 带默认值的 Select

```tsx
import React from "react";
import { Select } from "pusu-ui";
import "pusu-ui/dist/index.css";

const { Option } = Select;

export default () => (
  <>
    <Select defaultValue="jack 🤗" style={{ width: 300 }}>
      <Option value="Jack 🤗">Jack</Option>
      <Option value="Lucy">Lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </Select>
  </>
);
```

### 禁用的 Select

```tsx
import React from "react";
import { Select } from "pusu-ui";
import "pusu-ui/dist/index.css";

const { Option } = Select;

export default () => (
  <>
    <Select disabled defaultValue="Jack" style={{ width: 300 }}>
      <Option value="Jack">Jack</Option>
      <Option value="Lucy">Lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </Select>
  </>
);
```


### 禁用选项的 Select

```tsx
import React from "react";
import { Select } from "pusu-ui";
import "pusu-ui/dist/index.css";

const { Option } = Select;

export default () => (
  <>
    <Select  defaultValue="jack" style={{ width: 300 }}>
      <Option value="Jack">Jack</Option>
      <Option value="Lucy">Lucy</Option>
      <Option disabled value="yiminghe">yiminghe</Option>
    </Select>
  </>
);
```
