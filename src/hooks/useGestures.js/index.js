import { useEffect } from "react";
import { SWIPE_DIRECTIONS } from "../../constants";

export default function useGestures(ref, handleSwipe) {
  const threshold = 50;
  const restraint = 100;
  const allowedTime = 300;

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    let startX, startY, startTime;

    const handleTouchStart = (event) => {
      const touchobj = event.changedTouches[0];
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      event.preventDefault();
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    const handleTouchEnd = (event) => {
      var touchobj = event.changedTouches[0];
      const distX = touchobj.pageX - startX; // Get horizontal dist traveled by finger while in contact with surface
      const distY = touchobj.pageY - startY; // Get vertical dist traveled by finger while in contact with surface
      const elapsedTime = new Date().getTime() - startTime; // Get time elapsed
      let swipeDir = "";

      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          swipeDir = distX < 0 ? SWIPE_DIRECTIONS.LEFT : SWIPE_DIRECTIONS.RIGHT; // If dist traveled is negative, it indicates left swipe
        } else if (
          Math.abs(distY) >= threshold &&
          Math.abs(distX) <= restraint
        ) {
          swipeDir = distY < 0 ? SWIPE_DIRECTIONS.UP : SWIPE_DIRECTIONS.DOWN; // If dist traveled is negative, it indicates up swipe
        }
        handleSwipe(swipeDir);
      }

      if (distY + distX === 0) handleSwipe(SWIPE_DIRECTIONS.TOUCH);
      // console.log(swipeDir, distX, distY);
    };

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);
    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [ref, handleSwipe]);
}
