// export { default as Button } from "./components/Button";
// export { default as Menu } from "./components/Menu";
// export { default as Icon } from "./components/Icon";

// export { default as AutoComplete } from "./components/AutoComplete";
// export { default as Input } from "./components/Input";

import React from "react";
import ReactDOM from "react-dom";
import { Upload, UploadFileProps } from "./components/Upload/upload";
import "./styles/index.scss";

const defaultFileList: UploadFileProps[] = [
  {
    uuid: "123",
    size: 123,
    name: "文件1.md",
    status: "uploading",
    percent: 20,
  },
  { uuid: "12311", size: 22, name: "文件2.md", status: "success", percent: 50 },
  { uuid: "12312", size: 22, name: "文件3.md", status: "error", percent: 80 },
];

ReactDOM.render(
  <Upload
    onProgress={(percent) => {
      console.log("上传中", percent);
    }}
    onError={(err) => {
      console.log("报错", err);
    }}
    onSuccess={(suc) => {
      console.log("成功了", suc);
    }}
    onChange={() => {
      console.log("变化了");
    }}
    defaultFileList={defaultFileList}
    action="http://jsonplaceholder.typicode.com/posts"
  />,
  document.getElementById("root")
);
