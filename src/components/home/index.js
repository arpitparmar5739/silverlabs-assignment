import React, { useState, useRef } from "react";
import ALL_VIDEOS from "../../constants/data.json";
import UserInfo from "./userInfo";
import VideoContainer from "./videoContainer";
import { SWIPE_DIRECTIONS } from "../../constants";
import useGestures from "../../hooks/useGestures.js";
import styles from "./home.module.css";

const Home = () => {
  const homeRef = useRef(null);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = ALL_VIDEOS[currentVideoIndex];
  const name =
    currentVideo.channel &&
    currentVideo.channel.user &&
    currentVideo.channel.user.name;
  const title = currentVideo.channel && currentVideo.channel.title;
  const viewCount = currentVideo.meta && currentVideo.meta.viewCount;

  const handleSwipes = (swipeDirection) => {
    switch (swipeDirection) {
      case SWIPE_DIRECTIONS.UP:
        if (currentVideoIndex < ALL_VIDEOS.length - 1)
          setCurrentVideoIndex(currentVideoIndex + 1);
        break;
      case SWIPE_DIRECTIONS.DOWN:
        if (currentVideoIndex > 0) setCurrentVideoIndex(currentVideoIndex - 1);
        break;
      case SWIPE_DIRECTIONS.LEFT:
        setShowUserInfo(true);
        break;
      case SWIPE_DIRECTIONS.RIGHT:
        setShowUserInfo(false);
        break;
      default:
        break;
    }
  };

  useGestures(homeRef, handleSwipes);

  return (
    <div ref={homeRef} className={styles.homeContainer}>
      {showUserInfo ? (
        <UserInfo name={name} videoTitle={title} viewCount={viewCount} />
      ) : (
        <VideoContainer currentVideo={currentVideo} />
      )}
    </div>
  );
};

export default Home;
