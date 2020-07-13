import React, { useRef, useEffect } from "react";
import styles from "./videoPlayer.module.css";

const VideoPlayer = ({ videoId, videoUrl, posterUrl, isPlaying, onPause }) => {
  const videoPlayer = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoPlayer.current.play();
    } else {
      videoPlayer.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoPlayer.current.currentTime = 0;
    onPause();
  }, [videoId, onPause]);

  return (
    <video
      src={videoUrl}
      onClick={onPause}
      ref={videoPlayer}
      poster={posterUrl}
      className={styles.videoPlayer}
    />
  );
};

export default VideoPlayer;
