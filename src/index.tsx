// export { default as Button } from "./components/Button";
// export { default as Menu } from "./components/Menu";
// export { default as Icon } from "./components/Icon";

// export { default as AutoComplete } from "./components/AutoComplete";
// export { default as Input } from "./components/Input";
// export { default as Upload } from "./components/Upload";
// export { default as Progress } from "./components/Progress";

import React from "react";
import ReactDOM from "react-dom";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Upload, UploadFileProps } from "./components/Upload/upload";
import "./styles/index.scss";

ReactDOM.render(
  <>
    <Alert type="success" closeable title="this is Success" />
    <Alert type="danger" closeable title="this is Danger!" />
    <Alert type="warning" closeable={false} title="this is Warning!" />
  </>,
  document.getElementById("root")
);
