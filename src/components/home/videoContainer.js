import React, { useState, useRef } from "react";
import VideoPlayer from "../../common/videoPlayer";
import VideoControlAndInfo from "./videoControlAndInfo";
import styles from "./home.module.css";

const VideoContainer = ({ currentVideo }) => {
  const id = currentVideo.id;
  const {
    originalUrl: videoUrl,
    coverImageUrl: posterUrl,
  } = currentVideo.video;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePause = useRef(() => setIsPlaying(false)).current;
  const togglePlayVideo = () => setIsPlaying(!isPlaying);

  return (
    <div className={styles.videoContainer}>
      <VideoPlayer
        videoId={id}
        videoUrl={videoUrl}
        posterUrl={posterUrl}
        onPause={handlePause}
        isPlaying={isPlaying}
      />
      <VideoControlAndInfo
        isPlaying={isPlaying}
        currentVideo={currentVideo}
        onTogglePlayVideo={togglePlayVideo}
      />
    </div>
  );
};

export default VideoContainer;
