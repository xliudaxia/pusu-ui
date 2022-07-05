## Message 全局提示

### 基础使用

```tsx
import React from "react";
import { Message, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

export default () => (
  <>
    <Button
      size="sm"
      onClick={() => Message.info({ content: "一条信息类型的提示" })}
      btnType="primary"
    >
      展示普通提示信息
    </Button>
  </>
);
```

### 不同类型的消息提示

```tsx
import React from "react";
import { Message, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

export default () => (
  <>
    <Button
      size="sm"
      style={{
        ...LayoutCSS,
        background: "green",
        color: "white",
        border: "none",
      }}
      onClick={() => Message.success({ content: "一条成功类型的提示" })}
    >
      成功提示信息
    </Button>
    <Button
      size="sm"
      style={{
        ...LayoutCSS,
        background: "red",
        color: "white",
        border: "none",
      }}
      onClick={() => Message.error({ content: "一条错误类型的提示" })}
    >
      错误提示信息
    </Button>
    <Button
      size="sm"
      style={{
        ...LayoutCSS,
        background: "orange",
        color: "white",
        border: "none",
      }}
      onClick={() => Message.warning({ content: "一条警告类型的提示" })}
    >
      警告提示信息
    </Button>
    <Button
      size="sm"
      style={{ ...LayoutCSS, background: "#bfa", border: "none" }}
      onClick={() => Message.loading({ content: "一条loading类型的提示" })}
    >
      Loading提示信息
    </Button>
  </>
);
```

### 进阶应用

```tsx
import React from "react";
import { Message, Button } from "pusu-ui";
import "pusu-ui/dist/index.css";

const LayoutCSS = { marginBottom: 20, marginRight: 20 };

export default () => (
  <>
    <Button
      style={{ ...LayoutCSS }}
      size="sm"
      onClick={() =>
        Message.success({ content: "一条成功类型的提示", duration: 6 })
      }
    >
      自定义持续时间（单位：秒）
    </Button>
    <Button
      style={{ ...LayoutCSS }}
      size="sm"
      onClick={() => {
        Message.loading({
          content: "请求数据中...",
          onClose: () => Message.success({ content: "已完成！" }),
        });
      }}
    >
      自定义回调操作
    </Button>
    <Button
      style={{ ...LayoutCSS }}
      size="sm"
      onClick={() =>
        Message.info({
          content: "自定义 Icon 图标",
          icon: "camera-retro",
        })
      }
    >
      自定义图标
    </Button>
  </>
);
```
