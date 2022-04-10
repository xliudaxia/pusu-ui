import React, { FC } from "react";
import { UploadFileProps } from "./upload";
import Icon from "../Icon";
import Progress from "../Progress";

interface UploadListProps {
  fileList: UploadFileProps[];
  onRemove: (_file: UploadFileProps) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul>
      {fileList.map((item) => {
        return (
          <li className="pusu-upload-list-item" key={item.uuid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {item.status === "uploading" && (
                <Icon icon={"spinner"} spin theme="primary"></Icon>
              )}
              {item.status === "success" && (
                <Icon icon={"check-circle"} theme="success"></Icon>
              )}
              {item.status === "error" && (
                <Icon icon={"times-circle"} theme="danger"></Icon>
              )}
            </span>
            <span className="file-actions">
              <Icon
                icon="times"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
