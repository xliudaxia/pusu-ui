/*
 * @Author: jessLiu
 * @Date: 2022-02-07 20:41:01
 * @LastEditTime: 2022-02-07 20:49:25
 * @LastEditors: liuwenhao
 * @Description:Progress component
 * @FilePath: /vikingship/src/components/Progress/progress.tsx
 */
import React, { FC } from "react";
import { Themeprops } from "../Icon";
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: Themeprops;
}
const Progress: FC<ProgressProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div className="pusu-progress-bar" style={styles}>
      <div
        className="pusu-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`pusu-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
