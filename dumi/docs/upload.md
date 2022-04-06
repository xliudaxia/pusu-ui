## Upload 上传

### 基础使用

```tsx
import React from "react";
import { Upload,Icon } from "pusu-ui";
import "pusu-ui/dist/index.css";


export default () => (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/><br/>
      <p>Drag file over to upload</p>
    </Upload>
  </>
);
```
