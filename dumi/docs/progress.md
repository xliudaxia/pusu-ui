## Progress 进度条

### 基础使用

```tsx
import React from "react";
import { Progress } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Progress percent={20} />
  </>
);
```

### 不显示百分比

```tsx
import React from "react";
import { Progress } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Progress percent={50} showText={false} />
  </>
);
```

### 不同高度

```tsx
import React from "react";
import { Progress } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Progress percent={50} theme="success" strokeHeight={50} />
  </>
);
```