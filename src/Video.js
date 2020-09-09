import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video({ src, id }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    // if playing, pause it
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    // ifpaused, play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        ref={videoRef}
        className="video_player"
        loop
        src={src}
      />
      <VideoFooter />
    </div>
  );
}

export default Video;
