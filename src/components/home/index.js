import React, { useState, useRef } from "react";
import ALL_VIDEOS from "../../constants/data.json";
import VideoContainer from "./videoContainer";
import { SWIPE_DIRECTIONS } from "../../constants";
import useGestures from "../../hooks/useGestures.js";
import styles from "./home.module.css";

const Home = ({ windowSize }) => {
  const homeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = ALL_VIDEOS[currentVideoIndex];

  const handleSwipes = (swipeDirection) => {
    if (!showUserInfo) {
      switch (swipeDirection) {
        case SWIPE_DIRECTIONS.UP:
          if (currentVideoIndex < ALL_VIDEOS.length - 1) {
            setIsPlaying(false);
            setCurrentVideoIndex(currentVideoIndex + 1);
          }
          break;
        case SWIPE_DIRECTIONS.DOWN:
          if (currentVideoIndex > 0) {
            setIsPlaying(false);
            setCurrentVideoIndex(currentVideoIndex - 1);
          }
          break;
        case SWIPE_DIRECTIONS.LEFT:
          setIsPlaying(false);
          setShowUserInfo(true);
          break;
        case SWIPE_DIRECTIONS.RIGHT:
          setIsPlaying(false);
          setShowUserInfo(false);
          break;
        case SWIPE_DIRECTIONS.TOUCH:
          setIsPlaying(!isPlaying);
          break;
        default:
          break;
      }
    } else {
      if (swipeDirection === SWIPE_DIRECTIONS.RIGHT) {
        setShowUserInfo(false);
      }
    }
  };

  useGestures(homeRef, handleSwipes);

  return (
    <div
      ref={homeRef}
      className={
        styles.homeContainer +
        (showUserInfo ? ` ${styles.homeContainerUserInfo}` : "")
      }
    >
      {ALL_VIDEOS.map((video) => {
        return (
          <VideoContainer
            video={video}
            key={video.id}
            setIsPlaying={setIsPlaying}
            isVisible={video.id === currentVideo.id}
            isPlaying={isPlaying && video.id === currentVideo.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
