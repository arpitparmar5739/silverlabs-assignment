import React from "react";
import styles from "./home.module.css";

const UserInfo = ({ name, videoTitle, viewCount }) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userInfoBlock}>
        <p>{`Name: ${name || "Not Available"}`}</p>
        <p>{`Video Title: ${videoTitle || "Not Available"}`}</p>
        <p>{`View Count: ${viewCount || "Not Available"}`}</p>
      </div>
    </div>
  );
};

export default UserInfo;
