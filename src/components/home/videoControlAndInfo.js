import React from "react";
import styles from "./home.module.css";

import playImage from "../../assets/images/play.png";
import pauseImage from "../../assets/images/pause.png";

const VideoControlAndInfo = ({ currentVideo, isPlaying }) => {
  const title = (currentVideo.channel && currentVideo.channel.title) || null;

  return (
    !isPlaying && (
      <div className={styles.videoControlAndInfo}>
        <div className={styles.videoControl}>
          <img alt={"Play/Pause"} src={isPlaying ? pauseImage : playImage} />
        </div>
        <div className={styles.videoInfo}>{title}</div>
      </div>
    )
  );
};

export default VideoControlAndInfo;
