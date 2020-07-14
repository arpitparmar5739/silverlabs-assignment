import React, { useRef } from "react";
import VideoPlayer from "../../common/videoPlayer";
import VideoControlAndInfo from "./videoControlAndInfo";
import styles from "./home.module.css";
import UserInfo from "./userInfo";

const VideoContainer = ({ video, isPlaying, setIsPlaying, isVisible }) => {
  const id = video.id;
  const { originalUrl: videoUrl, coverImageUrl: posterUrl } = video.video;
  const videoContainerRef = useRef(null);
  const name = video.channel && video.channel.user && video.channel.user.name;
  const title = video.channel && video.channel.title;
  const viewCount = video.meta && video.meta.viewCount;

  const handlePause = useRef(() => setIsPlaying(false)).current;

  if (isVisible && videoContainerRef.current) {
    videoContainerRef.current.scrollIntoView({
      block: "start",
    });
  }

  return (
    <div className={styles.videoContainer} ref={videoContainerRef}>
      <VideoPlayer
        videoId={id}
        videoUrl={videoUrl}
        posterUrl={posterUrl}
        onPause={handlePause}
        isPlaying={isPlaying}
      />
      <VideoControlAndInfo isPlaying={isPlaying} currentVideo={video} />
      <UserInfo name={name} videoTitle={title} viewCount={viewCount} />
    </div>
  );
};

export default VideoContainer;
