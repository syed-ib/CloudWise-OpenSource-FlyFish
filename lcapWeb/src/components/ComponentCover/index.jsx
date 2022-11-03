import React from "react";
import styles from "./style.less";

export default function ComponentCover({ link, onClick, width }) {
  return (
    <div className={styles.ComponentCoverWrap}>
      <img
        className={styles.ComponentCover}
        src={
          window.LCAP_CONFIG.snapshotAddress +
          link +
          `?t=${parseInt(new Date().getTime() / 10000)}`
        }
        width={width}
        onClick={() => {
          onClick && onClick();
        }}
      ></img>
    </div>
  );
}
