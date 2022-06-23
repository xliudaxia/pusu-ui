## Alert 警告提示

### 不同类型的 Alert

```tsx
import React from "react";
import { Alert } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Alert type="default" message="Default 类型的 Alert" />
    </GridBox>
    <GridBox>
      <Alert type="success" message="Success 类型的 Alert" />
    </GridBox>
    <GridBox>
      <Alert type="danger" message="Danger 类型的 Alert" />
    </GridBox>
    <GridBox>
      <Alert type="warning" message="Warning 类型的 Alert" />
    </GridBox>
  </>
);
```

### 具有描述信息的 Alert

```tsx
import React from "react";
import { Alert } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Alert type="default" message="Default 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="success" message="Success 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="danger" message="Danger 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="warning" message="Warning 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert
        type="primary"
        message="自定义 Description 的 Alert"
        children={
          <>
            <div>第一个段落</div>
            <div>第二个段落</div>
          </>
        }
        onClose={() => {}}
      />
    </GridBox>
  </>
);
```

### 可以关闭的 Alert

```tsx
import React from "react";
import { Alert } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Alert type="default" closable message="Default 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="success" closable message="Success 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="danger" closable message="Danger 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert type="warning" closable message="Warning 类型的 Alert">
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert
        type="primary"
        closable
        message="自定义 Description 的 Alert"
        children={
          <>
            <div>第一个段落</div>
            <div>第二个段落</div>
          </>
        }
        onClose={() => {}}
      />
    </GridBox>
  </>
);
```

### 带 Icon 的 Alert

```tsx
import React from "react";
import { Alert } from "pusu-ui";
import "pusu-ui/dist/index.css";

const GridBox = (props) => <div style={{ margin: 20 }}>{props.children}</div>;

export default () => (
  <>
    <GridBox>
      <Alert
        icon="clipboard"
        iconTheme="danger"
        type="default"
        message="Default 类型的 Alert"
      >
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert
        icon="cheese"
        iconTheme="danger"
        type="success"
        message="Success 类型的 Alert"
      >
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert
        icon="crow"
        iconTheme="danger"
        type="danger"
        message="Danger 类型的 Alert"
      >
        我是用于演示的内容区域
      </Alert>
    </GridBox>
    <GridBox>
      <Alert
        icon="couch"
        iconTheme="danger"
        type="warning"
        message="Warning 类型的 Alert"
      >
        我是用于演示的内容区域
      </Alert>
    </GridBox>
  </>
);
```
