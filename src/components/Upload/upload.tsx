import axios from "axios";
import { ChangeEvent, FC, useRef, useState } from "react";
import Button from "../Button";
import UploadList from "./uploadList";

export type UploadFileStatus = "ready" | "uploading" | "success" | "error";

export interface UploadFileProps {
  uuid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  defaultFileList?: UploadFileProps[];
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFileProps) => void;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
  } = props;
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFileProps[]>(
    defaultFileList || []
  );

  const updateFileList = (
    updateFile: UploadFileProps,
    updateObj: Partial<UploadFileProps>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uuid === updateFile.uuid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const handleFilechange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  const post = (file: File) => {
    let _file: UploadFileProps = {
      uuid: Date.now() + "upload-file",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "uploading" });
          }
          if (onProgress) {
            onProgress(percentage, file);
          }
        },
      })
      .then((resp) => {
        updateFileList(_file, { status: "success", response: resp.data });
        if (onSuccess) {
          onSuccess(resp.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        console.error(err);
        updateFileList(_file, { status: "error", error: err });
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };

  const handleRemove = (file: UploadFileProps) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uuid !== file.uuid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  return (
    <div className="pusu-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        Upload file
      </Button>
      <input
        ref={fileRef}
        type="file"
        className="pusu-file-input"
        onChange={handleFilechange}
        style={{ display: "none" }}
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};
